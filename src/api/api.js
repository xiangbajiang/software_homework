import { get, post } from "../plugins/axios";
//登陆
export const login = login =>
  post("http://127.0.0.1:8081/user/checkPassword", login);
//上传
export const upload = upload => get("/api/get/upload", upload);
