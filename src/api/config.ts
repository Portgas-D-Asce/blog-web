import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    timeout: 1000
});

//请求拦截器
server.interceptors.request.use((req) => {
    return req;
});

//响应拦截器
server.interceptors.response.use((res) => {
    return res;
});

export default server;