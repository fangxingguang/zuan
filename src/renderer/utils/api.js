import Vue from 'vue'
import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = window.api;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        if (store.state.user.userInfo) {
            config.headers.Authorization = store.state.user.userInfo.token;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

Vue.prototype.$http = axios;
export default axios;