<template>
  <div>
    <div>
      <div class="search-tab" v-if="ifsearch">
        <div class="search-input">
          <input
            placeholder="请输入搜索关键词"
            v-model.trim="searchInput"
            @keyup.enter="search"
          />
        </div>
        <span @click="$router.go(-1)">取消</span>
      </div>
      <div ref="wrapper" :class="classNameA">
        <div class="list-scroll">
          <slot></slot>
          <div class="loading" v-if="loading" ref="loading">
            {{ loadingText
            }}<img src="static/images/loading1.gif" v-if="loadingGif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    params: {
      type: Object,
      default: null,
    },
    searchvalue: {
      default: false,
    },
    classNameA:{
      type: String,
      default: 'wrapper',
    }
  },
  data() {
    return {
      data: [],
      searchInput: this.searchvalue,
      ifsearch: false,
      url: "",
      loading: true,
      loadingText: "",
      loadingGif: true,
      searchForm:{cartoon:'CURRENT_CARTOON_ID',current_page:1,page_size:10,keyword:this.searchvalue},
      pulldown: false,
    };
  },
  created() {
    if (this.searchvalue != false) {
      this.ifsearch = true;
    }
    this.searchForm = this.params.params;
    this.loadData();
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        refreshDelay: 1,
        pullDownRefresh: { threshold: 50, stop: 0 },
        pullUpLoad: true,
      });
      // 是否派发滚动到底部事件，用于上拉加载
      this.scroll.on("scrollEnd", () => {
        // 滚动到底部
        // console.log('下拉');
        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          if (!this.pulldown) {
            // console.log(this.searchForm.page);
            this.searchForm.current_page++;
            // console.log(this.searchForm.page);
            this.loadData();
            // console.log(this.searchForm.page);
          }
        }
      });
      // 是否派发滚动到底部事件，用于下拉加载
      this.scroll.on("pullingDown", () => {
        // 滚动到底部
        // console.log('上拉');
        if (this.scroll.y >= this.scroll.manScrollY + 50) {
          if (!this.pulldown) {
            this.searchForm.current_page++;
            this.loadData();
          }
        }
      });
      // this.scroll.on('pullingUp', () => {
      //     // 滚动到底部
      //     console.log('下拉');
      //     // if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
      //         if(!this.pulldown){
      //             console.log(this.searchForm.page);
      //             this.searchForm.page ++;
      //             console.log(this.searchForm.page);
      //             this.loadData();
      //             console.log(this.searchForm.page);

      //         }
      //     // }
      // })
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },

    loadData() {
      //下拉刷新refresh
      this.loading = true;
      this.loadingGif = true;
      this.getData();
    },

    //请求数据
    getData() {

      let that = this;
      if (!that.$parent.getyList()) {
        return;
      }
      that.$parent
        .getyList()
        .then((res) => {

          if (res.code == 200) {
            if (res.list.length == 0) {
              this.pulldown = true;
              this.loading = true;
              this.loadingGif = false;
              if (this.searchForm.current_page == 1) {
                this.loadingText = "暂无数据";
                this.$emit("loaddata", res);
              } else {
                this.loadingText = "已加载全部数据";
              }
              return;
            }
            this.data = this.data.concat(res.list);
            this.$emit("loaddata", res);
            this.loading = false;
          }
          //this.scroll.finishPullUp();
        })
        .catch((err) => {
          this.$toast({
            message: "加载失败",
            position: "center",
            duration: 1000,
            callBack: function () {
              that.loading = false;
            },
          });
        });
    },

    //搜索
    search() {
      if (this.searchInput != "") {
        this.data = [];
        this.searchForm.keyword = this.searchInput;
        this.searchForm.current_page = 1;
        let clear = {  list: []  };
        this.$emit("loaddata", clear);
        this.loadingText = "";
        this.pulldown = false;
        this.loadData();
      } else {
        this.$toast({
          message: "请输入搜索内容",
          position: "center",
          duration: 1000,
          callBack: function () {},
        });
      }
    },
    refreshFn(params) {
      this.url = params.url;
      this.searchForm = params.params;
      this.data = [];
      this.searchForm.current_page = 1;
      let clear = {  list: []  };
      this.$emit("loaddata", clear);
      this.loadingText = "";
      this.pulldown = false;
      this.loadData();
    },
    wheelTo(index) {
      this.$emit("wheelTo", index);
      // console.log(index)
    },
  },

  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
//头部搜索

.search-tab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  display: -webkit-box;
  display: -ms-box;
  padding: 8px 0;
  background: #fff;
  .search-input {
    position: relative;
    z-index: 0;
    -webkit-box-flex: 1;
    -ms-box-flex: 1;
    box-sizing: margin-box;
    height: 30px;
    margin: 0;
    background: rgb(245, 245, 245);
    border-radius: 5px;
    input {
      width: 100%;
      padding: 0 2.4px 0 6.4px;
      box-sizing: margin-box;
      background: none;
      border: none;
      line-height: 30px;
      font-size: 12px;
      color: rgb(51, 51, 51);
    }
    // &:after{
    // position: absolute;
    // top:0px;
    // left:313px;
    // z-index: 1;
    // content: '';
    // width:30px;
    // height:30px;
    // background: url('/static/images/list-icon.png') no-repeat -108px -116px;
    // background-size: 226px 159px;
    // }
  }
  span {
    display: block;
    line-height: 30px;
    font-size: 14px;
    color: rgb(102, 102, 102);
    cursor: pointer;
  }
}
.wrapper {
  position: fixed;
  top: 40px;
  bottom: 56px;
  left: 0;
  width: 100%;
  background: rgb(244, 244, 244);
}
.wrapperBtw {
  position: fixed;
  top: 250px !important;
  bottom: 56px !important;
  left: 0;
  width: 100%;
  background: #f4f4f4;
}
.loading {
  img {
    width: 30px;
    padding-top: 5px;
  }
}
</style>
