<template>
  <popup v-model="showValue">
    <div class="xzp-alert">
      <div class="xzp-alert-head">
        <strong>{{title}}</strong>
      </div>
      <div class="xzp-alert-content">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div :style="{color: buttonTextColor}" class="xzp-alert-button" @click="hide">{{buttonText}}</div>
    </div>
  </popup>
</template>

<script type="text/ecmascript-6">
  import Popup from './popup.vue'

  export default {
    name: 'alert',
    components: {
      Popup
    },
    data () {
      return {
        title: '提示',
        content: '',
        buttonText: '确定',
        buttonTextColor: '#f56a39',
        showValue: false
      }
    },
    methods: {
      hide() {
        this.showValue = false
        this.$emit('on-hide', this.showValue)
      }
    },
    watch: {
      showValue(val) {
        if (val) this.$emit('on-show', val)
        else this.$emit('on-hide', val)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .xzp-alert {
    width: 500px;
    background: #fff;
    text-align: center;
    border-radius: 30px;
    margin: 0 auto;
    .xzp-alert-head {
      font-size: 30px;
      color: #333;
      padding-top: 20px;
    }
    .xzp-alert-content {
      font-size: 28px;
      color: #666;
      padding: 20px 20px 0;
      line-height: 40px;
    }
    .xzp-alert-button {
      width: 100%;
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      border-radius: 0 0 30px 30px;
      border-top: 0.133vw solid #eee;
      margin-top: 20px;
      &:active {
        background: #eee;
      }
    }
  }
</style>
