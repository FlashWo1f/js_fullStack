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
      <div class="cartgoryTitle" ref="cartgoryTitle">
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
      <div class="products" ref="products">
        <div>
          <ul v-for="(item, index) in categoryList"
              :key="index"
              class="oneCategory"
              ref="refPro"
              >
            <div class="proTitle">{{item[0].name}}</div>
            <li v-for="(pro, i) in item.slice(1)" :key="i" >
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
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      categoryList: {},
      listHeight: [],
      scrollY: 0
    }
  },
  methods: {
    _calculateHeight(){
      let refPros = this.$refs.refPro
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < refPros.length; i++) {
        let item = refPros[i]
        height += item.clientHeight // 原生JS获取DOM节点高度
        this.listHeight.push(height)
      }
    },
     _initScroll() {
      this.cartgoryTitle = new BScroll(this.$refs.cartgoryTitle, {
        click: true
      })
      this.products = new BScroll(this.$refs.products, {
        click: true,
        probeType: 3
      })
      this.products.on('scroll', pos => {
        // console.log(pos.y)
        // abs 计算精度
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY)
      }) 
    },
  selectMenu(index, event) {
    console.log(index, event)
    if (!event._constructed) {
      return;
    }
    let refPros = this.$refs.refPro;
    let el = refPros[index];
    this.products.scrollToElement(el, 300); // 300 ms
    console.log('currentIndex', this.currentIndex)
    },
  },
  computed: {
    currentIndex () {
      for(let i = 0; i < this.listHeight.length; i++){
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d1e01dfb65a8b72e0d2acab/mi-mall/category')
      .then(res => {
        // console.log(res)
        this.categoryList = res.data.data
        this.$nextTick(() => { //页面渲染完成才能执行
            this._initScroll()
            this._calculateHeight()
          })
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
    position fixed
    top 0
    left 0
    right 0
    background-color #fff
    font-size 0
    z-index 5
    img
      width 23px
      height 23px
    .hsearch
      font-size 14px
      flex 1
      width 100px
  .category-body
    margin-top 74px
    .cartgoryTitle
      width 72px
      height 80vh
      font-size 14px
      overflow hidden
      border-right 1px solid #dddddd
      position fixed
      top 74px
      bottom 62px
      left 0
      .menu-wrapper
        display flex
        flex-direction column
        .menu-item
          text-align center
          align-items center
          padding 12px  
          .current
            border-left 2px solid #fd6c02
            color #fd6c02
    .products
      height 80vh
      margin-left 75px
      text-align center
      .oneCategory
        margin-bottom 15px
        display flex
        flex-wrap wrap
        .proTitle
          font-size 16px
          color #767676
          width 100%
        .oneOfPro
          width 66px
          margin 10px 17px
          font-size 13px
          color #767676
          img
            width 100%
            margin-bottom 5px
</style>
