<template>
  <div id="headTitle" v-show="isShow">
      <div class="contrain">
          <i @click="$router.go(-1);" v-show="isGoBack"><</i>
          <p>{{headTitle}}</p>
          <span></span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'headTitle',
  props:{
        isShow:{
            type:Boolean,
            default:false
        },
        headTitle: {
            type:String,
            default:''
        },
        icon:{
            type:String,
            default:''

        },
        search:{
            type:String,
            default:''
        },
        isGoBack:{
             type:Boolean,
            default:false
        }

     
  },
  data () {
    return {
    }                                                                                                   
  },
  created() {
    
  },
  mounted(){
      
  },
  methods:{ 
    
      
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">

#headTitle{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height:auto;
    background: #fff;
    z-index: 999;
    .contrain{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgb(204, 201, 201);
        text-align:left;
        i{  
            display: inline-block;
            padding:0 12px;
        }
        p{   position: absolute;
            top: 0;
            right: 0;
            display: inline-block;
            width: 100%;
            font-size:16px;
            color:#100404;
            text-align:center;
        }
        span{
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 60px;
            height: 100%;
            padding: 0 12px;
            font-size:16px;
            color:#100404;
        }
    }
  

}
</style>
