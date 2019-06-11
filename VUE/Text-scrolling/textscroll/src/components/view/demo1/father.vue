<template>
  <div class="container">
    <child :send-msg="test"></child>
    <h1>666</h1>
  </div>
</template>
<script>
import child from './child'
export default {
  name: 'demo1',
  data() {
    return {
      test: {
        message: '帅帅气气',
        date: '2019/06/11',
        age: 18
      }
      
    }
  },
  components: {
    child
  }
}
</script>