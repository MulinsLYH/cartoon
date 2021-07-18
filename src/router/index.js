import Vue from 'vue'
import Router from 'vue-router'


import store from '@/vuex/vuex'
import Toast from '@/components/toast'
import { Indicator } from 'mint-ui';
import comMethods from '@/common/js/gobal'

Vue.use(Router)

// 解决 Vue 重复点击相同路由，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题
//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
  // return originalPush.call(this, location)
}

// import HelloWorld from '@/components/HelloWorld'
/*也可以用这种形式：
 const login = resolve => require(['@/views/login/login'],resolve);
{ path: '/login', name: 'login', component: login,meta : {title : '登录'} },
*/


const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', meta: { title: '登录' }, component: resolve => require(['@/pages/login/login.vue'], resolve), },
    // {
    //   path: '/', component: resolve => require(['@/pages/demo'], resolve),
    //    children: [
    //     { path: '/huiyuan', name: 'huiyuan', meta: { title: '会员'}, component: resolve => require(['@/pages/huiyuan/huiyuan.vue'], resolve) },
    //     { path: '/', redirect: '/huiyuan' },//注意：children必须有重定向
    //   ]
    // },
    { path: '/demo2', name: 'demo2', meta: { title: 'demo2' }, component: resolve => require(['@/pages/demo2.vue'], resolve), },











    {
      path: '/home', component: resolve => require(['@/pages/home.vue'], resolve),
      children: [
        { path: '/index', name: 'index', meta: { bigTitle: '首页',title: '首页' }, component: resolve => require(['@/pages/homePages/index.vue'], resolve) },

        { path: '/', redirect: '/index' }
      ]
    },



    // search
    { path: '/searchList/:value', name: 'searchList', meta: { title: 'searchList' }, component: resolve => require(['@/pages/search/searchList.vue'], resolve), },


// 分类
    { path: '/classification', name: 'classification', meta: { bigTitle: '分类' ,title: '分类'}, component: resolve => require(['@/pages/classification/index.vue'], resolve), },

    // 我的
    { path: '/my', name: 'my', meta: { bigTitle: '我的',title: '我的' }, component: resolve => require(['@/pages/my/index.vue'], resolve), },

    
    
    {
      path: '/knowledgesIndex',component: resolve => require(['@/pages/knowledges/index.vue'], resolve),
      children: [
        // knowledges/swiper/知识点
      // swiper1)基于vue实现移动端点击上方导航，内容滑动切换，内容滑动导航自动切换
      { path: '/swiperAutoNavAndContent', name: 'swiperAutoNavAndContent', meta: { bigTitle: '知识点',title: '内容滑动导航自动切换',index : 0 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/swiper/vue-awesome-swiper-autoNavAndContent.vue'], resolve), },
      //swiper2) 切换效果
      { path: '/swiperCoverflow', name: 'swiperCoverflow', meta: { bigTitle: '知识点',title: '切换效果',index : 1 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/swiper/vue-awesome-swiper-coverflow.vue'], resolve), },
      // swiper3)经典
      { path: '/swiperNavigation', name: 'swiperNavigation', meta: { bigTitle: '知识点',title: '经典',index :2,requireAuth:true }, component: resolve => require(['@/pages/knowledges/swiper/vue-awesome-swiper-navigation.vue'], resolve), },
      // swiper4)缩略图
      { path: '/swiperThumbs', name: 'swiperThumbs', meta: { bigTitle: '知识点',title: '缩略图',index :3 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/swiper/vue-awesome-swiper-thumbs.vue'], resolve), },
      // swiper5)网格分布
      { path: '/swiperGrid', name: 'swiperGrid', meta: { bigTitle: '知识点',title: '网格分布',index : 4 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/swiper/vue-awesome-swiper-grid.vue'], resolve), },
      // 多行多列栗子@/components/change-multiple-rows-and-columns.vue

      // js
      { path: '/es6', name: 'es6', meta: {bigTitle: '知识点', title: 'es6',index :0  ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/es6.vue'], resolve), },
      { path: '/learn1', name: 'learn1', meta: {bigTitle: '知识点', title: 'js基础1' ,index : 1,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/learn1.vue'], resolve), },
      { path: '/learn2', name: 'learn2', meta: {bigTitle: '知识点', title: 'js基础2',index : 2 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/learn2.vue'], resolve), },
      { path: '/learn3', name: 'learn3', meta: {bigTitle: '知识点', title: 'js基础3',index : 3 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/learn3.vue'], resolve), },
      { path: '/processing', name: 'processing', meta: {bigTitle: '知识点', title: '进修',index :4 ,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/processing.vue'], resolve), },
      { path: '/jsDemo', name: 'jsDemo', meta: {bigTitle: '知识点', title: 'js例子',index :5,requireAuth:true}, component: resolve => require(['@/pages/knowledges/javaScript/demo.vue'], resolve), },

      // vue知识点
      { path: '/vTag', name: 'vTag', meta: {bigTitle: '知识点', title: 'vue指令',index : 0,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/v_tag.vue'], resolve), },
      { path: '/modifier', name: 'modifier', meta: {bigTitle: '知识点', title: 'vue修饰符',index : 1,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/modifier.vue'], resolve), },
      { path: '/lifecycle', name: 'lifecycle', meta: { bigTitle: '知识点',title: '生命周期',index : 2,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/lifecycle.vue'], resolve), },
      { path: '/vuex', name: 'vuex', meta: {bigTitle: '知识点', title: 'vuex',index : 3,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/vuex.vue'], resolve), },
      { path: '/ergodic', name: 'ergodic', meta: {bigTitle: '知识点', title: '组件遍历',index : 4,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/ergodic.vue'], resolve), },
      { path: '/router', name: 'router', meta: {bigTitle: '知识点', title: '路由传参',index : 5,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/router.vue'], resolve), },
      { path: '/class', name: 'class', meta: {bigTitle: '知识点', title: '动态样式',index : 6,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/class.vue'], resolve), },
      { path: '/quote', name: 'quote', meta: {bigTitle: '知识点', title: '引用less',index : 7,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/quote.vue'], resolve), },
      { path: '/parent', name: 'parent', meta: {bigTitle: '知识点', title: '子父通讯',index : 8,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/parent.vue'], resolve), },
      { path: '/public', name: 'public', meta: { bigTitle: '知识点',title: '全局方法',index : 9,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/public.vue'], resolve), },
      { path: '/watch', name: 'watch', meta: {bigTitle: '知识点', title: 'watch监听',index : 10,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/watch.vue'], resolve), },
      { path: '/computed', name: 'computed', meta: { bigTitle: '知识点',title: 'computed',index : 11,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/computed.vue'], resolve), },
      { path: '/filters', name: 'filters', meta: { bigTitle: '知识点',title: 'filters',index : 12,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/filters.vue'], resolve), },
      { path: '/transition', name: 'transition', meta: { bigTitle: '知识点',title: 'transition',index : 13,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/transition.vue'], resolve), },
      { path: '/refs', name: 'refs', meta: { bigTitle: '知识点',title: 'refs',index : 14,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/refs.vue'], resolve), },
      { path: '/mock', name: 'mock', meta: {bigTitle: '知识点', title: 'mock模拟接口',index : 15,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/mock.vue'], resolve), },
      { path: '/cache', name: 'cache', meta: {bigTitle: '知识点', title: '缓存',index : 16,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/cache.vue'], resolve), },
      { path: '/axios', name: 'axios', meta: {bigTitle: '知识点', title: 'axios配置',index : 17,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/axios.vue'], resolve), },
      { path: '/relativePath', name: 'relativePath', meta: { bigTitle: '知识点',title: '图片相对路径',index : 18,requireAuth:true}, component: resolve => require(['@/pages/knowledges/vue/relativePath.vue'], resolve), },


        { path: '/', redirect: '/swiperAutoNavAndContent' }
      ]
    },

  ]
})



router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // Indicator.open({
  //     spinnerType: 'triple-bounce'
  // });
  if (to.matched.some(record => record.meta.requireAuth)) {
        // console.log(store.state.user.userInfo)//刷新
      if(JSON.parse(comMethods.getLocalStore('userInfo'))&&JSON.parse(comMethods.getLocalStore('userInfo')).token){//本地是否保存token,若手动输入/login跳入登录页面，若是其他页面
        next();
      }else{
        next({
          path: '/login',
          query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
  }else{
    next();
  }
});
router.afterEach(transition => {
  Indicator.close();

});
export default router;












































/***
* 路由拦截：也可以放在main.js里  栗子1
*
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  let routeScreen = ['/login','/neutralgear'];
  if (to.path == '/login') {
      sessionStorage.removeItem('token');
  }else if(routeScreen.indexOf(to.path)==-1&&from.path == '/'){// 刷新判断
      if(to.path=='/game'){
          sessionStorage.setItem('save_path','/home');
      }else{
          sessionStorage.setItem('save_path',to.path);
      }
      next({path: '/neutralgear'});
  }
// 通过刷新判断，跳转至/neutralgear页面
  let user = sessionStorage.getItem('token');
  let beforeRouterArr = ['/login','/register','/line'];
  if (!user && beforeRouterArr.indexOf(to.path)==-1) {//需要登录权限
      next({path: '/login'});
  } else {//不需要登录权限
      NProgress.start();
      next()
  }
});
router.afterEach(transition => {
NProgress.done();
});



// 2、修改
import NProgress from 'nprogress'; // 路由变化的转圈进度条
import 'nprogress/nprogress.css'; // 加载转圈进度条样式
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.path == '/login') { // 登录页面，删除token缓存
        sessionStorage.removeItem('token');
    }
    if (to.path == '/home' && !sessionStorage.getItem('token')) { // path: '/' 路由默认页，检查有无token，无则跳回登录（需要登录权限）
      next({path: '/login'}); // next页面跳转
    }
    if(from.path == '/' && sessionStorage.getItem('token')){ // 刷新判断
      penCache.dispatch('getPlayerInfo',penMeans.amateur_getPlayer()); //调用vuex和全局方法
    }

    //2）2、修改中多余部分 通过刷新判断，跳转至/neutralgear页面
    // let routeScreen = ['/login','/neutralgear'];
    // if(routeScreen.indexOf(to.path)==-1&&from.path == '/'){ // 刷新判断
    //     if(to.path=='/game'){
    //         sessionStorage.setItem('save_path','/home');
    //     }else{
    //         sessionStorage.setItem('save_path',to.path);
    //     }
    //     next({path: '/neutralgear'}); // next页面跳转
    // }

    NProgress.start(); // 开始动画
    next(); // next默认跳转（不能漏）
}); 
router.afterEach(transition => {
  NProgress.done(); // 结束动画
});
* *****/


/****
* 栗子2：
* router.beforeEach((to, from, next) => {
store.commit('SET_LOADING',true)//是否加载动画
if (to.matched.some(record => record.meta.requireAuth)) {// 判断该路由是否需要登录权限
  if(store.state.user.token){//本地是否保存token,若手动输入/login跳入登录页面，若是其他页面
    if (to.path === '/login') {
      next({ path: '/' })
    }else{
      if(store.getters.user.user){
        next({ ...to,replace:true})// // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record这样导航就不会留下历史记录
      }else{
        store.dispatch('getUserInfo').then(res => {//由于这个栗子登录后只是存token,没有获取数据，所以如果没有用户信息时，当非login页面时有信息继续执行，无时请求获取用户信息，获取失败退出登录跳到登录页面。注意：vuex中若项目退出或刷新页面时，无保存
          if(res.code==200){
            next();
          }
        }).catch(() => {
          store.dispatch('logout').then(() => {
                Toast({
                  message: respone.message,
                  position: 'bottom',
                  duration: 3000
                });
                 next({ path: '/login' })
           })
        })
      }
    }
  }else{
     next({
      path: '/login',
      query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
}
else {
 next();
}
})

router.afterEach(() => {
store.commit('SET_LOADING',false)
})
**/