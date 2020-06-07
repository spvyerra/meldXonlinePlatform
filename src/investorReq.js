import axios from 'axios';

export let addVerification = async (obj) => {
    const url = '/user/add';

    let res = await axios.post(url, obj)
        .catch(err => console.log(err));
    
    return res;
}
