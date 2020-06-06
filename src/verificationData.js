import axios from 'axios';

export let addVerification = async (fullName, email, address, ssn) => {
    let verificationObj = {
        "fullName": fullName,
        "email": email,
        "address": address,
        "ssn": ssn
    };

    let obj = JSON.stringify(verificationObj);

     var xhr = new XMLHttpRequest()
     xhr.addEventListener('load', () => {
    //     // update the state of the component with the result here
         console.log(xhr.responseText)
    })

    xhr.open('POST',  "/verify/add/", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(obj);

}
