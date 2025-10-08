import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; //针对路由路径设置

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), //  ~代表在src下
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:9090",  // 代理的服务器地址  后缀不用写 api
        changeOrigin: true, // 是否跨域
      },
    },
  },
});
