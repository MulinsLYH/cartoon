<template>
	<div id="parent">
		<div class="rainbow">
			引入子组件，以及数据的双向流动
		</div>
		<div class="rainbow">
			{{design}}
		</div>
		<!-- v-bind:缩写为:  其中article和purple为子过来的绑定值-->
		<nice :article='design' @purple='get' ref="rainbow"></nice>
	</div>
</template>

<script>
	import nice from './quote/children';
	export default{
		components:{nice},
		data(){
			return{
				design:'父组件数据',
			}
		},
		mounted(){
			this.$refs.rainbow.praise('参数');//调用子组件方法
		},
		methods:{
			get(message){
				// message是子传的参数
				this.design=message;
			},
			initial(value){
				console.log('调用子组件方法---',value);
			}
		},
		
	}
</script>

<style lang="less" scoped>
#parent{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
