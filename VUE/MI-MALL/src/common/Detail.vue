<template>
  <div class="detailBox">
    <div class="mask" v-show="flag"></div>
    <div class="backTo" @click="backTo">
      <img src="../assets/back.png" alt="">
    </div>
    <div class="img-box">
     <!-- {{this.$route.params.id}} -->
     <img :src="curDetail.img_url" alt="">
    </div>
    <div class="detailInfo">
      <h2 class="detailTitle">{{curDetail.title}}</h2>
      <div class="information">{{curDetail.description}}</div>
      <Price :newPrice="curDetail.newPrice" :oldPrice="curDetail.oldPrice" />
    </div>
    <van-goods-action>
      
      <van-goods-action-icon
        icon="like-o"
        text="喜欢 "
      />
      <van-goods-action-icon
        info="5"
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="openOption"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
      />
    </van-goods-action>
    <!-- 这里踩了个小坑 :closeOption="closeOption" 是错误写法  不能触发 -->
    <transition name="opt">
      <ProductOptions @closeOption="closeOption" v-show="flag"/>
    </transition>
  </div>
</template>

<script>
import Price from './Price'
import ProductOptions from './ProductOptions'
export default {
  data() {
    return {
      curDetail: [],
      flag: false
    }
    
  },
  components: {
    Price,
    ProductOptions
  },
  methods: {
    backTo() {
      this.$router.go(-1) 
    },
    closeOption(flag) {
      this.flag = flag
    },
    openOption() {
      this.flag = true
    },
  },
    

  created() {
      console.log(this.$router)

    this.$http.get('https://www.easy-mock.com/mock/5d1e01dfb65a8b72e0d2acab/detail')
    .then(res => {
      if (res.status == 200) {
        this.curDetail = res.data.data.products.find(item => item.id == this.$route.params.id)
        console.log(this.curDetail)
        // Toast.fail('请求出错啦~');
        // console.log(this.recommendProduct)
      }
    })
  },
}
</script>

<style lang="stylus" scoped>
.detailBox
  width 100%
  .img-box
    width 100%
    overflow hidden
    img
      width 180%
      height 180%
      margin-left -150px
  .detailInfo
    padding 0 20px
    .detailTitle
      margin 15px 0 8px 0
    .information
      font-size 14px
      margin-bottom 8px
  .backTo
    position absolute
    top 15px
    left 15px
    background-color #969696
    border-radius 50%
    img
      width 15px
      height 15px
      padding 7px 9px
  .opt-enter-active, .opt-leave-active
    transition: all .3s ease;
  .opt-enter, .opt-leave-to
    transform: translateY(667px);
    opacity: 0;
  .mask
    position fixed
    top 0
    left 0
    right 0
    height 100vh
    background-color rgba(33, 33, 33, 0.5)
</style>
