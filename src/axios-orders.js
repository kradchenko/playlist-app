import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://playlist-app-648ae.firebaseio.com/',
});

export default instance;