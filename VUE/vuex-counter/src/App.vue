<template>
  <div id="app">

    <counter></counter>
    <counter-brother></counter-brother>
  </div>
</template>

<script>
// 现在兄弟组件之间需要共享count
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'


export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    
  },
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
