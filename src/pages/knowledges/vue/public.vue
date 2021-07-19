<template>
	<section id="public">
		<button type="success" @click="browser">全局方法</button>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			browser(){
				let str = '';
				if(this.$means.isEmpty(str)){
					alert('该数据为空!');
				}
			}
		}
	}
</script>

<style lang="less" scoped>
#public{

}
</style>
