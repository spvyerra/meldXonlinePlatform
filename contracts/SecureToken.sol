pragma solidity ^0.6.8;

import "./Imports/Context.sol";
import "./Imports/SafeMath.sol";
import "./Imports/IERC20.sol";
import {Roles} from "./Imports/Roles.sol";


// Forked from ETH standards
// https://github.com/davesag/ERC884-reference-implementation/blob/develop/contracts/token/ERC884/ERC884.sol

/**
 *  An `ERC20` compatible token that conforms to Delaware State Senate,
 *  149th General Assembly, Senate Bill No. 69: An act to Amend Title 8
 *  of the Delaware Code Relating to the General Corporation Law.
 *
 *  Implementation Details.
 *
 *  An implementation of this token standard SHOULD provide the following:
 *
 *  `name` - for use by wallets and exchanges.
 *  `symbol` - for use by wallets and exchanges.
 *
 *  The implementation MUST take care not to allow unauthorised access to share
 *  transfer functions.
 *
 *  In addition to the above the following optional `ERC20` function MUST be defined.
 *
 *  `decimals` — MUST return `0` as each token represents a single Share and Shares are non-divisible.
 *
 *  @dev Ref https://github.com/ethereum/EIPs/pull/884
 */
contract SecureToken is IERC20, Context {
    using Roles for address;

    // Security Variables
    string private NAME;
    string private SYMBOL;

    // Roles of users
    Roles.Role owner;
    Roles.Role shareholders;
    Roles.Role admin;

    // State Variables
    mapping(address => bytes32) private verifiedHashes;
    mapping(address => uint256) private holderAmt;
    uint256 holders;
    uint256 sharesOut;

    function name() external view returns (string memory) {
        return NAME;
    }

    function symbol() external view returns (string memory) {
        return SYMBOL;
    }

    function decimals() external pure returns (uint8) {
        return 0;
    }

    /**
     *  This event is emitted when a verified address and associated identity hash are
     *  added to the contract.
     *  @param addr The address that was added.
     *  @param hash The identity hash associated with the address.
     *  @param sender The address that caused the address to be added.
     */
    event VerifiedAddressAdded(
        address indexed addr,
        bytes32 hash,
        address indexed sender
    );

    /**
     *  This event is emitted when a verified address its associated identity hash are
     *  removed from the contract.
     *  @param addr The address that was removed.
     *  @param sender The address that caused the address to be removed.
     */
    event VerifiedAddressRemoved(address indexed addr, address indexed sender);

    /**
     *  This event is emitted when the identity hash associated with a verified address is updated.
     *  @param addr The address whose hash was updated.
     *  @param oldHash The identity hash that was associated with the address.
     *  @param hash The hash now associated with the address.
     *  @param sender The address that caused the hash to be updated.
     */
    event VerifiedAddressUpdated(
        address indexed addr,
        bytes32 oldHash,
        bytes32 hash,
        address indexed sender
    );

    /**
     *  This event is emitted when an address is cancelled and replaced with
     *  a new address.  This happens in the case where a shareholder has
     *  lost access to their original address and needs to have their share
     *  reissued to a new address.  This is the equivalent of issuing replacement
     *  share certificates.
     *  @param original The address being superseded.
     *  @param replacement The new address.
     *  @param sender The address that caused the address to be superseded.
     */
    event VerifiedAddressSuperseded(
        address indexed original,
        address indexed replacement,
        address indexed sender
    );

    constructor(
        address owner_in,
        bytes32 hash,
        uint256 numShares,
        string memory name_in,
        string memory symbol_in
    ) public {
        NAME = name_in;
        SYMBOL = symbol_in;

        Roles.add(admin, _msgSender());
        Roles.add(owner, owner_in);
        Roles.add(shareholders, owner_in);

        holderAmt[owner_in] = numShares;
        sharesOut = numShares;

        holders = 1;
        addVerified(owner_in, hash);
    }

    // Modifiers
    modifier isAdmin() {
        require(
            Roles.has(admin, _msgSender()),
            "User must be admin of contract"
        );
        _;
    }

    modifier personalShares(address userAddr) {
        require(
            userAddr == _msgSender(),
            "Cannot view different person's shares"
        );
        require(Roles.has(shareholders, _msgSender()), "User must own shares");
        _;
    }

    /**
     *  Add a verified address, along with an associated verification hash to the contract.
     *  Upon successful addition of a verified address, the contract must emit
     *  `VerifiedAddressAdded(addr, hash, msg.sender)`.
     *  It MUST throw if the supplied address or hash are zero, or if the address has already been supplied.
     *  @param addr The address of the person represented by the supplied hash.
     *  @param hash A cryptographic hash of the address holder's verified information.
     */
    function addVerified(address addr, bytes32 hash) public isAdmin {
        require(addr != address(0) && hash != 0, "Inputs must be nonzero");

        verifiedHashes[addr] = hash;
        emit VerifiedAddressAdded(addr, hash, _msgSender());
    }

    /**
     *  Remove a verified address, and the associated verification hash. If the address is
     *  unknown to the contract then this does nothing. If the address is successfully removed, this
     *  function must emit `VerifiedAddressRemoved(addr, msg.sender)`.
     *  It MUST throw if an attempt is made to remove a verifiedAddress that owns Tokens.
     *  @param addr The verified address to be removed.
     */
    function removeVerified(address addr) public isAdmin {
        if (!isVerified(addr)) return;

        delete verifiedHashes[addr];
        emit VerifiedAddressRemoved(addr, _msgSender());
    }

    /**
     *  Update the hash for a verified address known to the contract.
     *  Upon successful update of a verified address the contract must emit
     *  `VerifiedAddressUpdated(addr, oldHash, hash, msg.sender)`.
     *  If the hash is the same as the value already stored then
     *  no `VerifiedAddressUpdated` event is to be emitted.
     *  It MUST throw if the hash is zero, or if the address is unverified.
     *  @param addr The verified address of the person represented by the supplied hash.
     *  @param hash A new cryptographic hash of the address holder's updated verified information.
     */
    function updateVerified(address addr, bytes32 hash) public isAdmin {
        require(isVerified(addr) && hash != 0, "Inputs must be nonzero");
        if (verifiedHashes[addr] == hash) return;

        emit VerifiedAddressUpdated(
            addr,
            verifiedHashes[addr],
            hash,
            _msgSender()
        );
        verifiedHashes[addr] = hash;
    }

    /**
     *  Cancel the original address and reissue the Tokens to the replacement address.
     *  Access to this function MUST be strictly controlled.
     *  The `original` address MUST be removed from the set of verified addresses.
     *  Throw if the `original` address supplied is not a shareholder.
     *  Throw if the `replacement` address is not a verified address.
     *  Throw if the `replacement` address already holds Tokens.
     *  This function MUST emit the `VerifiedAddressSuperseded` event.
     *  @param original The address to be superseded. This address MUST NOT be reused.
     */
    function cancelAndReissue(address original, address replacement)
        public
        isAdmin
    {
        require(isHolder(original), "Original address not shareholder");
        require(isVerified(replacement), "Replacement address is not verified");
        require(
            !isHolder(replacement),
            "Replacement address is not allowed to hold any tokens"
        );

        Roles.remove(shareholders, original);
        Roles.add(shareholders, replacement);

        holderAmt[replacement] = holderAmt[original];
        holderAmt[original] = 0;

        emit VerifiedAddressSuperseded(original, replacement, _msgSender());
    }

    /**
     *  The `transfer` function MUST NOT allow transfers to addresses that
     *  have not been verified and added to the contract.
     *  If the `to` address is not currently a shareholder then it MUST become one.
     *  If the transfer will reduce `msg.sender`'s balance to 0 then that address
     *  MUST be removed from the list of shareholders.
     */
    function transfer(address to, uint256 value)
        public
        override
        returns (bool)
    {
        require(isVerified(to), "To address is not verified");
        require(
            holderAmt[_msgSender()] >= value,
            "Sender does not have enough tokens to transfer"
        );

        if (!Roles.has(shareholders, to)) Roles.add(shareholders, to);

        holderAmt[_msgSender()] -= value;
        holderAmt[to] += value;

        if (holderAmt[_msgSender()] > 0) holders++;
        else Roles.remove(shareholders, _msgSender());
    }

    /**
     *  The `transferFrom` function MUST NOT allow transfers to addresses that
     *  have not been verified and added to the contract.
     *  If the `to` address is not currently a shareholder then it MUST become one.
     *  If the transfer will reduce `from`'s balance to 0 then that address
     *  MUST be removed from the list of shareholders.
     */
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public override returns (bool) {
        require(isVerified(to), "To address is not verified");
        require(isVerified(from), "From address is not verified");
        require(
            holderAmt[from] >= value,
            "Sender does not have enough tokens to transfer"
        );

        if (!Roles.has(shareholders, to)) Roles.add(shareholders, to);

        holderAmt[from] -= value;
        holderAmt[to] += value;

        if (holderAmt[from] > 0) holders++;
        else Roles.remove(shareholders, _msgSender());
    }

    /**
     *  Tests that the supplied address is known to the contract.
     *  @param addr The address to test.
     *  @return true if the address is known to the contract.
     */
    function isVerified(address addr) public view returns (bool) {
        if (verifiedHashes[addr] != 0) return true;

        return false;
    }

    /**
     *  Checks to see if the supplied address is a share holder.
     *  @param addr The address to check.
     *  @return true if the supplied address owns a token.
     */
    function isHolder(address addr) public view returns (bool) {
        return Roles.has(shareholders, addr);
    }

    /**
     *  Checks that the supplied hash is associated with the given address.
     *  @param addr The address to test.
     *  @param hash The hash to test.
     *  @return true if the hash matches the one supplied with the address in `addVerified`, or `updateVerified`.
     */
    function hasHash(address addr, bytes32 hash) public view returns (bool) {
        if (verifiedHashes[addr] == hash) return true;

        return false;
    }

    /**
     *  The number of addresses that hold tokens.
     *  @return the number of unique addresses that hold tokens.
     */
    function holderCount() public view returns (uint256) {
        return holders;
    }

    function balanceOf(address account)
        external
        override
        view
        personalShares(account)
        returns (uint256)
    {
        return holderAmt[account];
    }

    function totalSupply() external override view returns (uint256) {
        return sharesOut;
    }

    /**
     *  By counting the number of token holders using `holderCount`
     *  you can retrieve the complete list of token holders, one at a time.
     *  It MUST throw if `index >= holderCount()`.
     *  @param index The zero-based index of the holder.
     *  @return the address of the token holder with the given index.
     */
    function holderAt(uint256 index) public view returns (address) {
        revert("Function not supported");
    }

    /**
     *  Checks to see if the supplied address was superseded.
     *  @param addr The address to check.
     *  @return true if the supplied address was superseded by another address.
     */
    function isSuperseded(address addr) public view returns (bool) {
        revert("Function not supported");
    }

    /**
     *  Gets the most recent address, given a superseded one.
     *  Addresses may be superseded multiple times, so this function needs to
     *  follow the chain of addresses until it reaches the final, verified address.
     *  @param addr The superseded address.
     *  @return the verified address that ultimately holds the share.
     */
    function getCurrentFor(address addr) public view returns (address) {
        revert("Function not supported");
    }

    // Functions that rea not allowed to be used.
    function allowance(address owner_in, address spender)
        external
        override
        view
        returns (uint256)
    {
        revert("Function not supported");
    }

    function approve(address spender, uint256 amount)
        external
        override
        returns (bool)
    {
        revert("Function not supported");
    }
}
