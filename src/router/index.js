import { createRouter, createWebHistory } from "vue-router";
import adminAll from "~/layout/adminAll.vue";

const routes = [
    {
        path: "/",
        name: "admin",
        component: adminAll,
    },
    {
        path: "/login",
        component: () => import("~/views/login.vue"), // 懒加载
        meta: {
            title: "登录页",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "admin",
        component: adminAll,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
