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
        <van-tabs v-model="active" animated>
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
            <van-grid square>
              <van-grid-item
                v-for="(item, i) in iconTo"
                :key="i"
                :icon="item.img_url"
                :text="item.title"
              />
            </van-grid>
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
export default {
  data() {
    return {
      iconTo: [
        {img_url: '../../assets/crown.png', title: '新品发布'},
        {img_url: '../../assets/crown.png', title: '新品发布'},
        {img_url: '../../assets/crown.png', title: '新品发布'},
        {img_url: '../../assets/crown.png', title: '新品发布'},
        {img_url: '../../assets/crown.png', title: '新品发布'},
        {img_url: '../../assets/crown.png', title: '新品发布'},
      ]
    }
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
    padding 0 10px
    img 
      width 100%
      height 100%
</style>

