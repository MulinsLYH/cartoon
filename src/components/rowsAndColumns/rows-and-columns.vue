<template>
  <div id="mulRowsAndCol">
        <div class="mulrowWrap">
            <div class="picContentor">
                <!--  .list要加个固定高度，否则有换一换时有一部分超出来；若不是两行，那么需要父组件传个参数进来，再改高度-->
                <transition-group name = "list" tag = "div" class="list"  ref = "list">
                    <div :class="rows == 2?'contnent2Rows':'contnent3Rows'" v-for = "(item,index) in dataList" :key = index++ @click = "go(item.id)">
                        <img class="img" :src = "item.imgsrc"/>
                        <p class= "title">{{item.title}}</p>
                        <p class="des single-line">{{item.des}}</p>
                    </div>
                </transition-group>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'mulRowsAndCol',
  props:{
      
        dataList: {
            type:Array,
            default:  null
        },
        //一行展示的列数 2或3
        rows:{
            type:Number,
            default:2
        },
        isAutoHeight:{
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
      if(!this.isAutoHeight){
        this.setHeight()
      }
  },
  methods:{ 
        setHeight(){
            this.$nextTick(() => {
                if(this.$refs.list){
                    let mulrow = this.$refs.list;
                    // 注意这里的mulrow并不是div.list,是个组件
                    // console.log(mulrow)
                    //若改.img的高度，303也要改(若3行的高度需改，就改.img的高度)
                    mulrow.$el.style.height = 300 +'px'; 
                }
             
            });
        },
        go(id){
            this.$emit('go',id)
        }
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">

#mulRowsAndCol{
    width:100%;
    height:auto;
    box-sizing: border-box;
    background: rgb(244,244,244);
    overflow:hidden;
    .mulrowWrap{
        width:95%;
        margin:0 auto;
        overflow:hidden;
        
        .picContentor{
            width: 100%;
            height: 100%;

            .list-enter-active, .list-leave-active {
                transition: all .3s;
            }
            .list-enter, .list-leave-to
            /* .list-leave-active for below version 2.1.8 */ {
                opacity: 0.5;
            }
            div.list{
                width:100%;
                height:auto;
                overflow:hidden; 
                .contnent2Rows{
                    width:50%;
                    height:auto;
                    padding:0 10px 10px 0;
                    float:left;
                    overflow:hidden;
                    &:nth-of-type(2n){
                        padding-right:0;
                    }
                    .title{

                        padding:3px 0 7px 10px;
                        font-size:12px;
                        font-weight:bold;
                        color:#100404;
                        text-align:left;
                    }
                    .des{
                        padding:0 0 0 10px;
                        font-size:12px;
                        font-weight:normal;
                        color:#999;
                        text-align:left;
                    }
                    .img{
                        width:100%;
                        height:100px;
                    }
                }
                   .contnent3Rows{
                        width:33.33%;
                        /* 此处为auto */
                        height:auto;
                        padding:0 10px 10px 0;
                        float:left;
                        overflow:hidden;
                        &:nth-of-type(3n){
                            padding-right:0;
                        }
                        .title{
                            padding:3px 0 7px 10px;
                            font-size:12px;
                            font-weight:bold;
                            color:#100404;
                            text-align:left;
                        }
                        .des{
                            padding:0 0 0 10px;
                            font-size:12px;
                            font-weight:normal;
                            color:#999;
                            text-align:left;
                        }
                        .img{
                            width:100%;
                            height:100px;
                        }
                        
                    }
            }
         

        }
    }

}
</style>
