<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_container" v-show="showLogin">
        <div class="manage_tip">
          <span class="title">后台管理系统</span>
        </div>
        <!-- 容器组件 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username">
            <span class="fa-tips">
              <i class="fa fa-user"></i>
            </span>
            <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <span class="fa-tips">
              <i class="fa fa-lock"></i>
            </span>
            <el-input class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>

    </transition>
  </div>
</template>

<script>
import axios from 'utils/axios'

export default {
  data() {
    return {
      loginForm: {
        username: '蒋中正',
        password: ''
      },
      rules: {
        username: [
          {
            required: true, // 必填
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 8,
            message: '长度在2-8字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      showLogin: false
    }
  },
  mounted() {
    this.showLogin = true
  },
  methods: {
    hideOr(){
      this.showLogin = !this.showLogin
    },
    submitForm () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let userinfo = this.loginForm
          let data = {
            url: ''
          }
          // 合并 JSON
          let userData = Object.assign(userinfo, data)
          console.log(userData)
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

.form-fade-enter-active, .form-fade-leave {
  transition: all .6s
}
.form-fade-enter, .form-fade-leave-active {
  opacity: 0;
  transform: translate(0, -50px)
}
</style>
