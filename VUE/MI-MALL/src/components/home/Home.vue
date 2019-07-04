<template>
  <div class="homeContainer">
    <!-- 顶部搜索栏和类别 -->
    <div class="header">
      <div class="header-func">
        <div class="hmessage">
          <img src="../../assets/message.png" alt="">
        </div>
        <div class="hsearch">
          <!-- <input type="text"> -->
          <van-search placeholder="小米平板4 标准钢化玻璃膜" left-icon="search" />
        </div>
        <div class="hsao">
          <img src="../../assets/sao.png" alt="">
        </div>
      </div>
      <div class="header-category">
        <van-tabs animated>
          <!-- body内在van-tab的slot里面 -->
          <van-tab title="推荐">
            <van-swipe :autoplay="5000" indicator-color="white">
              <van-swipe-item>
                <img src="https://i1.mifile.cn/a4/xmad_15617449331718_ckXCh.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="https://i1.mifile.cn/a4/xmad_15619653254287_Nyquo.jpg" alt="">
              </van-swipe-item>
              <van-swipe-item>
                <img src="https://i1.mifile.cn/a4/xmad_15617155056609_JWmIz.jpg" alt="">
              </van-swipe-item>
            </van-swipe>
            <div class="funcGrids">
              <div class="funcGrid" v-for="(item, i) in funcGrid" :key="i">
                <img :src="item.imgUrl" alt="">
                <div class="text">{{item.text}}</div>
              </div>
            </div>
            <ProductBox newPrice="2999" oldPrice="2399" description="新一代独立显卡" title="Air 13.3 i5 集显版" imgUrl="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b5e50495e27667efadc28ba70515ea6.jpg?w=1212&h=716"/>
          </van-tab>
          <van-tab title="手机">内容 2</van-tab>
          <van-tab title="智能">内容 3</van-tab>
          <van-tab title="电视">内容 4</van-tab>
          <van-tab title="笔记本">内容 1</van-tab>
          <van-tab title="家电">内容 2</van-tab>
          <van-tab title="生活周边">内容 3</van-tab>
        </van-tabs>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProductBox from '../../common/ProductBox'
export default {
  data() {
    return {
      funcGrid: [
        {imgUrl: require('../../assets/crown.png'), text: '新品发布'},
        {imgUrl: require('../../assets/qun.png'), text: '小米众筹'},
        {imgUrl: require('../../assets/xin.png'), text: '订金预售'},
        {imgUrl: require('../../assets/1.png'), text: '1分拼团'},
        {imgUrl: require('../../assets/bag.png'), text: '超值特卖'},
        {imgUrl: require('../../assets/clock.png'), text: '小米秒杀'},
        {imgUrl: require('../../assets/transform.png'), text: '以旧换新'},
        {imgUrl: require('../../assets/tv.png'), text: '电视热卖'},
        {imgUrl: require('../../assets/washer.png'), text: '家电热卖'},
        {imgUrl: require('../../assets/sim.png'), text: '米粉卡'}
      ],

    }
  },
  components: {
      ProductBox
  }
}
</script>

<style lang="stylus" scoped>
.homeContainer
  width 100%
  .header-func
    display flex
    align-items center
    padding 10px
    justify-content space-between
    img
      width 23px
      height 23px
    .hsearch
      flex 1
      width 100px
  .header-category
    padding 0 10px
    img 
      width 100%
      height 100%
    .funcGrids
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      color #515151
      
      .funcGrid
        text-align center
        width 20%
        font-size 12px
        img
          width 28px
          height 28px
          padding 26px 0 3px 0
</style>

