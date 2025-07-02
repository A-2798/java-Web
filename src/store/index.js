// store/index.js
import { createStore } from "vuex";
import { login, getinfo } from "../../api/axiosInstance.js";
import { setToken, removeToken } from "~/utils/cookies.js"; //引入缓存cookies

// import md5 from "md5";

export default createStore({
    state: {
        user: "", //用信息
        leftMenu: true, //左侧menu栏显示隐藏
        menus: [], //左侧menu数据
        ruleName: [], //左侧menu栏显示隐藏
    },
    mutations: {
        SET_USERINFO(state, user) {
            state.user = user;
        },
        leftMenuAll(state, leftMenu) {
            state.leftMenu = !state.leftMenu;
            console.log("112");
        },
        SET_MENUS(state, menus) {
            state.menus = menus;
        },
        SET_RULENAME(state, ruleName) {
            state.ruleName = ruleName;
        },
    },
    actions: {
        // 登录
        login({ commit }, userInfo) {
            const { username, password } = userInfo;
            return new Promise((resolve, reject) => {
                // login({ username, password: md5(password) })
                login({ username, password: password })
                    .then((res) => {
                        setToken(res.token); // 将token存入cookie
                        resolve(res); //调用成功
                    })
                    .catch((err) => reject(err)); //调用失败
            });
        },
        // 登录后获取用户信息
        getinfo({ commit }) {
            return new Promise((resolve, reject) => {
                getinfo()
                    .then((res) => {
                        commit("SET_USERINFO", res); //将res返回的用户信息参数传给SET_USERINFO，存储在vuex中的user中
                        commit("SET_MENUS", res.menus); //将res返回的用户信息参数传给SET_MENUS，存储在vuex中的user中
                        commit("SET_RULENAME", res.ruleNames); //将res返回的用户信息参数传给SET_RULENAME，存储在vuex中的user中
                        resolve(res); //调用成功
                    })
                    .catch((err) => reject(err)); //调用失败
            });
        },

        // 退出登录
        logout() {
            this.commit("SET_USERINFO", {}); //清空vuex中的用户信息
            removeToken(); //清空cookies中的token
        },
    },
    modules: {
        // 可以添加其他的 modules
    },
});
