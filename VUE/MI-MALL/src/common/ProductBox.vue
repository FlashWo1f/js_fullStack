<template>
  <div class="productBox">
    <div class="proImg">
      <img :src="imgUrl" alt="">
    </div>
    <h2 class="proTitle">{{title}}</h2>
    <p class="proDescription">{{description}}</p>
    <Price :newPrice="newPrice" :oldPrice="oldPrice" />
    <h3 class="purchase">立即购买</h3>
  </div>
</template>

<script>
import Price from './Price'
export default {
  props: ['imgUrl', 'title', 'description', 'newPrice', 'oldPrice'],
  components: {
    Price
  }
}
</script>

<style lang="stylus" scoped>
.productBox
  text-align center
  background-color #fff
  padding-bottom 10px
  width 173px
  .proImg
    img
      width 100%
      height 100%
  .proTitle
    font-size 15px
    margin-bottom 4px
  .proDescription
    margin 0 0 5px 0
    font-size 13px
  .purchase
    width 98px
    background-color #ea625b
    color #ffffff
    font-size 13px
    line-height 25px
    margin-left 39px
    margin-top 5px
</style>
