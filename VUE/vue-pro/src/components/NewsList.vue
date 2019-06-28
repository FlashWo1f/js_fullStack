<template>
  <div class="wrapper">
    <ul>
      <li v-for="(item, i) in newslist" :key="i">
        <router-link :to="'/home/newsinfo/' + item.id">
          <div class="one">
            <div class="image">
              <img :src="item.img" alt="">
            </div>
            <div class="content">
              <div class="content-con">{{item.text}}</div>
              <div class="time">发表时间: {{item.time}}</div>
            </div>
          </div>      
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList(){
      this.$http.get("https://www.easy-mock.com/mock/5d14de696a75841938f3e1b1/Vue-pro/vue-pro-demo").then(result => {
        this.newslist = result.body.data.xinwenData
        console.log(result.body)
      })
    }
  },
}
</script>

<style scoped>
.wrapper{
  padding: 15px;
}
.one{
  display: flex;
  width: 100%;
  padding: 10px 0;
}
ul {
  padding: 0;
}
li{
  list-style-type: none;
}
.image{
  margin: auto 0;
  padding-right: 8px;
}
.image img{
  width: 30px;
  height: 30px;
  
}
.content{
  width: 100%;
  overflow: hidden; 
  flex:1;
}
.content-con {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time {
  font-size: 12px;
  padding: 6px 0;
}
</style>
