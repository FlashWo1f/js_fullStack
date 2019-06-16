<template>
  <div id="app">
    {{$store.state.count}} times, count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">odd</button>
    <button @click="incrementAsync">incrementAsync</button>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  computed: mapGetters(
    ['evenOrOdd']
  ),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
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
