<template>
  <div class="container">{{msg}}
    <child @wn="getWn"></child>
  </div>
  
</template>

<script>
import child from './child'
export default {
  name: 'demo2',
  data() {
    return {
      msg: 2
    }
  },
  components: {
    child
  },
  methods: {
    getWn(data){
      this.msg = data
    }
  },
}
</script>