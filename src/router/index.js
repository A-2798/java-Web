import { createRouter, createWebHistory } from "vue-router";
import Login from "~/layout/login.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/home",
        component: () => import("~/views/home.vue"), // 懒加载
        meta: {
            title: "首页",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "login",
        component: Login,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
