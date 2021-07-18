<template>
<section id="transition">
	<!--transition 的封装组件-->
	<!--https://cn.vuejs.org/v2/guide/transitions.html-->
	<div id="demo">
			<el-button v-on:click="show = !show">Toggle</el-button>
			<transition name="fade">
				<p v-if="show" class="rainbow">hello</p>
			</transition>
	</div>
</section>
</template>

<script>
	export default{
		data(){
			return{
				show: true,
			}
		},
		methods:{
			fileDownLoad(path) {
                        console.log('bingo+++66',axios);
                        // return;@click="fileDownLoad('../../../../static/manifest.json')"
                        let urls = path.split('/');
                        axios.create().get(path,{
                            responseType: 'blob'
                        }).then(res => {
                                let blob = new Blob([res.data],{type:'application/download'});
								let objectUrl = URL.createObjectURL(blob);
								console.log('url++++%%^^',res.data,objectUrl)
                                let a = document.createElement('a');
                                a.download = urls[urls.length-1];
                                a.href = objectUrl;
                                a.click();
                            }
                        ).catch(e => {
                            return e;
                        })
            }
		}
	}
</script>

<style lang="less" scoped>
#transition{
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
	.rainbow{
		.mixin_div(100%,50px,none,@color_blueviolet,center);
	}
}
</style>