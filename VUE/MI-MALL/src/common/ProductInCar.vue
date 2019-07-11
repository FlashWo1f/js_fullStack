<template>
  <div class="proBox">
    <div class="selectedOrNot">
      <img src="../assets/close.png" alt="aa">
    </div>
    <div class="proImg">
      <img src="../assets/close.png" alt="aa">
    </div>
    <div class="options">
      <div class="proTitle">小米9 全网通版 6GB+128GB</div>
      <div class="proOptions">全息幻影紫 128G</div>
      <div class="priceAndCount">
        <Price newPrice="2799" oldPrice="2999" />
        <van-stepper v-model="value" />
      </div>
    </div>
  </div>
</template>

<script>
import Price from './Price'
export default {
  data() {
    return {
      value: 1
    }
  },
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
  .selectedOrNot
    width 21px
    height 21px
    border 1px solid #dddddd
    border-radius 50%
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
    .priceAndCount
      flex 1
      display flex
      justify-content space-between
</style>
