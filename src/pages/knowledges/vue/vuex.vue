<template>
<div>
	<!--用了methods与computed-->
	<button type="info">mapGetters:{{money}}</button>
	<button type="success" @click="playerInfo({title: 'money',params: 9966666888})">...mapMutations</button>
	<button type="error" @click="submit_mutation">调用_mutation</button>
	<button type="warning" @click="getPlayerInfo(player_info)">...mapActions</button>
	<button type="error" @click="submit_action">调用_action</button>
</div>
</template>

<script>
	// import store from '@/vuex/vuex';//@代表'/src',看build/webpack.base.conf.js
	import {mapMutations,mapGetters,mapActions} from 'vuex'
	export default{
		data(){
			return{
			}
		},
		methods:{
			...mapMutations(['playerInfo']),//引入mutation方法
			...mapActions(['getPlayerInfo']),//引入actions方法
			submit_mutation(){
				this.$store.commit('playerInfo',{title: 'money',params: 9966999222});//调用mutation方法，并传递数据
			},
			submit_action(){
				this.$store.dispatch('getPlayerInfo',this.player_info);//调用action
			},
		},
		computed:{
			...mapGetters(['money','player_info'])
		}
	}
</script>

<style>
</style>