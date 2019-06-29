<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
      <img :src="item.img_url" alt="">
      <div class="title">{{item.title}}</div>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link> -->
    <div class="goods-item" v-for="item in goodsList" 
    :key="item.id" 
    :to="'/home/goodsinfo/' + item.id" 
    tag="div"
    @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <div class="title">{{item.title}}</div>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <!-- <div class="goods-item">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6de54004880564306b8730fc92c64dae.jpg" alt="">
      <div class="title">Redmi K20</div>
      <div class="info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6de54004880564306b8730fc92c64dae.jpg" alt="">
      <div class="title">Redmi K20</div>
      <div class="info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥1099</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default { 
  data() {
    return {
      goodsList: []
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
          this.goodsList = res.body.data.goodsData
        }
        console.log(this.goodsList)
      })
    },
    goDetail(id) {
      console.log(this)
      this.$router.push({name: 'GoodsInfo', params: {id}})
    }
  },
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 3px 0;
}
.goods-item img {
  width: 100%;
}
.now {
  color: #ee2020;
}
.old{
  text-decoration: line-through;
}
.title{
  font-size: 14px;
}
.sell{
  padding: 0 15px;
  color: #aaaaaa;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
</style>
