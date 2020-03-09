import { message } from "antd";
import ajax from "./ajax";

const BASE = "http://localhost:8000";
// const BASE = "https://randomuser.me";

// 获取测试列表
export const reqFakeList = num => ajax(BASE + "/api/", {}, "GET");
//   ajax(BASE + "/api", { results: num, inc: 'name,gender,email,nat', noinfo:'true' }, "GET");
