<template>
<section id="children">
	<button @click='secret()'>child:{{article}}</button>
</section>
</template>

<script>
	export default{
		// props:['article'],//父传子
		props: {
			article: {
				type: String, // 类型：Array，Object
				default: function () { // 没有值，默认为空字符串
					return ''
				}
			}
		},
		data(){
			return{
				son:'$emit子组件数据'
			}
		},
		mounted(){
			this.$parent.initial('参数');
		},
		methods:{
			secret(){
				//子传父
				this.$emit('purple',this.son);
				console.log('secret_9939',this.son);
			},
			praise(value){
				console.log('调用父组件方法---',value);
			}
		}
	}
</script>

<style lang="less" scoped>
#children{
	
}
</style>
