<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航：
      <router-link to="/">首页</router-link>  |
      <router-link to="/Look">罗汉</router-link>  |
      <router-link to="/Look/look-one">罗汉1</router-link>  |
      <!-- <span class="test" @click="go">look1</span> -->
      <!-- <router-link to="/Look/look-two">罗汉2</router-link>   -->
      <router-link :to="{name: 'LookTwo', params: {userId: 2}}">罗汉2</router-link>
      <router-link to="/detail">重定向</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go () {
      this.$router.push({name: 'LookOne', params: {name: 'old king'}})  // 编程式路由跳转
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
