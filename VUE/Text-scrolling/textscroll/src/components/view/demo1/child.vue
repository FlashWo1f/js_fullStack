<template>
  <div class="container">
    {{sendMsg.message}}
    {{sendMsg.age}}
    {{sendMsg.date}}
  </div>
</template>
<script>
export default {
  name: 'demoChild1',
  props: {
    sendMsg: {
      type: Object,
      require: true  
    },
  },
  data() {
    return {
    
    }
  },
}
</script>