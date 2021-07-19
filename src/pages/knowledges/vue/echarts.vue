<template>
	<section id="echarts">
		<div ref='echarts01'></div>
	</section>
</template>

<script>
	// npm install echarts --save
	// import echarts from 'echarts';
	export default{
		mounted:function(){//实例挂在，用于操作dom
			// this.echartEx();
		},
		methods: {
			echartEx(){
						echarts.dispose(this.$refs.echarts01);//先销毁dom节点
						var mychart01=echarts.init(this.$refs.echarts01);//echarts.init 初始化一个表格 2.表格的配置项
						mychart01.setOption({
						tooltip : {
							formatter: "{a} <br/>{b} : {c}%"
						},
						toolbox: {
							feature: {
								restore: {},
								saveAsImage: {}
							}
						},
						series: [
							{
								name: '颜值',
								type: 'gauge',
								detail: {formatter:'{value}%'},
								data: [{value: 50, name: '完成率'}]
							}
						]
						})
			},
		}
	
	
	}
</script>

<style lang="less" scoped>
#echarts{
	width: 100%;
	height: 100%;
	div{
		width: 600px;
		height: 500px;
		background-color:white;
		margin: 0 auto;
	}
}
</style>
