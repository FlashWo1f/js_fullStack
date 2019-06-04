<template>
  <div class="look">
    {{message}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: '什么鬼套路之'
    }
  }
}
</script>