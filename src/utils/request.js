import axios from "axios";
import { getToken } from "~/utils/cookies.js"; //获取引入缓存cookies

const service = axios.create({
    baseURL: "/user", //vite框架写法
    timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        //其他接口如果需要传token会自动往header头添加token
        const token = getToken();
        if (token) {
            config.headers["token"] = token;
        }

        return config; // 必须返回配置
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        return response.data.data;
    },
    (error) => {
        console.error(error.response.data.msg || "账号或密码错误!", "error");

        return Promise.reject(error);
    }
);

export default service;
