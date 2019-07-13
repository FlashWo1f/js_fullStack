<template>
  <div class="car-box">
    <div class="nav">购物车</div>
    <div class="ifHaveNoPro" v-if="cartList == ''">购物车里空空如也~ 快去选购商品吧~</div>
    <div class="cartList">
      <div class="listBox" v-for="(item, i) in cartList" :key="i">
        <ProductInCar :title="item.title" 
                      :price="item.price"
                      :color="item.color"
                      :edi="item.edi"
                      :num="item.num" 
                      :imgUrl="item.imgUrl"
                      />        
      </div>
    </div>
    <div class="countAll">
      <van-checkbox v-model="allSelected" checked-color="#ff6b00">全选</van-checkbox>
      <div class="totalPrice">合计:<Price newPrice="3177"/></div>
      <div class="checkOut">结算</div>
    </div>
  </div>
</template>

<script>
import Price from '../../common/Price'
import { mapGetters } from 'vuex'
import ProductInCar from '../../common/ProductInCar'
export default {
  data() {
    return {
      allSelected: true
    }
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  components: {
    ProductInCar,
    Price
  }
}
</script>

<style lang="stylus" scoped>
.car-box
  padding-top 51px
  .ifHaveNoPro
    color #dddddd
    text-align center
    margin-top 100px
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
      background-color #ff6b00
</style>
