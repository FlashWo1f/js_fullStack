<template>
  <div class="car-box">
    <div class="nav">购物车</div>
    <div class="ifHaveNoPro" v-if="cartList == ''">
      购物车里空空如也~ 快去选购商品吧~
    </div>
    <div class="cartList">
      <div class="listBox" v-for="(item, i) in cartList" :key="i">
        <ProductInCar :title="item.title" 
                      :price="item.price"
                      :color="item.color"
                      :edi="item.edi"
                      :num="item.num" 
                      :imgUrl="item.imgUrl"
                      :id="item.id"
                      />        
      </div>
    </div>
    <div class="shopcarRecomm">
        <img src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
        <div class="recommPro">
          <div class="recommPro-one" v-for="item in shopcarRecommend" :key="item.id">
            <router-link :to="'/detail/' + item.id" tag="div">
              <div class="proBox">
                <div class="pro-img">
                  <img :src="item.img_url" alt="">
                </div>
                <div class="pro-title">{{item.title}}</div>
                <Price :newPrice="item.newPrice" :oldPrice="item.oldPrice" />
              </div>
            </router-link>
          </div>
          
        </div>
    </div>
    <div class="countAll">
      <van-checkbox v-model="allSelected" checked-color="#ff6b00" @click="changeAllSelected(allSelected)">全选</van-checkbox>
      <div class="totalPrice">合计:&nbsp;<Price :newPrice="totalPrice" oldPrice=""  /></div>
      <div class="checkOut" ref="checkOut" @click="toCheckOut">结算({{cartListLen}})</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import Price from '../../common/Price'
import { mapGetters } from 'vuex'   
import ProductInCar from '../../common/ProductInCar'
import { getShopcarRecommend } from '../../api/api'
export default {
  data() {
    return {
      shopcarRecommend: []
    }
  },
  computed: {
    ...mapGetters([
      'cartList',
      'allSelected',
      'totalPrice',
      'cartListLen'
    ])
  },
  created() {
    getShopcarRecommend()
      .then(res => {
        this.shopcarRecommend = res.data.data.recomm
        // console.log('12121', this.shopcarRecommend)
      })
    
  },
  mounted() {
    if (this.cartListLen !== 0) {
      this.$refs.checkOut.style.backgroundColor = "#ff6b00"       
    }
  },
  methods: {
    changeAllSelected(status) {
      this.$store.dispatch('changeAllSelected', status)
    },
    toCheckOut() {
      Dialog.confirm({
      title: '结算',
      message: '将购物车移动到待付款，请立即付款'
      }).then(() => {
        // on confirm
        this.$store.dispatch('clearCartList')
        this.$router.push({path: '/mine'})
      }).catch(() => {
        // on cancel
      });
    }
  },
  watch: {
    totalPrice(val) {
      if (val === 0) {
        this.$refs.checkOut.style.backgroundColor = "#dddddd"
      } else {
        // console.log('sdasd ', this.$refs.checkOut)
        this.$refs.checkOut.style.backgroundColor = "#ff6b00"       
      }
    }
  },
  components: {
    ProductInCar,
    Price,
  }
}
</script>

<style lang="stylus" scoped>
.car-box
  padding-top 51px
  margin-bottom 100px
  .ifHaveNoPro
    color #dddddd
    text-align center
    margin 50px 0
  .shopcarRecomm
    width 375px
    margin-top 50px
    img
      width 100%
    .recommPro
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      .recommPro-one
        width 49.5%
        display flex
        .proBox
          width 100%
          display flex
          flex-direction column
          .pro-title
            font-size 14px
            padding-left 10px
            color #3c3c3c
          .price
            padding-left 10px
        
  .nav
    width 100%
    height 51px
    background-color #fff
    text-align center
    font-size 16px
    line-height 51px
    position fixed
    top 0
    border-bottom 1px solid #dddddd
    z-index 99
  .countAll
    width 100%
    background-color #ffffff
    position fixed
    font-size 14px
    bottom 50px
    display flex
    box-sizing border-box
    justify-content space-between
    padding-left 15px
    .totalPrice
      line-height 50px
      margin-left -50px
      display flex  
    .checkOut
      height 50px
      font-size 15px
      padding 0 50px
      line-height 50px
      color #ffffff
      background-color #dddddd
</style>
