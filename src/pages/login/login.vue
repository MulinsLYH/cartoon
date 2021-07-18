<template>
  <section id="login">
    <i class="bg"></i>
    <div class="loginMain">
      <ul class="listInput">
        <li class="writeUserName">
          <input
            class="loginPhone"
            v-model.trim="userName"
            type="text"
            placeholder="请输入用户名"
            @focus="clear_1 = true"
            @keyup.enter="loginSubmit"
            ref="userName"
          />
          <!-- <span class="input-clear member-icon" v-show="clear_1" @click="clear_name"></span> -->
        </li>
        <li class="writeUserName">
          <input
            class="loginPassword"
            type="password"
            v-model.trim="userPassword"
            @focus="clear_2 = true"
            placeholder="请输入密码"
            @keyup.enter="loginSubmit"
            ref="userPassword"
          />
          <!-- <span class="input-clear member-icon" v-show="clear_2" @click="clear_pwd"></span>  -->
        </li>
      </ul>
      <input type="submit" class="btn" value="登录" @click="loginSubmit" />
    </div>
    <ul class="list-links">
      <li><a href="javascript:void(0);" class="go-register">新用户注册</a></li>
      <li>
        <a href="javascript:void(0);" class="go-get-password">忘记密码</a>
      </li>
    </ul>
        
        <!-- <div :style="styleObject">行内移动端px转化rem</div> -->
      
  </section>
</template>
<script>
import api from "@/api/user";
	import {mapMutations,mapGetters,mapActions} from 'vuex'

export default {
  name: "login",
  data() {
    return {
        userName: "",
        userPassword: "",
        clear_1: false,
        clear_2: false,
        // styleObject:{
        //     color: 'white',
        //     width:this.$comMethods.pxToRem(170)+'rem',
        //     height: this.$comMethods.pxToRem(70)+'rem',
        //     lineHeight : this.$comMethods.pxToRem(70)+'rem',
        //     margin:'0 auto',
        //     // verticalAlign: 'middle',
        //     backgroundColor:'blue'
        // },
    };
  },
  created() {},
  computed: {},
  watch: {
    userPassword(cur, old) {
      if (/[^A-z0-9]/.test(cur)) {
        this.$toast({
          message: "不能输入特殊字符！",
          position: "center",
          duration: 2000,
          callBack: function () {},
        });
        this.userPassword = cur.replace(/[^A-z0-9]/, "");
      }
    },
  },
  methods: {
    ...mapMutations(['login']),
    clear_name() {
      this.userName = "";
      this.$refs.userName.focus();
    },
    clear_pwd() {
      this.userPassword = "";
      this.$refs.userPassword.focus();
    },
    loginSubmit() {
        let that = this;
        if (that.userName == "" && that.userPassword == "") {
          that.$toast({
            message: "请输入账号和密码!",
            duration: 2000,
            callBack: function () {},
          });
          return;
        } else if (that.userName == "") {
          that.$toast({
            message: "请输入账号!",
            duration: 2000,
            callBack: function () {},
          });
          return;
        } else if (that.userPassword == "") {
          that.$toast({
            message: "请输入密码!",
            duration: 2000,
            callBack: function () {},
          });
          return;
        }

      
       
        //    let param = {
        //       username: this.userName,
        //       password: this.userPassword,
        //     }
    //          that.$axios({
    //             url:'/auth/login',
    //             method:'post',
    //             data:param
    //         })
        api.login({
            username: this.userName,
            password: this.userPassword,
        })
        .then((res) => {
          //plus.nativeUI.closeWaiting();
          if (res.code == 200) {
            // let info = Object.assign({},res.data.user,res.data.com)
              this.login(res.user_info)
              this.$toast({
                message: res.message,
                callBack: function () {
                  // if(res.data.user.yuanqu_url){
                  //     location.href = res.data.user.yuanqu_url;
                  // }else{
                  //     that.$router.push('/memberIndex')
                  // }
                    that.$router.push('/index');
                },
              });
          } else {

                this.$toast({
                  message: res.data.message,
                  callBack: function () {},
                });
          }
        }).catch((err) => {
          //plus.nativeUI.closeToast();
          // console.log(err,'err');
        });
        
    },
  },
};
</script>
<style  scoped lang ="less">
#login {
  width: 100%;
  height: 100%;
/* 
vertical-align: middle;例子
https://www.runoob.com/try/try.php?filename=trycss_vertical-align
*/
  .bg {
    display: block;
    width: 100%;
    height: 250px;
    .mixin_image(url("/static/images/bg.jpg"));
  }

  .loginMain {
    display: block;
    width: 160px;
    margin: 0 auto;

    .listInput {
      width: 100%;
      border: 1px solid #c2c2c2;
      padding: 0 5px;
      border-radius: 4px;
      margin-bottom: 12px;

      li {
        position: relative;
        padding: 8px 0;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border-bottom: none;
        }
       

        input {
          .mixin_input(120px,15px);
          display: block;
          margin-left: 30px;
          font-size: 15px;

        }
      .input-clear {
          display: inline-block;
          width: 37px;
          height: 37px;
          position: absolute;
          top: 0;
          right: -6%;
          margin-top: -2px;
          cursor: pointer;
        }
        .member-icon:after {
          content: "";
          display: inline-block;
          background: url("/static/images/member-icon.png") no-repeat;
          background-size: 227px 221px;
          position: absolute;
        }

        .input-clear.member-icon:after {
          width: 37px;
          height: 37px;
          background-position: -182px -60px;
          top: 10px;
          left: 0;
          margin-top: -11px;
        }
      }
    }


    .btn {
      .mixin_button(100%,100%,@color_white2,@color_white);
      display: inline-block;
      border-radius: 4px;
      padding: 7px 12px;
      box-sizing: border-box;
    }
  }

  .list-links {
    margin: 24px 0;
    a {
      display: block;
      box-sizing: border-box;
      font-size: 12px;
      width: 125px;
      margin: 0 auto;
      padding: 6px 5px;
      text-align: center;
    }
  }
}
</style>