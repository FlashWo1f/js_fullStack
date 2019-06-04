<template>
  <div class="look">
    {{message}}
    <p>接受的参数: {{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name: 'LookTwo',
  data () {
    return {
      message: '曲线救国'
    }
  }
}
</script>