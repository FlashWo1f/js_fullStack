<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea cols="48" rows="5" placeholder="请输入内容(最多给你20个字)"></textarea>   
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title"></div>
        <div class="cmt-body"></div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>

  </div> 
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
