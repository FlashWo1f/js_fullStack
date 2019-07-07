<template>
  <div id="app">
    <!-- 匹配路由 -->
    <router-view />
    <!-- 底部tabbar -->
    <div class="tabbar">
      <div class="tabbar-item">
        <router-link to="/home" tag="div">
          <img src="./assets/shop-cart.png" alt="">
          <div class="item-title">首页</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/cartgory" tag="div">
          <img src="./assets/shop-cart.png" alt="">
          <div class="item-title">分类</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/shopcar" tag="div">
          <img src="./assets/shop-cart.png" alt="">
          <div class="item-title">购物车</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/mine" tag="div">
          <img src="./assets/shop-cart.png" alt="">
          <div class="item-title">我的</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
