<template>
  <div class="proBox">
    <div class="selectedOrNot">
      <van-checkbox v-model="selected" checked-color="#ff6b00"></van-checkbox>
    </div>
    <div class="proImg">
      <img :src="imgUrL" alt="">
    </div>
    <div class="options">
      <div class="proTitle">{{title}}</div>
      <div class="proOptions">{{color}}&nbsp;{{edi}}</div>
      <div class="priceAndCount">
        <Price :newPrice="price" />
        <van-stepper v-model="num" />
      </div>
    </div>
  </div>
</template>

<script>
import Price from './Price'
export default {
  data() {
    return {
      value: 1,
      selected: true
    }
  },
  props: ['title', 'price', 'imgUrL', 'num', 'edi', 'color'],
  components: {
    Price
  }
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
</style>
