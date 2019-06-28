<template>
  <div class="newsinfo">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间</span>
      <span>点击0次</span>
    </p>
    <hr>
    <div class="content">
      第{{id}}条啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
      啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
      啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
    </div>
    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from './common/comment'
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style scoped>
.newsinfo{
  padding: 0 10px;
}
.title{
  font-size: 16px;
  margin: 15px 0px;
  color: #ee2233;
}
.subtitle{
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
</style>
