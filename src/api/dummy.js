import axios from "axios";

const dummy = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default dummy;