import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://playlist-app-2-72fd3.firebaseio.com/',
});

export default instance;