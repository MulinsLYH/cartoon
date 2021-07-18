
// 栗子

import api from '@/config/axios'

export default {
	getCartoonType(cartoon,page,type){
		// return api.get('/cartoon_media?cartoon='+cartoon+'&page='+page+'&type='+type)
		return api.get(`/cartoon_media?cartoon=${cartoon}&page=${page}&type=${type}`)

	},
	getCartoonHistory(){
		// return api.get('/cartoon_pic_media?cartoon='+cartoon+'&page='+page+'&type='+type)
		// return api.get(`/cartoon_pic_media?cartoon=${cartoon}&page=${page}&type=${type}`)
		return api.get('/cartoon_pic_media')


	},

}