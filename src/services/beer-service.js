import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers/'
});

const list = () => {
    return http.get('/')
        .then(response => response.data)
}


const detail = (beerId) => {
    return http.get(`/${beerId}`)
        .then(response => {
            const beer = response.data
            console.log(beer)
        })
}



export default {
    list,
    detail
}