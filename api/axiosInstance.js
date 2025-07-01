import request from "~/utils/request.js";

/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: "/login",
    method: "POST",
    data,
  });
};

/**
 * 登录后获取用户信息
 */
export const getinfo = () => {
  return request({
    url: "/getinfo",
    method: "POST",
  });
};

/**
 * 退出登录
 */
export const logout = () => {
  return request({
    url: "/logout",
    method: "POST",
  });
};

/**
 * 修改密码
 */
export const updatepassword = (data) => {
  console.log(data, "87");
  return request({
    url: "/updatepassword",
    method: "POST",
    data,
  });
};

/**
 * 首页卡片
 */
export const statistics = () => {
  return request({
    url: "/statistics1",
    method: "GET",
  });
};