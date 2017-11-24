<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import api from "./api/api";
export default {
  name: "app",
  created() {
    //从后台获取所有需要接受的参数
    this._getAllParams();
  },
  methods: {
    _getAllParams() {
      api.getAllParams().then(response => {
        let source = response.source;
        console.log(response.isfromweichat);
        console.log(source);
        console.log(response.reg_sms_key);
        console.log(response.themes);

        localStorage.isfromweichat = response.isfromweichat;
        localStorage.source_id = source.source_id;
        localStorage.source_tag = source.source_tag;
        localStorage.source_app = source.source_app;
        localStorage.reg_sms_key = response.reg_sms_key;

        // if (response.themes == "stream14") {
        if (response.themes.includes("stream14")) {
          this.$router.push({ name: "theme14" });
        }

        //13,12,11...
      });
    }
  }
};
</script>

<style lang="less">
@import "common/css/common";
@import "common/css/rest";
@import "common/css/app";
</style>
