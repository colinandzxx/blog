import { message } from "antd";
import ajax from "./ajax";

// const BASE = 'http://localhost:5000'
const BASE = "https://randomuser.me";

// 获取测试列表
export const reqFakeList = (results) =>
  ajax(BASE + "/api", { results: results, inc: 'name,gender,email,nat', noinfo:'true' }, "GET");
