
export let addBusiness = async (numShares, pricePerShare,  busName, busSymbol, busType, busDesc) => {
    let busObj = {
        "busName": busName,
        "symbol": busSymbol,
        "numShares": numShares,
        "pricePerShare": pricePerShare,
        "bustype": busType,
        "busdescription": busDesc
    };

    let obj = JSON.stringify(busObj);

    console.log("test.me")
    try {
        var xhr = await new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
               console.log(xhr.responseText)
          })
      
          xhr.open('POST',  "/bus/add", true);
          xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
          xhr.send(obj);
    }
     catch(err) {
         alert(err);
     }
     
}

