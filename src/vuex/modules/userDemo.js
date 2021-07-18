// // content
// import api from '@/api/user'
// import router from '@/router/index.js'
// // import {setStore,getStore,removeStore} from '@/common/js/util'

// import comMethods from '@/common/js/gobal'



// //state
// const state = {
// 	user: {},
// 	userInfo: {},
// 	userAccount: {},
// 	token: comMethods.getLocalStore('token')
// }

// //mutations
// const mutations = {
// 	LOGIN: (state, token) => {
// 		comMethods.setLocalStore('token',token)
// 		state.token = token;
// 	},
// 	LOGOUT: (state) => {
// 		comMethods.removeLocalStore('token')
// 		state.token = null
// 		state.user =  {}
// 		state.userInfo =  {}
// 		state.userAccount =  {}
// 	},
// 	SET_USER: (state, user) => {
// 		Object.assign(state.user,user)//将一个或多个复制到第一个参数
// 	},
// 	SET_USER_INFO: (state, userInfo) => {
// 		Object.assign(state.userInfo,userInfo)
// 	},
// 	SET_USER_ACCOUNT: (state, userAccount) => {
// 		Object.assign(state.userAccount,userAccount)
// 	},
// }
// // actions
// const actions = {
// 	login({ dispatch,commit }, token) {//登录后只是存token令牌，没有存用户信息
// //		return new Promise((resolve,reject) => {
// //			api.login(user).then(response => {
// //				const data = response.data;
// 				commit('LOGIN', token)
// //				  resovle(response)
// //			}).catch(error => {
// //				reject(error)
// //			})
// //		})
// 	},
// //
// 	logout({ commit }){
// 		commit('LOGOUT')
// 	},
// 	//getUserInfo获取信息

// 	// 注意：Promise.resolve('foo')
// 	// // 等价于
// 	// new Promise(resolve => resolve('foo'))
// 	getUserInfo({ commit }) {
// 		return new Promise((resolve,reject) => {
// 			api.getUserInfo().then(response => {
// 				const data = response.data;
// 				commit('SET_USER',data.user)
// 				commit('SET_USER_INFO',data.userInfo)
// 				commit('SET_USER_ACCOUNT',data.userAccount)
// 				resolve(response)
// 			}).catch(error => {
// 				reject(error)
// 			})
// 		})
// 	},
// // 等价于
// 	// getUserInfo({ commit }) {
// 	// 		api.getUserInfo().then(response => {
// 	// 			const data = response.data;
// 	// 			commit('SET_USER',data.user)
// 	// 			commit('SET_USER_INFO',data.userInfo)
// 	// 			commit('SET_USER_ACCOUNT',data.userAccount)
// 	// 			return	Promise.resolve(response)
// 	// 		}).catch(error => {
// 	// 			return	Promise.reject(error)
// 	// 		})
// 	// },
// 	//修改用户信息
//       updateUser({ commit }, user) {
// 				return new Promise((resolve,reject) => {
// 					api.updateUser(user).then(response => {
// 						 if (response.code == 200) {
// 							commit('SET_USER_INFO',user)
// 						 }
// 					 	 resolve(response)
// 					}).catch(error => {
// 						reject(error)
// 					})
// 				})
// 	},
// 	flashUser({ dispatch,commit }){
// 		let token = comMethods.getLocalStore('token')
// 		if(token){
// 			commit('login', token)
// 			return dispatch('getUserInfo')
// 		}
// 	}
// }

// const getters = {
// 	token: state => state.token,
// 	user : state =>	state.user,
// 	userInfo : state =>	state.userInfo,
// 	userAccount : state =>	state.userAccount
// }

// export default {
// 	state,
// 	actions,
// 	getters,
// 	mutations
// }