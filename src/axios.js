// This code help you to easly address the link whithout using full url but instead only path /link


import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4444'
})

//Middleware auth
instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');


    return config;
})

export default instance