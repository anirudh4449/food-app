import axios from 'axios';

export default axios.create({
    baseURL:'http://3.17.70.101:8080/api/food',
    headers:{
        'Content-Type':'application/json'
    }
});
