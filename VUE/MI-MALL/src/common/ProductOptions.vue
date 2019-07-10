<template>
  <div class="optionsBox">
    <div class="mask" @click="close"></div>
    <div class="close" @click="close">
      <img src="../assets/close.png" alt="">
    </div>
    <div class="options-header">
      <div class="img-box">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8f2ab52a8c96e5b9ae692576763d641c.jpg?w=1212&h=716" alt="">
      </div>
      <div class="pirceAndOptions">
        <Price newPrice="2333" oldPrice="2599" />
        <div class="showOptions">小米9 全网通版 6+64g 幻影紫</div>
      </div>
    </div>
    <div class="options-body">
      <div class="OptionBox">
        <p>版本</p>
        <div class="bbOptions options">
          <div class="Options">6GB+128GB</div>
          <div class="Options">8GB+128GB</div>
          <div class="Options">8GB+256GB</div>
        </div>
      </div>
      <div class="OptionBox">
        <p>颜色</p>
        <div class="colorOptions options">
          <div class="Options">碳纤黑</div>
          <div class="Options">火焰红</div>
          <div class="Options">冰川蓝</div>
        </div>
      </div>
      <div class="numOptionBox">
        <div>购买数量</div>
        <van-stepper v-model="value" />
      </div>
    </div>
    <div class="goPurchase">确定</div>
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
  props: [],
  components: {
    Price
  },
  methods: {
    close() {
      console.log(close)
      let flag = false
      this.$emit('closeOption', flag)
    }
  },
}
</script>

<style lang="stylus" scoped>
.optionsBox
  width 100%
  height 75vh
  padding 20px
  box-sizing border-box
  background-color #fff
  border-top-left-radius 10px
  border-top-right-radius 10px
  position fixed
  bottom 0
  left 0
  right 0
  .mask
    position fixed
    top 0
    left 0
    right 0
    height 25vh
    background-color rgba(33, 33, 33, 0.5)
  .close
    width 16px
    height 16px
    position absolute
    right 16px
    top 16px
    img 
      width 100%
  .options-header
    display flex
    padding-bottom 20px
    border-bottom 1px solid #dddddd
    .img-box
      width 104px
      height 104px
      margin-right 15px
      img
        width 100%
        height 100%
    .pirceAndOptions
      flex 1
      font-size 14px
      .price
        margin 20px 0 5px 0
  .options-body
      font-size 14px
    .OptionBox
      padding-bottom 20px
      border-bottom 1px solid #dddddd
      .options
        display flex
        .Options
          padding 6px
          border 1px solid #dddddd
          border-radius 3px
          margin-right 10px
    .numOptionBox
      padding-top 20px
      display flex
      justify-content space-between
  .goPurchase
    width 100%
    padding 8px 0
    margin-left -20px  
    background-color #ff6b00
    color #ffffff
    text-align center
    position fixed
    bottom 0
</style>
