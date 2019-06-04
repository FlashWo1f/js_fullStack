<template>
  <div class="Aside">
    <el-row class="tac">
      <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {

    }
  },
  // computed: {
  //   userName () {
  //     return localStorage.getItem('userName')
  //   }
  // },
  // methods: {
  //   handleCommand (command) {
  //     if (command === 'loginout') {
  //       this.$router.push({ name: 'Login', params: { userId: 1 } })
  //     }
  //   }
  // },
}
</script>
