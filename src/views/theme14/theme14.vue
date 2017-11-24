<template>
  <div class="theme14">
      <div class="form">
        <div class="box">

          <div class="phone-box">
             <img src="../../images/person_icon.png" class="person-icon">
             <input type="tel" placeholder="请输入您的手机号" maxlength="11" v-model="phone">
           </div>

          <div class="verifycode-box clearfix">
             <img src="../../images/phone_icon.png" class="phone-icon">
             <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="code">
             <button type="button" @click="getPhone" :disabled="start && time > 0">{{text}}</button>
             <!-- <countDownBtn v-on:send="getPhone" ref="countDownBtn"></countDownBtn> -->
          </div>

           <div class="password-box">
             <img src="../../images/lock_icon.png" class="lock-icon">
             <input type="text" placeholder="请设置6~12位登录密码" maxlength="12" v-model="password">
           </div>

        </div>

        <div class="opt">
           <!-- 急速借款 -->
           <button type="button" class="sure-btn" @click="submitForm">急速借款</button>
           <!-- 使用协议 -->
           <div class="agreement">
             <i></i>
             <span>注册即代表同意 <span style="color:#fdff3a" @click="gotoAgreement">《信用白条用户使用协议》</span></span>
           </div>

        </div>

      </div>

      <tipModal :showTip.sync="showTip" :message="message"></tipModal>
      <succModal :showSuccTip="showSuccTip" :hasRegister='hasRegister'></succModal>
      <qrcodeModal :showQrcode="showQrcode"></qrcodeModal>
  </div>
</template>

<script type="text/ecmascript-6">
import tipModal from "@/components/tipModal";
import succModal from "./succModal";
import api from "../../api/api";
import qrcodeModal from "./qrcodeModal";

export default {
  data() {
    return {
      time: 0,
      start: false,
      phone: "",
      code: "",
      password: "",
      showTip: false,
      hasRegister: false,
      showSuccTip: false,
      message: "",
      showQrcode: false
    };
  },
  created() {
    console.log("进入首页!");
  },
  methods: {
    getPhone() {
      // this.start = true;
      // this.send();
      let flag = this._verifyPhone();
      if (flag) {
        //手机号通过之后,请求后端判断是否注册过
        this._isRegistered();
      }
    },
    _verifyPhone() {
      let phone = this.phone;
      let flag = true;
      if (phone) {
        if (!/^1\d{10}$/gi.test(phone)) {
          this.message = "手机号不合法";
          this.showTip = true;
          flag = false;
        }
      } else {
        this.message = "请输入手机号";
        this.showTip = true;
        flag = false;
      }
      return flag;
    },
    _sendMessage() {
      console.log("send message!");
    },
    submitForm() {
      let flag = this._verifyPhone();
      if (!flag) {
        return;
      }
      if (!this.code) {
        this.message = "请输入验证码";
        this.showTip = true;
        return;
      }

      //登录密码
      if (!this.password) {
        this.message = "请输入登录密码";
        this.showTip = true;
        return;
      }

      if (this.password.length < 6 || this.password.length > 12) {
        this.message = "登录密码长度为6~12位";
        this.showTip = true;
        return;
      }

      //提交给后台
      this._commit();
    },
    _commit() {
      console.log("submit!");
      //发送请求
      let submitObj = {
        phone: this.phone,
        code: this.code,
        source_id: localStorage.source_id,
        source_tag: localStorage.source_tag,
        password: this.password
      };
      api.commitForm(submitObj).then(response => {
        //验证码错误或失效
        if (response.code == -1) {
          this.message = response.message;
          this.showTip = true;
        }

        //注册成功
        if (response.code == 0) {
          if (localStorage.isfromweichat == 1) {
            if (localStorage.source_app == "xybt_xjbtfuli") {
              this.showQrcode = true;
            } else {
              this.succModal = true;
            }
          } else {
            this.succModal = true;
          }
        }
      });
    },
    gotoAgreement() {
      this.$router.push({ name: "agreement" });
    },
    _isRegistered() {
      this.paramObj = {
        phone: this.phone,
        source_id: localStorage.source_id,
        source_tag: localStorage.source_tag,
        key: localStorage.reg_sms_key
      };

      api.isRegistered(this.paramObj).then(response => {
        console.log(response.code + ":" + response.message);
        if (response.code == 0) {
          console.log("页面开始倒计时");
          this.start = true;
          this.send();
        }

        //手机号已注册,弹出提示框
        if (response.code == 1000) {
          this.hasRegister = true;
          this.showSuccTip = true;
        }

        //页面已经过期
        if (response.code == -1) {
          this.message = "页面已过期,请刷新重试";
          this.showTip = true;
        }
      });
    },
    send() {
      if (this.start) {
        this.time = 60;
        this.timer();
      }
    },
    timer() {
      if (this.time > 0) {
        this.time = this.time - 1;
        setTimeout(this.timer, 1000);
      }
    }
  },
  computed: {
    text() {
      if (this.start && this.time > 0) {
        return "倒计时" + this.time + "秒";
      } else {
        this.start = false;
        return "获取验证码";
      }
    }
  },
  components: {
    tipModal,
    succModal,
    qrcodeModal
  }
};
</script>

<style lang="less">
@import "./theme14.less";
</style>
