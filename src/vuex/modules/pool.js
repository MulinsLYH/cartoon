const b = {
    state: {
        youcanyouup:'你行你上'
    },
    mutations: {
        chiji(state,params){
            // alert('大吉大利，今晚吃鸡！！！')
            state.youcanyouup = params.title;

        },
        yayaMutation(state,params){
            state.youcanyouup = params;

        }


    },
   
    actions: {
        yaya({state,commit,dispatch},response){
            commit('yayaMutation',response)//建议不要在mutation函数外修改state的值，避免不必要的参数混乱。如state.youcanyouup = response;
        }
    },
    getters: {
        youcanyouup: state => state.youcanyouup,
        money(state){
            return 'huhu===='
        }

    },
}
export default b