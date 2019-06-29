<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="旅梦开发团-Vue项目">
      
    </mt-header>
    <div class="back" @click="this.backToCur">
      <img src="./assets/back.png" alt="">
      <div class="backctx">
        &nbsp;返回
      </div>
    </div>
    <!-- 中间路由router-view -->
    <transition>
    
      <router-view></router-view>
    </transition>
    <!-- 底部tabbar -->
    <div class="tabbar">
      <div class="tabbar-item">
        <router-link to="/home">
          <img src="./assets/mine.png" alt>
          <div>首页</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/member">
          <img src="./assets/mine.png" alt>
          <div>会员</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/shopcar">
          <img src="./assets/mine.png" alt>
          <div>购物车</div>
        </router-link>
      </div>
      <div class="tabbar-item">
        <router-link to="/search">
          <img src="./assets/mine.png" alt>
          <div>搜索</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    backToCur(){
      this.$router.go(-1)
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 40px;
  padding-bottom: 45px;
  overflow-x: hidden;
}
html, body{
  padding: 0;
  margin: 0;
}
.back{
  display: flex;
  position: fixed;
  left: 0px;
  top: 8px;
  z-index: 1000;
}
.back img{
  width: 20px;
  height: 20px;
}
.backctx{
  line-height: 20px;
  color: #ffffff;
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
}
.tabbar-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
}
.tabbar-item img {
  width: 20px;
  height: 20px;
}
.tabbar-item a{
  text-decoration: none;
  color: #aaaaaa;
}
.router-link-active{
  color: #2525dd !important;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active, .v-leave-active{
  transition: all .5s ease;
}
</style>