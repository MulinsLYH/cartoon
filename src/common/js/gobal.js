//栗子1 import { Message, MessageBox } from 'element-ui'
// import router from '@/router'
// const common = {
//     // youcanyouup: state => state.youcanyouup,
//     // common :()=>{
//     //     console.log('公用方法')
//     //     Message.success('语音语音9999')
//     // },
//     common(){
//         console.log('公用方法')
//         Message.success('语音语音9999')
//         // router.push({path: '/huiyuan'})
//     },
    

// }
// export default common



// 栗子2
import router from '@/router';
import Toast from '@/components/toast/index.js'
import store from '@/vuex/vuex'

// import cache from '../vuex/vuex.js';
const comic = {
    //vue项目，输入框限制输入15个中文，或者30个英文

    setLocalStore(name, content)  {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },
    getLocalStore(name) {
        if (!name) return;
        return window.localStorage.getItem(name);
    },

    removeLocalStore(name) {
        if (!name) return;
        return window.localStorage.getItem(name);
    },
    setSessionStore(name, content) {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.sessionStorage.setItem(name, content);
    },
    getSessionStore(name){
        if (!name) return;
        return window.sessionStorage.getItem(name);
    },
    removeSessionStore(name){
        if (!name) return;
        window.sessionStorage.removeItem(name);
    },



    /**
    * 格式化时间
    */

   formatDate(date,fmt) { //author: meizz
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    },
    parseTime(time, cFormat) {
        if (arguments.length === 0) {
        return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    
        let date
        if (typeof time === 'object') {
        date = time
        } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
        }
        const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
        }
        const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
        })
        return time_str
    },
   
   
  
   //日期加减

   computeDate(date,days){
        var nd = new Date(date);
        nd = nd.valueOf();
        nd = nd + days * 24 * 60 * 60 * 1000;
        nd = new Date(nd);
        return parseTime(nd);
    },
  

    //根据传入的value来获取其Name值
    getObjectName(obj,value) {
        if(obj instanceof Array){
        for(let i=0;i<obj.length;i++){
            if(obj[i].value=== value){
            return obj[i].name;
            }
        }
        }
    },





    validateTextLength (value) {
        // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
        let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g
        let mat = value.match(cnReg)
        let length
        if (mat) {
            if(mat.length>=6){
                length = 6
                return {length: length,active: true,chinese: true}
            }else{
                length = (mat.length + (value.length - mat.length) * 0.5)
                return {length: length,active: true,chinese: false}
            }
        } else {
            length = value.length * 0.5;
            return {length: length,active: false,chinese: false}
        }
    },
    /* 大小写字母*/
    validatAlphabets(str) {
        const reg = /^[A-Za-z]+$/
        return reg.test(str)
    },
    // 只能是数字
    validatNumber(str) {
        const reg = /^\d{6}$/
        return reg.test(str)
    },
    //6-12位数字和字母的组合
    validatNumberLowerCase(str) {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,12}$/
        return reg.test(str)
    },
    //判断是否为空
    isEmpty(str){
        if(str == ''||str == null||str == undefined){
            return true;
        }else{
            return false;
        }
    },
    //不能输入特殊字符
    validatSpecial(str){
        const reg = new RegExp("[\\+,\\/,\\\\,\\?,\\？,\\%,\\#,\\&,\\=,\\(,\\),\\（,\\）,\\{,\\},\\',\\\",\\<,\\>,\\@,\\!,\\！,\\$,\\.,\\，,\\、,\\:,\\：,\\;,\\；,\\￥,\\*,\\~,\\`,\\-,\\——,\\_,\\^,\\“,\\”,\\‘,\\’,\\……,\\【,\\】,\\[,\\],\\,]", "gm");
        if(reg.test(str)){
            Message.error('不能输入特殊字符！');
            return {state: true,value: str.replace(reg, "")};
        }else{
            return {state: false,value: ''};
        }
    },
    //判断是否微信浏览器
    is_weixn(){  
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") {  
            return true;  
        } else {  
            return false;  
        }  
    },
    isMoblie: function (value) {
		return !/^1\d{10}$/.test(value);
    },
    //vue中动态获取文本换行
    trim(str) {  //str表示要转换的字符串
        return str.replace(/\n|\r\n/g,"<br/>");
    },




    judgeToken(){
        if(!store.state.user.token){

            Toast({
                message: '请先登录',
                position: 'center',
                duration: 2000,
                callBack : function(){
                 
                }
            })
            return false;
        }
    },
    //当前时间转时间戳（精确到毫秒）
    timeStamp(){
        return new Date().getTime();
    },
    //时间戳转时间  https://www.cnblogs.com/zhaojunhao/p/9630315.html
    getLocalTime(nS) {    
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");     
    },
    overallHeight(value){
        let overallApp = document.getElementById(value);
        // //console.log('jianting###',overallApp);
        if(overallApp!=null){
            overallApp.style.height = document.body.clientHeight+'px';
        }
    },
    getQuery (variable) { // 获取(url?id=12&name='')的参数
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return false;
    },
    pxToRem (num) { // 移动端px转rem
        return num / Number(sessionStorage.getItem('pixelSize'))
      },
      remToPx (num) { // 移动端rem转px
        return num * Number(sessionStorage.getItem('pixelSize'))
      }

    //函数有参数传入，且有匿名函数回调
    // amateur_login(account,password,host,callback){//登陆
    //     callback();
    // },
    
    // amateur_get_email(page,callback){//获取邮件
    //     let json = {
    //         list: cache.getters.email_list,
    //         nowpage: 1,
    //         totalpages: 1,
    //         totalrows: cache.getters.email_list.length
    //     }
    //     callback(json);
    // },
    // amateur_get_email_single(id,callback){//获取单条邮件信息
    //     cache.commit('emailReaded',id);
    //     callback(cache.getters.email_single);
    // },
    // amateur_get_email_add(obj,callback){//暂无-增加邮件
    //     cache.commit('emailAdd',obj);
    //     callback(cache.getters.email_list);
    // },
    // amateur_get_email_dele(id,callback){//删除邮件
    //     cache.commit('emailDelete',id);
    //     let json = {
    //         list: cache.getters.email_list,
    //         nowpage: 1,
    //         totalpages: 1,
    //         totalrows: cache.getters.email_list.length
    //     }
    //     callback(json);
    // },
   
    
   
}

export default comic;