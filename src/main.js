// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'

// PC端px to rem 适配需要引入的文件
// import '../static/capital/flexible' 
import '../static/capital/rem'


import '../static/database/index'; // 不能用if动态加载js
// import allKey from '../static/capital/allKey.json'
// if (allKey['key']) {
//   require('../database/index') // 可以动态加载，不报错
// }
// import axios from 'axios'
// 引入axios已封的文件
import axios from './config/axios'

Vue.prototype.$axios = axios;//将已封装axios挂载在vue实例原型上


import Toast from '@/components/toast/index'

Vue.use(Toast)




// PC端
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI)


// 在入口文件中引入(暂时不支持单组件引入的方式):
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'//（如果你使用的是2.6.0以上的版本要自己手动去加载css）
Vue.use(VueAwesomeSwiper)

// 按需引入部分组件
import 'mint-ui/lib/style.css'
import { MessageBox ,Spinner,Swipe, SwipeItem ,Cell, Tabbar, TabItem ,Navbar,TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);



// 封装公共方法
import comMethods from './common/js/gobal'
Vue.prototype.$comMethods = comMethods;

import store from './vuex/vuex'


// 如果没有@/config/domain.js,可以用以下
// import overall from '../static/capital/overall.json'
// let domain;
// if (process.env.NODE_ENV === 'development') {
//     domain = overall.development;
// } else {
//     domain = location.protocol + '//' + window.location.host;
// }
// Vue.prototype.$domain = domain;



 


//{size: 'small'}是一个参数，设置之后项目中所有拥有 size 属性的组件的默认尺寸均为 'small'。


Vue.config.productionTip = false

/* eslint-disable no-new */
// this.$router
// this.$store
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
