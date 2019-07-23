<template>
  <div>
    <h1>Welcome!</h1>
    <div class="index container">
      <base-list />
    </div>
  </div>
</template>

<script>
// import list from '../components/list'
export default {
  head: {
    title: 'Home Page'
  },
  // components: {
  //   'base-list': list
  // },
  async fetch() {

  }
}
</script>

<style>

</style>
