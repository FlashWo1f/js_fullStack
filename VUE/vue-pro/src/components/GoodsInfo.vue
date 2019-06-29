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
    <mt-button type="primary" size="large">立即购买</mt-button>
    <mt-button type="danger" size="large">添加购物车</mt-button>
  </div>
</template>

<script>
export default {
   data() {
    return {
      curInfo: {},
      goodsnum: 1
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
    }
}}
</script>

<style scoped>
.detail-box{
  padding: 10px;
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
