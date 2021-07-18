

import api from '@/config/axios'

export default {
	querySearchList(param) {
		return api.post('/search_list',param)
	},
	queryClassificationList(param) {
		return api.post('/classification_list',param)
	},
	
}