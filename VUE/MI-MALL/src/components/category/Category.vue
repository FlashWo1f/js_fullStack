<template>
  <div class="categoryBox">
    <div class="header-func">
      <div class="hsearch">
        <!-- <input type="text"> -->
        <van-search placeholder="小米CC 100元预售" left-icon="search" />
      </div>
      <div class="hmessage">
        <img src="../../assets/message.png" alt="">
      </div>
    </div>
    <div class="category-body">
      <div class="cartgoryTitle">
        <ul class="menu-wrapper">
          <li
          v-for="(item, index) in categoryList" 
          :key="index"
          class="menu-item"
          :class="{'current':currentIndex===index}"
          @click="selectMenu(index, $event)"
          >
            <span>{{item[0].name}}</span>
          </li>
        </ul>
      </div>
      <div class="products">
        <ul v-for="(item, index) in categoryList"
            :key="index"
            class="oneCategory"
            >
          <li v-for="(pro, i) in item.slice(1)" :key="i">
            <div class="oneOfPro">
              <div class="proImg">
                <img :src="pro.picture" alt="">
              </div>
              <div class="proDesc">{{pro.desc}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: {},
      currentIndex: 0
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5cf9c392006feb28c7eedf28/category')
      .then(res => {
        // console.log(res)
        this.categoryList = res.data.data
      })
  },
}
</script>

<style lang="stylus" scoped>
.categoryBox
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
  .category-body
    display flex
    .cartgoryTitle
      width 72px
      font-size 14px
      border-right 1px solid #dddddd
      .menu-wrapper
        display flex
        flex-direction column
        .menu-item
          text-align center
          align-items center
          padding 12px  

</style>
