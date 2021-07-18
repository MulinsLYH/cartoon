import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import pool from './modules/pool';
import user from './modules/user';

const debug = process.env.NODE_ENV !== 'production' //在非生产环境下，使用严格模式

export default new Vuex.Store({
	modules: {
		pool,
		user,
	},
	strict: debug,//不要在mutation函数外修改state的值，否则报"Error: [vuex] do not mutate vuex store state outside mutation handlers."

})
