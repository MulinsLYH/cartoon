import login from './login.json';
// 登录
let loginApi = function (res) {
    /*
    
    |- token ---------- token(24小时失效)
    |- nickname ------------ 昵称
    |- avatar_img ---------- 头像
    |- sex ---------------- 性别
    |- vip --------------- vip等级
    |- store_id ------------ 商店id
    |- user_id ------------ 用户id
    
    */   let json =  JSON.parse(res.body);
        login.user_info.nickname = json.username;

        // console.log(res,'resw')
        return login
    }
    
    
    export default {
       
        loginApi
    };