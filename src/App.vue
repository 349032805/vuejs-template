<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import "common/css/common";
@import "common/css/rest";
@import "common/css/app";
</style>
