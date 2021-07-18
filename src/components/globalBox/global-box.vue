<template>
    <transition name="fade">
        <!--确定取消-->
        <div class="globalBox" v-show = "isGlobalBox">
                <div id="ComfirmTipBox">
                    <p class="comfirmMes">{{msg}}</p>
                    <div class="operaBtn">
                        <a id="askComfirmTipbtn0" href="javascript:;;" @click = "cancel">取消</a>
                        <a id="askComfirmTipbtn1" class="ComfirmTipBox_ok" href="javascript:;" @click = "sure">确定</a>
                    </div>
                </div>
            <div id="globalgrayBox"></div>
        </div>
    </transition>
</template>

<script>
	export default {
		name: 'globalBox',
		props:['isGlobalBox','msg'],
		data() {
			return {}
		},
		methods:{
			cancel(){
				this.$emit('cancel')
			},
			sure(){
				this.$emit('sure')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 公用弹窗 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#ComfirmTipBox{position: fixed;top:50%;left: 50%;z-index: 999;width: 260px;background: #fff;border-radius:11px;
	-webkit-transform: translateX(-50%) translateY(-50%);
	   -moz-transform: translateX(-50%) translateY(-50%);
	    -ms-transform: translateX(-50%) translateY(-50%);
	        transform: translateX(-50%) translateY(-50%);}
#ComfirmTipBox .comfirmMes{max-height:384px;padding:0 30px;margin:30px 0;font-size:20px;color: #333;text-align: center;line-height:48px;overflow: hidden;
	display:-webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-justify-content:center;
			justify-content:center;
	-webkit--moz-box-pack:center;
			-moz-box-pack:center;
				 box-pack:center;
	-webkit-align-items:center;
	        align-items:center;
	-webkit-box-align:center;
	   -moz-box-align:center;
	        box-align:center;}
#ComfirmTipBox .operaBtn{width:100%;height:40px;border-top:1px solid #e6e6e6;font-size:0;text-align:center;}
#ComfirmTipBox .operaBtn a{display:inline-block;width:50%;height:100%;font-size:16px;line-height: 40px;color: #333;}
#ComfirmTipBox .operaBtn a.ComfirmTipBox_ok{border-left:1px solid #e6e6e6;color:#ff3f3f;}
#ComfirmTipBox .operaBtn a.ComfirmTipBox_ok2{width:100%;}
#globalgrayBox{position: fixed;top:0;left: 0;width: 100%;height: 100%;z-index: 998;background: #000;opacity:.5;}
@-webkit-keyframes bombfade-in{
	0%{opacity:0;transform:scale(0.7);}
	100%{opacity:1;transform:scale(1);}
}
@keyframes bombfade-in{
	0%{opacity:0;transform:scale(0.7);}
	100%{opacity:1;transform:scale(1);}
}
.bombfade-in {
	-webkit-animation-name: bombfade-in;
	animation-name: bombfade-in;
	-webkit-animation-duration: 0.3s;
	animation-duration: 0.3s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}
@-webkit-keyframes bombfade-out{
	0%{opacity:1;transform:scale(1);}
	100%{opacity:0;transform:scale(0.7);}
}
@keyframes bombfade-out{
	0%{opacity:1;transform:scale(1);}
	100%{opacity:0;transform:scale(0.7);}
}
.bombfade-out{
	-webkit-animation-name:bombfade-out;
	animation-name:bombfade-out;
	-webkit-animation-duration:0.3s;
	animation-duration:0.3s;
	-webkit-animation-fill-mode:both;
	animation-fill-mode:both;
}
</style>