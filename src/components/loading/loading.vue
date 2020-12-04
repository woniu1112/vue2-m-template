<template>
  <div class="my-loading">
    <div class="loading-container" v-show="showClose">
      <div class="loading-box">
        <img :src="loadingImg" alt="" />
        <div class="message">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingImg from '@/assets/img/loading.png'
export default {
  name: 'myLoading',
  data () {
    return {
      loadingImg,
      message: '加载中',
      showClose: false
    }
  },
  methods: {
    close () {
      this.showClose = false
    },
    show () {
      this.showClose = true
    }
  }
}
</script>

<style scoped lang="scss">
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0, .5);
  z-index: 10000;
}
.loading-box {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 120px;
  width: 120px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    -webkit-animation: myRotating 2s linear infinite;
    -o-animation: myRotating 2s linear infinite;
    animation: myRotating 2s linear infinite;
  }
}
  @keyframes myRotating {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(1turn);
      -moz-transform: rotate(1turn);
      -ms-transform: rotate(1turn);
      -o-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
</style>
