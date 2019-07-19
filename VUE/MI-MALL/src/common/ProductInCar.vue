<template>
  <div class="proBox">
    <div class="selectedOrNot">
      <van-checkbox v-model="getGoodsSelected[id]" 
                    checked-color="#ff6b00"
                    @click="changeSelected(id, getGoodsSelected[id])"
                    ></van-checkbox>
    </div>
    <div class="proImg">
      <img :src="imgUrL" alt="">
    </div>
    <div class="options">
      <div class="proTitle">{{title}}</div>
      <div class="proOptions">{{color}}&nbsp;{{edi}}</div>
      <div class="priceAndCount">
        <Price :newPrice="price" oldPrice="" />
        <van-stepper v-model="oneNum" />
      </div>
      <div class="deleteInCart" @click="deleteInCart(id)">删除</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Price from './Price'
export default {
  data() {
    return {
      value: 1,
      selected: true,
      oneNum: this.num
    }
  },
  computed: {
    ...mapGetters([
      'getGoodsSelected'
    ])
  },
  watch: {
    oneNum(val) {
      this.$store.dispatch('changeGoodNum', {val, id: this.id})
    }
  },
  props: ['title', 'price', 'imgUrL', 'num', 'edi', 'color', 'id'],
  components: {
    Price
  },
  methods: {
    changeSelected(id, torf) {
      this.$store.dispatch('changeSelected', {id,torf})
      console.log(id,"---", torf)
    },
    deleteInCart(id) {
      this.$store.dispatch('delFromCart', id)
    }
  },
}
</script>

<style lang="stylus" scoped>
.proBox
  padding 15px 17px
  width 100%
  display flex
  box-sizing border-box
  border-top 1px solid #dddddd
  border-bottom 1px solid #dddddd
  background-color #fcfcfc
  margin-bottom 10px
  .selectedOrNot
    margin-top 28px
    img 
      width 100%
      height 100%
  .proImg
    width 75px
    height 75px
    border-radius 5px
    border 1px solid #dddddd
    margin 0 16px
    img 
      width 100%
      height 100%
  .options
    flex 1
    display flex
    flex-direction column
    position relative
    .proTitle
      font-size 14px
    .proOptions
      font-size 12px
      color #dddddd
      margin-top 5px
    .priceAndCount
      flex 1
      display flex
      justify-content space-between
      margin-top 10px
    .deleteInCart
      position absolute
      top 0px
      right 0px
      font-size 12px
      color #aaaaaa
</style>
