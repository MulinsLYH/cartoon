<template>
	<div id="computed">
		<div class="rainbow">getter函数：{{getter1}}</div>
		<input type="text" v-model.number='updateJson'/>
		<Button @click="jsonChange(1)">改变count数据</Button>
		<Button @click="jsonChange(2)">改变updateJson数据</Button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				flame: 'fancy',
				count: 600
			}
		},
		//1.有缓存作用，数据改变而触发 2.不支持异步  
		//注意:创建在data数据里,不是方法调用
		//用法: 1.改写某个数据   2.输入框数据缓存vuex里
		computed:{
			getter1:function(){//getter函数: count改变才触发
				console.log('getter简写',this.count);
				return this.count+'人民币';
			},
			//getter1相当于getter2
			getter2:{
				get:function(){//getter函数: count改变才触发
					console.log('getter原写',this.count);
					return this.count*100;
				}
			},
			//推荐这个写法
			updateJson:{
				get:function(){//getter函数: count改变才触发
					console.log('getter:',this.count);
					return this.count;
				},
				set:function(val){//setter函数: updateJson数据改变才触发
					console.log('setter:',val);
					this.count=val;
					//可以用vuex里的commit缓存输入框数据
				},
			}
		},
		methods: {
			jsonChange(index){

				if(index==1){
					this.count = 300;
				}else if(index==2){
					this.updateJson = 800;
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
#computed{
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>
