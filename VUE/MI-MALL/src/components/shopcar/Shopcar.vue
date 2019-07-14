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
                      :id="item.id"
                      />        
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
export default {
  data() {
    return {
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
        this.$refs.checkOut.style.backgroundColor = "#ff6b00"       
      }
    }
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
      background-color #dddddd
</style>
