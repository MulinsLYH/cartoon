
// 栗子

import api from '@/config/axios'
import overall from '../static/capital/overall.json'
let domain;
if (process.env.NODE_ENV === 'development') {
    domain = overall.development;
} else {
    domain = location.protocol + '//' + window.location.host;
}
export default {
	queryList(params) {
		return api.get(domain+'/friend_media/list',params)
	},
	getMedia(id){
		return api.get('/friend_media/'+id)
	},
	getMediaListByIds(params){
		return api.get('/friend_media/getMediaListByIds/',params)
	}
}