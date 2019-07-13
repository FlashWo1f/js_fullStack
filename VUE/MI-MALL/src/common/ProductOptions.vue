<template>
  <div class="optionsBox">
    <div class="close" @click="close">
      <img src="../assets/close.png" alt="">
    </div>
    <div class="options-header">
      <div class="img-box">
        <img :src="imgUrl" alt="">
      </div>
      <div class="pirceAndOptions">
        <Price :newPrice="newPrice" :oldPrice="oldPrice" />
        <div class="showOptions">{{title}}</div>
        <div class="selectedOptionsText">已选规格：{{this.selectedOptions.edi}}&nbsp;{{this.selectedOptions.color}}&nbsp;</div>
      </div>
    </div>
    <div class="options-body">
      <div class="OptionBox">
        <p>版本</p>
        <div class="bbOptions options">
          <div class="Options" 
          v-for="(item, i) in ediOptions" 
          :key="i" 
          @click="changeEdi(i)" 
          :class="{selected: ediOptionIndex === i}">
            {{item}}</div>
        </div>
      </div>
      <div class="OptionBox">
        <p>颜色</p>
        <div class="colorOptions options">
          <div class="Options" 
          v-for="(item, i) in colorOptions" 
          :key="i" 
          @click="changeColor(i)" 
          :class="{selected: colorOptionIndex === i}">
            {{item}}</div>
        </div>
      </div>
      <div class="numOptionBox">
        <div>购买数量</div>
        <van-stepper v-model="value" />
      </div>
    </div>
    <div class="goPurchase" @click="addToCart">确定</div>
  </div>
</template>

<script>
import Price from './Price'
export default {
  data() {
    return {
      value: 1,
      ediOptionIndex: -1,
      colorOptionIndex: -1,
      selectedOptions: { num: 1 },
      ediOptions: ['6GB+128GB', '8GB+128GB', '8GB+256GB'],
      colorOptions: ['碳纤黑', '火焰红', '冰川蓝']
    }
  },
  props: ['newPrice', 'oldPrice', 'title', 'imgUrl'],
  components: {
    Price
  },
  methods: {
    close() {
      this.$store.dispatch('setShowProOptions', false)
    },
    changeEdi(i) {
      this.ediOptionIndex = i
      this.selectedOptions = {
        ...this.selectedOptions,
        edi: this.ediOptions[i],
      }
    },
    changeColor(i) {
      this.colorOptionIndex = i
      this.selectedOptions = {
        ...this.selectedOptions,
        color: this.colorOptions[i],
      }
    },
    addToCart() {
      if (this.selectedOptions.edi && this.selectedOptions.color) {
        this.$store.dispatch('addToCart', {
          id: this.$route.params.id,
          title: this.title,
          ...this.selectedOptions,
          price: this.newPrice,
          imgUrl: this.imgUrl,
          selected: true
          })
          this.$toast.success({message:'加入购物车成功!', duration: 1000})
          this.$store.dispatch('setShowProOptions', false)
      }
      else {
        this.$toast.fail({message: '请选择产品规格!', duration: 1000})
      }
    }
  },
  watch: {
    value() {
      this.selectedOptions = {
        ...this.selectedOptions,
        num: this.value
      }
    }   
  }
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
      .selectedOptionsText
        margin-top 10px
        color #ff6b00
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
        .selected
          background-color #ff6b00
          color #ffffff
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
