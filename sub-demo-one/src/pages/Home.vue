<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="test_text">one</div>
    <van-button type="default" @click="toAbout">{{ $t('GENERAL.TEST') }}</van-button>
    <div>全局字段 {{ testNum }} {{ JSON.stringify(user) }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    // 通过global获取user的信息
    ...mapState('global', {
      user: (state) => state.user,
      testNum: (state) => state.testNum
    })
  },
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
