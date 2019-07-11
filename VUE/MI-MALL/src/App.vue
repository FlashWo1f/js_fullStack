<template>
  <div id="app">
    <!-- 匹配路由 -->
    <router-view />
    <!-- 底部tabbar -->
    <!-- v-if="this.$router.history.current.name !== 'Detail'" -->
    <van-tabbar 
    v-model="active" 
    v-if="this.$router.history.current.name !== 'Detail'"
    active-color="#f66700">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="description" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  active: 0
}
</script>

<style lang="stylus">
body,html
  padding 0
  margin 0
#app
  width 100%
  height 100%
  .tabbar
    display flex
    width 100%
    justify-content space-between
    position fixed
    bottom 0
    left 0
    font-size 13px
    color #757575
    background-color #fff
    .tabbar-item
      width 25%
      text-align center
      padding 10px
      img
        width 22px
        height 22px
</style>
