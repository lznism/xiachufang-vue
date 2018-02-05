import axios from 'axios';

var http = axios.create({
    baseURL: '/api',
    timeout: 10000
});

export default {
    get(url, params = {}) {
        return http.get(url, {
            params
        }).then(res => res.data);
    },
    post(url, data) {
        return http.post(url, data).then(res => {
            return res.data;
        });
    }
}