<template>
  <div class="carContainer">
    <ul>
      <li v-for="(item, i) in goodList" :key="i">
        <div class="oneGood">
          <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
          @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
          ></mt-switch>
          <div class="goodname">{{item.goodsname}}</div>
          <div class="goodsnum-box">
            <button @click="reduceNumToState(item.id)">-</button>
            <span class="goodsnum">{{item.count}}</span>
            <button @click="addNumToState(item.id)">+</button>
          </div>
          <div class="goodsprice">￥{{item.price * item.count}}</div>
        <div class="removeGood" @click="removeFromList(i)">删除</div>
        </div>
        
    </li>
    </ul>
    <p>{{$store.getters.getGoodsSelected}}</p>
    <h3 class="countAndAmou">已勾选{{$store.getters.getGoodsCountAndAmount.count}}件商品，共计<span class="goodsAmount">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>元</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
     goodList: [],
     goodsnum: 0
    }
  },
  created() {
    this.goodList = this.$store.state.car.slice(0)
    // console.log(1)
    // console.log(this.$store.state.car)
  },
  methods: {
   addNumToState(id) {
     var curGood = this.goodList.find(item => item.id == id)
     curGood.count++
     var oneCount = curGood.count
     console.log('111', oneCount)
     var idAndCount = {id, count: oneCount}
     this.$store.commit("changeCountToList", idAndCount)
   },
   reduceNumToState(id) {
     var curGood = this.goodList.find(item => item.id == id)
     if(curGood.count > 1)
     curGood.count--
     let count = curGood.count
     var idAndCount = {id, count}
     this.$store.commit("changeCountToList", idAndCount)
   },
    removeFromList(index) {
      this.goodList.splice(index, 1)
      this.$store.commit("removeOneGood", this.goodList)
    },
    selectedChanged(id, val){
      console.log(id,"---", val)
      this.$store.commit('updateGoodsSelected', {id, selected: val})
    }
  },
}
</script>

<style scoped>
.carContainer li {
  list-style-type:none;
  margin-bottom: 30px;
}
.carContainer ul {
  padding-left: 15px;
}
.goodsnum-box{
  margin: 0 20px;
}
.goodsnum-box button{
  width: 20px;
  height: 20px;
}
.goodsnum{
  display: inline-block;
  width: 20px;
}
.oneGood{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  line-height: 1.6;
}
.removeGood{
  color: #3322ee;
}
.goodname{
  margin: 0 15px;
  min-width: 140px;
}
.goodsprice, .goodsAmount{
  color: #ee223e;
}
</style>
