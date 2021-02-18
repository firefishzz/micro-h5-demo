<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="test_text">3333</div>
    <van-button type="default" @click="toAbout">{{ $t('GENERAL.TEST') }}</van-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toAbout() {
      console.log('toAbout')
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.test_text {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  color: #fff;
  text-align: center;
  line-height: 100px;
}
</style>
