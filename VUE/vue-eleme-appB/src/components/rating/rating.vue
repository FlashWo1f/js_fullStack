<template>
  <div>
    <div class="rating">
      <div class="header">
        <div class="header-left">
          <div class="totalScore">{{sellerInfo.score}}</div>
          <div class="totalScore-text">综合评分</div>
          <div class="rankRate"> 高于周边商家{{sellerInfo.rankRate}}% </div>
        </div>
        <div class="header-right">
          <div class="serviceScore">
            服务态度
            <div v-for="(item, i) in Math.floor(sellerInfo.serviceScore)" :key="i" class="light">
            </div>
            {{sellerInfo.serviceScore}}
          </div>
          <div class="foodScore">
            商品评分
            <div v-for="(item, i) in Math.floor(sellerInfo.foodScore)" :key="i" class="light">
            </div>
            {{sellerInfo.foodScore}}
          </div>
          <div class="deliveryTime">送达时间{{sellerInfo.deliveryTime}}分钟</div>
        </div>
      </div>
      <div class="kongxi"></div>
      <div class="body">
        <div class="body-top">
          <div class="all">全部</div>
          <div class="sati">满意</div>
          <div class="unsati">不满意</div>
        </div>
        <div class="body-center">
          只看有内容的评论
        </div>
        <div class="body-bottom">
          <ul>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'Rating',
data() {
  return {
    sellerInfo: {},
    comments: []
  }
  
},
created() {
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller')
    .then((res) => {
      this.sellerInfo = res.data.data
      // console.log(this.sellerInfo)
    })
    this.$http.get('https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-rating')
    .then((res) => {
      // console.log(res)
      if (res.data.errno == 0) {
        this.comments = res.data.data
        console.log(this.comments)
      }
    })
  }
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.rating
  position absolute
  top 174px
  bottom 0
  width 100%
  overflow hidden
  .header
    width 100%
    display flex
    height 120px
    .header-left
      text-align center
      height 84px
      margin 18px 0
      padding 0 12px
      border-right 1px #aaaaaa solid
      .totalScore
        font-size 20px
        color #ff8a00
        line-height 1
        padding 12px 0
      .totalScore-text
        font-size 13px
        line-height 1
        margin-bottom 8px
      .rankRate
        font-size 12px
        line-height 1
        color #c2c5c7
    .header-right
      flex 1
      height 84px
      margin 18px 0
      padding 0 26px
      font-size 13px
      .serviceScore
        padding 4px 0
        display flex
        text-align center
        line-height 18px
        .light
          bg-image('star24_on')
          width 18px
          height 18px
          background-size 100% 100%
      .foodScore
        padding 4px 0
        display flex
        text-align center
        line-height 18px
        .light
          bg-image('star24_on')
          width 18px
          height 18px
          background-size 100% 100%     
  .kongxi
    width 100%
    height 20px
    background-color #f1f4f6
  .body
    width 100%
    .body-top, .body-center
      margin 0 20px
    .body-top
      display flex
      font-size 14px
      padding 16px 0
      border-bottom 1px rgba(200, 200, 200, .6) solid
      .all
        color #ffffff
        padding 11px 14px
        background-color #009ea2
        margin-right 10px
      .sati
        color #5d6a72
        padding 11px 14px
        background-color #c9ecf8
        margin-right 10px
      .unsati
        color #5d6a72
        padding 11px 14px
        background-color #d9dcdc
    .body-center
      padding 16px 0
    .body-bottom
      border-top 1px #aaaaaa solid
      padding 0 20px
</style>
