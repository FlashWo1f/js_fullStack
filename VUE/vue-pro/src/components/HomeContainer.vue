<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in lunboList" :key="i">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="funcs">
      <div class="func a">
        <router-link to="/home/newslist">
        
        <img src="../assets/menu1.png" alt="">
        <div>新闻资讯</div>
        </router-link>
      </div>
      <div class="func a">
        <img src="../assets/menu2.png" alt="">
        <div>图片分享</div>
      </div>
      <div class="func a">
        <img src="../assets/menu3.png" alt="">
        <div>商品购买</div>
      </div>
      <div class="func a">
        <img src="../assets/menu4.png" alt="">
        <div>留言反馈</div>
      </div>
      <div class="func a">
        <img src="../assets/menu5.png" alt="">
        <div>联系我们</div>
      </div>
      <div class="func a">
        <img src="../assets/menu6.png" alt="">
        <div>评论</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunboList: []
    }
  },
  created() {
    this.getLunbotu()
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据
      this.$http.get("https://www.easy-mock.com/mock/5d14de696a75841938f3e1b1/Vue-pro/vue-pro-demo").then(result => {
        // console.log(result.body)
        this.lunboList = result.body.data.lunboData
      })
    }
  },
}
</script>

<style scoped>
.mint-swipe{
  height: 200px;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
.funcs{
  display: flex;
  flex-wrap: wrap;
}
.func{
  padding: 15px 30px;
}
.func img{
  width: 60px;
  height: 60px;
}
</style>
