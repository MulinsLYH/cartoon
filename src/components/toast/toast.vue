<template>
  <transition name="mint-toast-pop">
    <!-- <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
        <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
        <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div> -->

   <div v-show="visible">
    	<div id = "globalNotice" class = "bombfade-in">
	 				<div  class="noticeBox"><p>{{message}}</p></div>
				</div>
    </div> 
  </transition>
</template>

<style scoped>
.mint-toast{
   position: fixed;
  max-width: 80%;
  border-radius: .05rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  transition: opacity .3s linear;
}
.mint-toast-icon{
    display: block;
    text-align: center;
    font-size: .56rem;
}
.mint-toast-text{
  font-size: .14rem;
  display: block;
  text-align: center;
}
.is-placetop{
  top: .50rem;
  left: 50%;
  transform: translate(-50%, 0);
}
.is-placemiddle{
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.is-placebottom{
  bottom: .50rem;
  left: 50%;
  transform: translate(-50%, 0);
}
.mint-toast-pop-enter, .mint-toast-pop-leave-active {
  opacity: 0;
}
#globalNotice{width:100%;height:100%;position:fixed;left:0;top:0;z-index:999;background:rgba(0,0,0,0);text-align:center;}
#globalNotice:after{content:"";display:inline-block;height:100%;width:0;vertical-align: middle;}
#globalNotice .noticeBox{display:inline-block;width:auto;min-width:176px;max-width:70%;height:auto;min-height:50px;max-height:640px;border-radius:10px;background:rgba(0,0,0,0.7);vertical-align: middle;line-height:50px;color: #fff;text-align: center;overflow:hidden;}
#globalNotice .noticeBox p{max-height:580px;margin:20px 30px;font-size:15px;overflow: hidden;}

</style>

<script type="text/babel">
	import router from '@/router'
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      },
      callBack:{
      	type : Function,
      	default: function(){}
      }
    },
    data() {
      return {
        visible: false
      };
    },
    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);
        return classes.join(' ');
      }
    }
  };
</script>
