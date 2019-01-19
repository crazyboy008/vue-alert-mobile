<template>
  <transition name="popup">
    <div class="xzp-popup" v-show="value" @touchmove.prevent>
      <div class="xzp-popup-mask" @click="hide" v-show="mask"></div>
      <div class="xzp-popup-main">
        <div class="xzp-popup-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'popup',
    props: {
      value: Boolean,
      mask: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      hide () {
        this.$emit('on-hide', this.value)
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.$emit('on-show', val)
        } else {
          this.$emit('on-hide', val)
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .popup-enter-active {
    animation: popup-fadein .4s;
    .xzp-popup-content {
      animation: popup-zoom .4s;
    }
  }
  .popup-leave-active {
    animation: popup-leave-fadein .3s;
    .xzp-popup-content {
      animation: popup-leave-zoom .3s;
    }
  }
  @keyframes popup-fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes popup-leave-fadein {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes popup-zoom {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes popup-leave-zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  .xzp-popup {
    position: fixed;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 900;
    pointer-events: none;
    transition: all 0.3s;
    .xzp-popup-mask {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      tap-highlight-color: rgba(0, 0, 0, 0);
      transition: opacity 300ms;
      z-index: 1;
      pointer-events: auto;
      // fix some android webview opacity render bug
      &::before {
        content: ".";
        display: block;
        width: 1px;
        height: 1px;
        background-color: rgba(0, 0, 0, .1);
        margin-left: -10px;
      }
    }
    .xzp-popup-main {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 2;
      pointer-events: auto;
    }
  }
</style>
