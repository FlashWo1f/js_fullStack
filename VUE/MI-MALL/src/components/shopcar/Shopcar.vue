<template>
  <div class="car-box">
    <div class="nav">购物车</div>
    <ProductInCar />
  </div>
</template>

<script>
import ProductInCar from '../../common/ProductInCar'
export default {
  data() {
    return {
      
    }
  },
  components: {
    ProductInCar  
  }
}
</script>

<style lang="stylus" scoped>
.car-box
  padding-top 51px
  .nav
    width 100%
    height 51px
    background-color #fff
    text-align center
    font-size 16px
    line-height 51px
    position fixed
    top 0
</style>
