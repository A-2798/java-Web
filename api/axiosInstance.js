import request from "~/utils/request.js";

/**
 * 首页卡片
 */
export const statistics = () => {
  return request({
    url: "/statistics1",
    method: "GET",
  });
};
