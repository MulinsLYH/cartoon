import comMethods from '@/common/js/gobal'

const b = {
    state: {
        userInfo: {}||comMethods.getLocalStore('userInfo'),
    },
    mutations: {
        login(state,params){
            comMethods.setLocalStore('userInfo',params)
            state.userInfo = params;
        },


    },
   
    actions: {
       
    },
    getters: {
        userInfo: state => state.userInfo,
    },
}
export default b