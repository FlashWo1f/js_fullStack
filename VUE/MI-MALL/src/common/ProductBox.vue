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
  width 179px
  .proImg
    img
      width 100%
      height 100%
  .proTitle
    font-size 17px
  .proDescription
    font-size 15px
  .purchase
    width 92px
    background-color #ea625b
    color #ffffff
    font-size 15px
    line-height 25px
</style>
