<template>
<section id="filters">
	<div class="rainbow">{{honey|add}}</div>
	<hr />
	<div class="rainbow" v-for="item in message">{{item|pain}}</div>
	<hr />
	<button type="warning" @click="deleteFilters">删除与过滤</button>
</section>
</template>

<script>
	export default{
		data(){
			return{
				message:[{id: 1,value: '棒棒糖'},{id: 2,value: '棉花糖'}],
				honey: 12
			}
		},
		filters:{
			pain:function(val){
				return val.id!=2
			},
			add:function(res){
				return res>8;
			}
		},
		methods: {
			deleteFilters(){
				let arr = [];
				arr = this.message.filter(function(res,index){
					return res.id != 2;
				})
				console.log('filter数组',arr);
			}
		}

	}
</script>

<style lang="less" scoped>
#filters{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
