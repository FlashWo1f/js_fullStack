<template>
  <div class="hello">
    <button @click="submit">登录</button>
    <i-button size="small">i-button</i-button>
    <i-menu />
  </div>
</template>

<script>
import Button from './com/Button'
import Menu from './com/Menu'
export default {
  name: 'HelloWorld',
  data () {
    return { 
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'i-button': Button,
    'i-menu': Menu
  },
  methods: {
    submit() {
      this.$toast('登录成功', 'top')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
