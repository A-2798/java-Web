import request from "~/utils/request.js";

/**
 * 获取列表
 */
export const getUser = (data) => {
  return request({
    url: "/list",
    method: "GET",
    data,
  });
};


/**
 * 分页
 */
export const getPagination = (params) => {
  return request({
    url: "/page",
    method: "GET",
    params,
  });
};