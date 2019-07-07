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
          <van-tab title="推荐" class="recommendBox">
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
            <!-- 功能栏 -->
            <div class="funcGrids">
              <div class="funcGrid" v-for="(item, i) in funcGrid" :key="i">
                <img :src="item.imgUrl" alt="">
                <div class="text">{{item.text}}</div>
              </div>
            </div>
            <!-- 产品推荐 -->
            <div class="recommendProduct">
              <!-- 推荐类型 -->
              <div class="reProduct" v-for="(item, i) in recommendProduct" :key="i">
                <h2 class="productTitle">{{item.recommendTitle}}</h2>
                <div class="products">
                  <!-- 具体类型的推荐产品 -->
                  <div class="singleProducts" v-for="pro in item.products" :key="pro.id">
                    <!-- 自定义组件ProductBox 装载基本产品信息 -->
                    <router-link to="" tag="div">
                      <ProductBox :newPrice="pro.newPrice" :oldPrice="pro.oldPrice" :description="pro.description" :title="pro.title" :imgUrl="pro.img_url"/>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
        
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
      recommendProduct: []
    }
  },
  components: {
      ProductBox
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d1e01dfb65a8b72e0d2acab/mi-mall/recommend')
    .then(res => {
      console.log(res)
      if (res.status == 200) {
        this.recommendProduct = res.data.data.recommend
        // Toast.fail('请求出错啦~');
        console.log(this.recommendProduct)
      }
    })
  },
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
    background-color #ffffff
    .recommendBox
      // background-color #e6e8fa
      padding 0 10px 62px 10px
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
      .recommendProduct
        width 100%
        .reProduct
          margin-bottom 20px
          // background-color #efefef
          .productTitle
            // font-family 宋体
            background-color #ffffff
            margin 0
            padding 10px
          .products
            display flex
            flex-wrap wrap
            justify-content space-between
</style>

