<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="test_text">one</div>
    <van-button type="default" @click="toAbout">{{ $t('GENERAL.TEST') }}</van-button>
    <van-button type="default" @click="handleDialog">弹框</van-button>
    <div>全局字段 {{ testNum }} {{ JSON.stringify(user) }}</div>
    <div class="qr_code_2" ref="qrCodeUrl"></div>
    <div class="member-code"><svg ref="barcode"></svg></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Dialog } from 'vant'
import QRCode from 'qrcodejs2'
import JsBarcode from 'jsbarcode'
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
    },
    handleDialog() {
      Dialog.alert({
        message: '弹窗内容'
      }).then(() => {
        // on close
      })
    }
  },
  mounted() {
    const qrcode = new QRCode(this.$refs.qrCodeUrl, {
      text: '777777',
      width: 100,
      height: 100,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    })
    JsBarcode(this.$refs.barcode, '88888888', {
      format: 'CODE128',
      displayValue: false,
      textPosition: 'bottom',
      lineColor: '#000000',
      margin: 10,
      width: 1.8,
      height: 60
    })
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
