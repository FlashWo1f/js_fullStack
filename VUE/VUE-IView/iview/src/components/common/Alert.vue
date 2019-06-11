<template>
  <div class="alert">
    {{msg}}
    <br/>
    <i-button type="success" @click="hidden">一键变帅</i-button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  // properties 小程序类似
  props: ['msg'],
  data() {
    return {

    }
  },
  methods: {
    hidden() {
      // 向外发送
      this.$emit('fromChild', false)
    }
  },
}
</script>

<style scoped>
  .alert{
    font-size: 30px;
    text-align: center;
    width: 300px;
    height: 200px;
    border: 1px solid #aaa;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: pink;
  }
</style>