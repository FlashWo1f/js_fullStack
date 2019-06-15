<template>
  <div>
    {{$store.state.count}}  time(s),
    <button @click="increment">+++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: [
  ],

  methods: {
    increment() {

    }
  },
}
</script>

<style>

</style>
