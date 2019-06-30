<template>
  <div class="detail-box">
    <div class="img-box">
     <img :src="curInfo.img_url" alt="">
    </div>
    <div class="info-box">
      <h2 class="info-title">{{curInfo.title}}</h2>
      <h3 class="descption">{{curInfo.descption}}</h3>
      <div class="market-price">市场价: ￥<span class="market">{{curInfo.market_price}}</span></div>
      <div class="sell-price">销售价: <span class="sell">￥{{curInfo.sell_price}}</span></div>
    </div>
    <div class="goodsnum-box">
      <button @click="this.reduceGoodsNum">-</button>
      <span class="goodsnum">{{goodsnum}}</span>
      <button @click="this.addGoodsNum">+</button>
    </div>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    >
      <div class="ball" v-show="ballFlag"></div>
    </transition>
    <mt-button type="primary" size="large">立即购买</mt-button>
    <mt-button type="danger" size="large" @click="addToShopcar">添加购物车</mt-button>
  </div>
</template>

<script>
export default {
   data() {
    return {
      curInfo: {},
      goodsnum: 1,
      ballFlag: false
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList(){
      // 获取商品列表
      this.$http.get('https://www.easy-mock.com/mock/5d14de696a75841938f3e1b1/Vue-pro/vue-pro-demo')
      .then(res => {
        // console.log(res)
        if(res.body.errno === 0){
          this.curInfo = res.body.data.goodsData.find(item => this.$route.params.id == item.id)
        }
        console.log(this.curInfo)
      })
    },
    reduceGoodsNum() {
      if(this.goodsnum > 1) {
        this.goodsnum -= 1
      }
    },
    addGoodsNum(){
      this.goodsnum += 1
    },
    addToShopcar() {
      this.ballFlag = !this.ballFlag
      // console.log(this.ballFlag)
      var goodsinfo = {
        id: this.curInfo.id, 
        count: this.goodsnum, 
        price: this.curInfo.sell_price, 
        selected: true,
        goodsname: this.curInfo.title
        }
      this.$store.commit("addTocar", goodsinfo)
    },
    // 动画
    beforeEnter(el){
      el.style.transform = "translate(0, 0)"
    },
    enter(el, done){
      el.offsetWidth;
      el.style.transform = "translate(58px, 160px)"
      el.style.transition = 'all 1s ease'
      // !!踩坑  这里需要等待transitionend 在done 执行afterEnter
      el.addEventListener('transitionend', done)
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
      // console.log(this.ballFlag)
    }
}}
</script>

<style scoped>
.detail-box{
  padding: 10px;
}
.ball{
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #ee2233;
  position: absolute;
  top: 453px;
  left: 176px;
  z-index: 20;
}
.img-box{
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin-bottom: 20px;
}
.img-box img{
  width: 100%;
}
.market{
  text-decoration: line-through;
}
.sell{
  color: #ee2020;
}
.goodsnum-box{
  margin-bottom: 45px;
  margin-top: 25px; 
}
.goodsnum-box button{
  width: 34px;
  height: 34px;
}
.goodsnum{
  display: inline-block;
  width: 30px;
}
</style>
