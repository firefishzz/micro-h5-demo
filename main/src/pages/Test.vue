<template>
  <div class="container">
    <div class="ecomm_btn" @click="toRouter('/ecomm-app')">ecomm_btn</div>
    <div class="reward_btn" @click="toRouter('/reward-app')">reward_btn</div>
  </div>
</template>
<script>
export default {
  methods: {},
  mounted() {
    this.$loading()
    setTimeout(() => {
      this.$loading().clear()
    }, 3000)
  },
  methods: {
    toRouter(type) {
      this.$router.push({
        path: type
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
}
</style>