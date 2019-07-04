<template>
  <div class="price">
    <span class="nsymbol">￥</span><span class="newPrice">{{newPrice}}</span>
    <span class="osymbol" v-if="oldPrice == '' ? false : true">￥</span><span class="oldPrice" v-if="oldPrice == '' ? false : true">{{oldPrice}}</span>
  </div>
</template>

<script>
export default {
  props: ['newPrice', 'oldPrice']
}
</script>

<style lang="stylus" scoped>
.nsymbol, .newPrice
  font-size 17px
  color #ee2233
.nsymbol
  font-size 12px
  position relative
  top -4px
.osymbol, .oldPrice
  font-size 10px
  color #b0b0b0
  text-decoration line-through
</style>
