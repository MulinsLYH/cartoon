import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import router from '@/router' // 用于路由跳转 router.push({path: '/login'})
import means from '../common/js/gobal.js'
import domain from './domain'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url

    // baseURL: domain, // 请求域名设置
    // 请求超时时间
    timeout: 10000, // 网络超时时间
    withCredentials: false, // 是否允许携带cookie
    headers: {
        'Content-Type': 'application/json',// 请求头格式
    }
})

// 前端的Request Headers设置，对应后台的 Response Headers设置    (容易引起跨域)
service.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = '*';// 允许所有来源访问(跨域时，关键是后台设，前端也可以设置)
    config.cancelToken = axios.CancelToken.source().token;// 取消重复请求
    // header里存token参数,每一次服务器收到请求，都要验证有效期，有效期为一天(token可以判断登陆的状态,不能存中文)
    // token的获取：1.访问链接上的参数 2.浏览器缓存里 3.直接在登录接口获取
    config.headers['tgticket'] = means.getQuery('tgticket');
    return config
}, error => {
    Promise.reject(error)
})

// 接口拦截器 (可以控制成功回调和失败回调)
service.interceptors.response.use(response => {
    // console.log('后台返回的数据', response);
    if (response.data.data === 'checkToken') {
        // Message.error('登陆过期！');
        return Promise.reject(response); // 失败回调,捕捉异常
    } else {
        return response.data; // 成功回调
    }

    // if (!response.data.code) {//判断code是否为null,或undefined,是就返回false,所以要加非！
    //     Message({ message: '返回的code值找不到', type: 'error', duration: 3000 });
    //     return Promise.reject(response);// 失败回调,捕捉异常
    // } else {
    //     let code = response.data.code;// code码 1001会话过期, 1002无权限, 1003其他客户端登录了
    //     if ([1001, 1003].indexOf(code) > -1) {
    //         MessageBox.alert(response.data.message, {
    //             confirmButtonText: '确定',
    //             callback: action => {
    //                 router.push({path: '/login'});//路由跳转
    //             }
    //         })
    //         return Promise.reject(response)
    //     } else if ([1002].indexOf(code) > -1) {
    //         Message({ message: '无权限', type: 'error', duration: 3000 })
    //         return Promise.reject(response)
    //     } else {
    //         return response.data;//成功回调
    //     }
    // }
}, error => {
    // Message({ message: error.message, type: 'error', duration: 5000 })
    return Promise.reject(error)
})

export default service


























// import axios from 'axios'
// import router from '@/router'
// import Toast from '@/components/toast/index.js'
// import store from '@/vuex/vuex'
// import domain from './domain'

// // 创建axios实例
// axios.defaults.withCredentials = true
// const service = axios.create({
//   // baseURL: process.env.BASE_API, // api的base_url
//   baseURL: domain, // api的base_url

//   // 请求超时时间
//   timeout: 10000
// })
// service.$source = axios.CancelToken.source()
// // request拦截器
// service.interceptors.request.use(config => {

    
//   config.headers.post['Content-Type'] = 'application/json'
//   config.headers.get['Content-Type'] = 'application/json'
//   config.cancelToken = service.$source.token

//   // 每次发送请求之前判断vuex中是否存在token        
//   // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//   // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//   //header里存token,登录需要设,后台每一次请求要获取，不能把中文存在header
//   if(store.state.user.token){
//     config.headers['H-Token'] = store.state.user.token;
//   }
//   return config
// }, error => {
//   Promise.reject(error)
// })

// // respone拦截器
// service.interceptors.response.use(response => {
//     //console.log('Hk-拦截器',response);//根据后台状态修改
//     if (!response.data) {
//       return Promise.reject(response)
//     } else {
//       // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
//     // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等

//       if (!response.data.flag) { // code码 1001会话过期, 1002无权限, 1003其他客户端登录了
//         let code = response.data.code
//         if ([1001, 1003].indexOf(code) > -1) {


//           Toast({
//                 message: response.data.message,
//                 callBack : function(){
//                   router.replace('/login');
//                   store.dispatch('logout')
//                 }
//             })
        
            
//           return Promise.reject(response)
//         } else if ([1002].indexOf(code) > -1) {

//             Toast({
//                 message: '无权限',
//                 callBack : function(){
//                 }
//             })

//           return Promise.reject(response)
//         } else {

//           Toast({
//               message: response.data.message,
//               callBack : function(){
//               }
//           })
//           return Promise.reject(response)
//         }
//       } else {

//         Toast({
//             message: response.data.message,
//             callBack : function(){
//             }
//         })
//         return response.data
//       }
//     }
// },error => {
//     // Message({message: error.message,type: 'error',duration: 5000})
//     return Promise.reject(error)
// })
// /** 如果用mock.js封装api时，不能export default get post 方法，否则报this.$axios不是函数
// export default {
//   post(url, data) {
//     return service.post(url,JSON.stringify(data))
//   },

  
//   get(url, params) {
//     return service.get(url,{params: params})
//   },
//   // put(url, data) {
//   //   return service.put(url,JSON.stringify(data))
//   // }
// }
//  */

// export default service




























































































// /**




//  * axios封装：https://www.cnblogs.com/chaoyuehedy/p/9931146.html
//  * 
//  * 栗子1：
//  * 
//  * 
//  */
// import axios from 'axios'
// // import { Message, MessageBox } from 'element-ui'
// import router from '@/router'

// // 创建axios实例
// axios.defaults.withCredentials = true
// const service = axios.create({
//   // baseURL: process.env.BASE_API, // api的base_url
//   // 请求超时时间
//   timeout: 10000
// })
// service.$source = axios.CancelToken.source()
// // request拦截器
// service.interceptors.request.use(config => {

    
//   config.headers.post['Content-Type'] = 'application/json'
//   config.headers.get['Content-Type'] = 'application/json'
//   config.cancelToken = service.$source.token

//   // 每次发送请求之前判断vuex中是否存在token        
//   // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//   // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//   //header里存token,登录需要设,后台每一次请求要获取，不能把中文存在header
//   if(sessionStorage.getItem('token')){
//     config.headers['H-Token'] = sessionStorage.getItem('token');
//   }
//   return config
// }, error => {
//   Promise.reject(error)
// })

// // respone拦截器
// service.interceptors.response.use(response => {
//     //console.log('Hk-拦截器',response);//根据后台状态修改
//     if (!response.data) {
//       return Promise.reject(response)
//     } else {
//       // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
//     // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等

//       // if (!response.data.flag) { // code码 1001会话过期, 1002无权限, 1003其他客户端登录了
//       //   let code = response.data.code
//       //   if ([1001, 1003].indexOf(code) > -1) {
//       //     MessageBox.alert(response.data.message, {
//       //       confirmButtonText: '确定',
//       //       callback: action => {
//       //         router.replace('/login')
//       //         throw new Error('Whoops!')
//       //       }
//       //     })
//       //     return Promise.reject(response)
//       //   } else if ([1002].indexOf(code) > -1) {
//       //     Message({message: '无权限',type: 'error',duration: 3000})
//       //     return Promise.reject(response)
//       //   } else {
//       //     Message({message: response.data.message,type: 'error',duration: 3000})
//       //     return Promise.reject(response)
//       //   }
//       // } else {
//       //   Message({message: response.data.message,type: 'success',duration: 3000})
//       //   return response.data
//       // }
//     }
// },error => {
//     // Message({message: error.message,type: 'error',duration: 5000})
//     return Promise.reject(error)
// })

// export default service






















/*

栗子2

引入
一般我会在项目的src目录中，新建一个request文件夹，然后在里面新建一个http.js和一个api.js文件。http.js文件用来封装我们的axios，api.js用来统一管理我们的接口。

 

 

 

 

// 在http.js中引入axios
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import { Toast } from 'vant'; 
复制代码
环境的切换
我们的项目环境可能有开发环境、测试环境和生产环境。我们通过node的环境变量来匹配我们的默认的接口url前缀。axios.defaults.baseURL可以设置axios的默认请求地址就不多说了。

 

 

 

 

// 环境的切换
if (process.env.NODE_ENV == 'development') {  //开发 
    axios.defaults.baseURL = 'https://www.baidu.com';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'https://www.ceshi.com';
} 
else if (process.env.NODE_ENV == 'production') {//  生产，线上  
    axios.defaults.baseURL = 'https://www.production.com';
}复制代码
设置请求超时
通过axios.defaults.timeout设置默认的请求超时时间。例如超过了10s，就会告知用户当前请求超时，请刷新等。
 

 

 

 

axios.defaults.timeout = 10000;复制代码
post请求头的设置
post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置，即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8

 

 

 

 

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';复制代码
请求拦截
我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢，我们拦截请求是用来做什么的呢？比如，有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。

请求拦截
 

 

 

 

// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
import store from '@/store/index';

// 请求拦截器axios.interceptors.request.use(    
    config => {        
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;        
        token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => {        
        return Promise.error(error);    
})
复制代码
这里说一下token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。这时候或许有些小伙伴会有疑问了，就是每个请求都携带token，那么要是一个页面不需要用户登录就可以访问的怎么办呢？其实，你前端的请求可以携带token，但是后台可以选择不接收啊！

响应的拦截
 

 

 

 

// 响应拦截器
axios.interceptors.response.use(    
    response => {   
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:                    
                    router.replace({                        
                        path: '/login',                        
                        query: { 
                            redirect: router.currentRoute.fullPath 
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                     Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {                        
                        router.replace({                            
                            path: '/login',                            
                            query: { 
                                redirect: router.currentRoute.fullPath 
                            }                        
                        });                    
                    }, 1000);                    
                    break; 

                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });
            }
            return Promise.reject(error.response);
        }
    }    
});复制代码
响应拦截器很好理解，就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理。例如上面的思想：如果后台返回的状态码是200，则正常返回数据，否则的根据错误的状态码类型进行一些我们需要的错误，其实这里主要就是进行了错误的统一处理和没登录或登录过期后调整登录页的一个操作。

要注意的是，上面的Toast()方法，是我引入的vant库中的toast轻提示组件，你根据你的ui库，对应使用你的一个提示组件。

 

封装get方法和post方法
 

我们常用的ajax请求方法有get、post、put等方法，相信小伙伴都不会陌生。axios对应的也有很多类似的方法，不清楚的可以看下文档。但是为了简化我们的代码，我们还是要对其进行一个简单的封装。下面我们主要封装两个方法：get和post。
get方法：我们通过定义一个get函数，get函数有两个参数，第一个参数表示我们要请求的url地址，第二个参数是我们要携带的请求参数。get函数返回一个promise对象，当axios其请求成功时resolve服务器返回 值，请求失败时reject错误值。最后通过export抛出get函数。

 

 

 

 

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// export function get(url, params){    
//   return new Promise((resolve, reject) =>{        
//       axios.get(url, {            
//           params: params        
//       }).then(res => {
//           resolve(res.data);
//       }).catch(err =>{
//           reject(err.data)        
//   })    
// });}复制代码

// post方法：原理同get基本一样，但是要注意的是，post方法必须要使用对提交从参数对象进行序列化的操作，所以这里我们通过node的qs模块来序列化我们的参数。这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的。这就是文章开头我们import QS from 'qs';的原因。如果不明白序列化是什么意思的，就百度一下吧，答案一大堆。








// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//        axios.post(url, QS.stringify(params))
//       .then(res => {
//           resolve(res.data);
//       })
//       .catch(err =>{
//           reject(err.data)
//       })
//   });
// }复制代码
// 这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。区别就是，get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。而post的第二个参数就是一个参数对象。两者略微的区别要留意哦！





// axios的封装基本就完成了，下面再简单说下api的统一管理。
// 整齐的api就像电路板一样，即使再复杂也能很清晰整个线路。上面说了，我们会新建一个api.js,然后在这个文件中存放我们所有的api接口。

// 首先我们在api.js中引入我们封装的get和post方法








/**   
* api接口统一管理
*/
// import { get, post } from './http'复制代码
// 现在，例如我们有这样一个接口，是一个post请求：









// http://www.baiodu.com/api/v1/users/my_address/address_edit_before复制代码
// 我们可以在api.js中这样封装：









// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);复制代码
// 我们定义了一个apiAddress方法，这个方法有一个参数p，p是我们请求接口时携带的参数对象。而后调用了我们封装的post方法，post方法的第一个参数是我们的接口地址，第二个参数是apiAddress的p参数，即请求接口时携带的参数对象。最后通过export导出apiAddress。

// 然后在我们的页面中可以这样调用我们的api接口：









// import { apiAddress } from '@/request/api';// 导入我们的api接口
// export default {        
//   name: 'Address',    
//   created () {
//       this.onLoad();
//   },
//   methods: {            
//       // 获取数据            
//       onLoad() {
//           // 调用api接口，并且提供了两个参数                
//           apiAddress({                    
//               type: 0,                    
//               sort: 1                
//           }).then(res => {
//               // 获取数据成功后的其他操作
//               ………………                
//           })            
//       }        
//   }
// }复制代码
// 其他的api接口，就在pai.js中继续往下面扩展就可以了。友情提示，为每个接口写好注释哦！！！

// api接口管理的一个好处就是，我们把api统一集中起来，如果后期需要修改接口，我们就直接在api.js中找到对应的修改就好了，而不用去每一个页面查找我们的接口然后再修改会很麻烦。关键是，万一修改的量比较大，就规格gg了。还有就是如果直接在我们的业务代码修改接口，一不小心还容易动到我们的业务代码造成不必要的麻烦。



// 好了，最后把完成的axios封装代码奉上。







// /**axios封装
// * 请求拦截、相应拦截、错误统一处理
// */
// import axios from 'axios';import QS from 'qs';
// import { Toast } from 'vant';
// import store from '../store/index'

// // 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

// // 请求超时时间
// axios.defaults.timeout = 10000;

// // post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// // 请求拦截器
// axios.interceptors.request.use(    
//   config => {
//       // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//       // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//       const token = store.state.token;        
//       token && (config.headers.Authorization = token);        
//       return config;    
//   },    
//   error => {        
//       return Promise.error(error);    
//   })

// // 响应拦截器
// axios.interceptors.response.use(    
//   response => {        
//       if (response.status === 200) {            
//           return Promise.resolve(response);        
//       } else {            
//           return Promise.reject(response);        
//       }    
//   },
//   // 服务器状态码不是200的情况    
//   error => {        
//       if (error.response.status) {            
//           switch (error.response.status) {                
//               // 401: 未登录                
//               // 未登录则跳转登录页面，并携带当前页面的路径                
//               // 在登录成功后返回当前页面，这一步需要在登录页操作。                
//               case 401:                    
//                   router.replace({                        
//                       path: '/login',                        
//                       query: { redirect: router.currentRoute.fullPath } 
//                   });
//                   break;
//               // 403 token过期                
//               // 登录过期对用户进行提示                
//               // 清除本地token和清空vuex中token对象                
//               // 跳转登录页面                
//               case 403:                     
//                   Toast({                        
//                       message: '登录过期，请重新登录',                        
//                       duration: 1000,                        
//                       forbidClick: true                    
//                   });                    
//                   // 清除token                    
//                   localStorage.removeItem('token');                    
//                   store.commit('loginSuccess', null);                    
//                   // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
//                   setTimeout(() => {                        
//                       router.replace({                            
//                           path: '/login',                            
//                           query: { 
//                               redirect: router.currentRoute.fullPath 
//                           }                        
//                       });                    
//                   }, 1000);                    
//                   break; 
//               // 404请求不存在                
//               case 404:                    
//                   Toast({                        
//                       message: '网络请求不存在',                        
//                       duration: 1500,                        
//                       forbidClick: true                    
//                   });                    
//               break;                
//               // 其他错误，直接抛出错误提示                
//               default:                    
//                   Toast({                        
//                       message: error.response.data.message,                        
//                       duration: 1500,                        
//                       forbidClick: true                    
//                   });            
//           }            
//           return Promise.reject(error.response);        
//       }       
//   }
// );
// /** 
// * get方法，对应get请求 
// * @param {String} url [请求的url地址] 
// * @param {Object} params [请求时携带的参数] 
// */
// export function get(url, params){    
//   return new Promise((resolve, reject) =>{        
//       axios.get(url, {            
//           params: params        
//       })        
//       .then(res => {            
//           resolve(res.data);        
//       })        
//       .catch(err => {            
//           reject(err.data)        
//       })    
//   });
// }
// /** 
// * post方法，对应post请求 
// * @param {String} url [请求的url地址] 
// * @param {Object} params [请求时携带的参数] 
// */
// export function post(url, params) {    
//   return new Promise((resolve, reject) => {         
//       axios.post(url, QS.stringify(params))        
//       .then(res => {            
//           resolve(res.data);        
//       })        
//       .catch(err => {            
//           reject(err.data)        
//       })    
//   });
// }

/***
 * 
 * 
由于Promise resolve()用法

Promise.resolve('foo')/等价于

new Promise(resolve => resolve('foo'))

所以以下方法是等价的
 */
// export function get(url, params){    
//   return new Promise((resolve, reject) =>{        
//       axios.get(url, {            
//           params: params        
//       }).then(res => {
//           resolve(res.data);
//       }).catch(err =>{
//           reject(err.data)        
//   })    
// });}

// 等价于

// // export function get(url, params){    
//       axios.get(url, {            
//           params: params        
//       }).then(res => {
//         return  Promise.resolve(res.data);
//       }).catch(err =>{
//         return Promise.reject(err.data)        
//   })    
// }



/*
栗子3

import axios from 'axios'
import store from '../store'

import router from './router'
import Toast  from '@/components/toast'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.1.8:80/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`;
    }
    return config;
  },
  err => {
      Toast({
            message: err.message,
            position: 'bottom',
            duration: 3000
        });
     return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
  	const res = response.data;
  	if(res.code !== 200){
       Toast({
          message: res.message,
          duration: 5000
        });
       if (res.code == 401) {
        router.push("/login")
        store.dispatch('logout')
        //location.reload()
      }
  	}
   	return res;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit('LOGOUT');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response)
  });



export default {
    post(url, data) {
      return axios.post(url,JSON.stringify(data))
    },

    
    get(url, params) {
      return axios.get(url,{params: params})
    },
    put(url, data) {
      return axios.put(url,JSON.stringify(data))
    }
}

/***
 * 
 * api封装：、
 * 
 * 新建文件夹api,api下建user.js
 * 
 * import api from '@/config/axios'


export default {
	login(user) {
		return api.post('/auth/login',user)
	},
	register(user){
	    return api.post('/auth/register',user)
	},
	getUserInfo(){
	   return api.get('/users/info')
	},
	updateUser(user){
	   return api.put('/users/info',user)
	}
}


使用store中即vuex状态管理中

import api from '@/api/user'


	getUserInfo({ commit }) {
		return new Promise((resolve,reject) => {
			api.getUserInfo().then(response => {
				const data = response.data;
				commit('SET_USER',data.user)
				commit('SET_USER_INFO',data.userInfo)
				commit('SET_USER_ACCOUNT',data.userAccount)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
  },
  
  	getUserInfo({ commit }) {
			api.getUserInfo().then(response => {
				const data = response.data;
				commit('SET_USER',data.user)
				commit('SET_USER_INFO',data.userInfo)
				commit('SET_USER_ACCOUNT',data.userAccount)
				return	Promise.resolve(response)
			}).catch(error => {
				return	Promise.reject(error)
			})
  },
  
  或在vue文件中使用：


@/api/friendMedia.js
  import api from '@/config/axios'

export default {
	queryList(params) {
		return api.get('/friend_media/list',params)
	},
	getMedia(id){
		return api.get('/friend_media/'+id)
	},
	getMediaListByIds(params){
		return api.get('/friend_media/getMediaListByIds/',params)
	}
}
单独文件中
import api from '@/api/friendMedia'
    async getMediaData(){
    		if(this.friendMediaIds){
    			this.searchForm.mediaIds=this.friendMediaIds.toString()
				}
    		await api.getMediaListByIds(this.searchForm).then(response=>{
    			if(response.code == 200){
    				this.temp=response.data
    			}
    		})
    	},
 * 
 * 
 * 
 * 
 */








