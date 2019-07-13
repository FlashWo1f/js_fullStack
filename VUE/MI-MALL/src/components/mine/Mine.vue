<template>
  <div class="mine">
    <div class="mine-top">
      <div class="awatar">
        <img src="../../assets/avatar1.png" alt="">
      </div>
    </div>
    <div class="myOrder">
      <div class="my">我的订单</div>
      <div class="allOrder">
        <span>全部订单</span>
        <img src="../../assets/arrowRight.png" alt="">
      </div>
    </div>
    <div class="list">
      <div class="toBePay">
        <img src="../../assets/ka.png" alt="">
        <p>待付款</p> 
      </div>
      <div class="toBeRec">
        <img src="../../assets/car.png" alt="">
        <p>待收货</p>
      </div>
      <div class="toBeCom">
        <img src="../../assets/com.png" alt="">
        <p>待评价</p>
      </div>
      <div class="backEnd">
        <img src="../../assets/tool.png" alt="">
        <p>退换修</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.mine
  width 100%
  .mine-top
    height 142px
    background-color #f37e0f
    position relative
    .awatar
      width 52px
      height 52px
      position absolute
      bottom 17px
      left 17px
      border 1px solid #dddddd
      border-radius 50%
      background-color #ffffff
      img 
        width 100%
  .myOrder
    line-height 42px
    display flex
    padding 0 15px
    .my
      flex 1
    .allOrder
      display flex
      color #bfbfbf
      font-size 14px
      img
        width 15px
        height 15px
        margin-left 10px
        position relative
        top 12px
  .list
    display flex
    div
      width 25%
      text-align center
    img
      width 25px
      height 25px
</style>
