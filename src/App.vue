<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');

* {
  font-size: 15px;
  font-family: 'Noto Sans TC', Helvetica, Arial, "文泉驛正黑", "WenQuanYi Zen Hei", "儷黑 Pro",
    "LiHei Pro", "黑體-繁", "Heiti TC", "微軟正黑體", "Microsoft JhengHei",
    sans-serif !important;
}
navber{
    display:fixed;
}
</style>
