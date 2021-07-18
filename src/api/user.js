import api from '@/config/axios'

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
	// updateUser(user){
	//    return api.put('/users/info',user)
	// }
}