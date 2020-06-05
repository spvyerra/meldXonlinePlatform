pragma solidity ^0.6.8;

import "./Imports/Address.sol";
import "./Imports/Context.sol";
import "./Imports/SafeMath.sol";
import "./Imports/MinterRole.sol";
import "./Imports/IERC20.sol";
import "./verify.sol";


// Interface based on ERC-20 Standard
// https://github.com/ethereum/EIPs/issues/20

contract MeldCoin is verify, Context, MinterRole, IERC20 {
    using SafeMath for uint256;
    using Address for address;

    uint256 private _totalSupply;

    string private _name = "MeldCoin";
    string private _symbol = "MLD";
    uint8 private _decimals = 2;

    mapping(address => uint256) private _balances;

    constructor() public verify(msg.sender) MinterRole() {}

    function name() public view returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public override view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account)
        public
        override
        view
        returns (uint256 balance)
    {
        return _balances[account];
    }

    function transfer(address recipient, uint256 amount)
        public
        override
        returns (bool success)
    {
        require(isVerified(recipient), "To address is not verified");
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function mint(address account, uint256 amount)
        public
        onlyMinter
        returns (bool)
    {
        require(isVerified(account), "To address is not verified");
        _mint(account, amount);
        return true;
    }

    function burn(address user, uint256 amount) public onlyMinter {
        _burn(user, amount);
    }

    //Can't transfer from other account
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public override isAdmin returns (bool success) {
        require(isVerified(_to), "To address is not verified");
        require(isVerified(_from), "From address is not verified");
        require(
            _balances[_from] >= _value,
            "Sender does not have enough tokens to transfer"
        );

        _transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value)
        public
        override
        returns (bool success)
    {
        revert("Not an allowed call");
    }

    // Don't need anything
    function allowance(address _owner, address _spender)
        public
        override
        view
        returns (uint256 remaining)
    {
        revert("Not an allowed call");
    }

    // Internal Functions

    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: mint to the zero address");

        //_beforeTokenTransfer(address(0), account, amount);

        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        //_beforeTokenTransfer(sender, recipient, amount);

        _balances[sender] = _balances[sender].sub(amount);
        //, "ERC20: transfer amount exceeds balance");
        _balances[recipient] = _balances[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ERC20: burn from the zero address");

        _balances[account] = _balances[account].sub(
            amount,
            "ERC20: burn amount exceeds balance"
        );
        _totalSupply = _totalSupply.sub(amount);
        emit Transfer(account, address(0), amount);
    }
}
