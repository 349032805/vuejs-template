<template>
  <div class="succModal" v-show="showSuccTip">
    <div class="box">
      <div v-if="!hasRegister">
        <p>恭喜您,注册成功!</p>
        <p>快去下载APP借款吧!</p>
      </div>
      <div v-if="hasRegister">
        <p>注册成功,立即申请借款吧</p>
      </div>
      
      <button type="button" @click="download">下载APP</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getWxLink } from "@/utils/wxLink";
import { getSys } from "@/utils/system";
import { getiOSLink } from "@/utils/iosLink";
import { getAndroidLinkBox } from "@/utils/androidLink";
import api from "../../api/api";

export default {
  props: {
    showSuccTip: {
      type: Boolean,
      default: false
    },
    hasRegister: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    download() {
      console.log("download!");

      //如果是微信浏览器打开,去应用宝
      //否则为普通打开,判断安卓还是ios系统,ios去苹果商店,安卓下载apk文件
      //安卓先请求tag_apk,如果没有文件(返回错误),再请求dft_apk
      // if (navigator.userAgent.indexOf("micromessenger") > 0) {
      if (navigator.userAgent.match(/MicroMessenger/)) {
        window.location.href = getWxLink();
      } else {
        if (getSys() == "ios") {
          window.location.href = getiOSLink();
        } else {
          let box = getAndroidLinkBox();
          let dft_apk_url = box.dft_apk;
          let tag_apk_url = box.tag_apk;

          // axios不支持跨域访问资源的回调,所以引入CDN zepto ajax判断
          $.ajax({
            url: tag_apk_url,
            type: "HEAD",
            error: function() {
              window.location.href = dft_apk_url;
            },
            success: function() {
              window.location.href = tag_apk_url;
            }
          });
        }
      }
    }
  }
};
</script>

<style lang="less">
.succModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);

  .box {
    width: 80%;
    margin: 4rem auto 0;
    background: #fff;
    z-index: 300;
    font-size: 0.3rem;
    text-align: center;
    padding: 0.5rem 0 0.3rem;
    border-radius: 0.12rem;
    letter-spacing: 1px;

    p {
      line-height: 0.5rem;
    }
  }

  button {
    width: 85%;
    height: 0.8rem;
    display: block;
    background: #65a6f3;
    border-radius: 4px;
    border: none;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #fff;
    margin-top: 0.5rem;
  }
}
</style>
