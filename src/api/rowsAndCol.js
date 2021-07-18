
// 栗子

import api from '@/config/axios'

export default {
    queryList() {
		return api.get('/multiplerows_and_columns')
	},




}