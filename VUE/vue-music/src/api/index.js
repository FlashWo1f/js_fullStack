// 为什么要对axios进行封装呢
// 在封装里面写好成功失败后的等一系列操作  避免代码的冗余
import axios from 'axios'
import Vue from 'vue'

const vue = new Vue()

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    window.alert('网络异常~')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  window.alert('网络异常~')
  return Promise.reject(error)
})

export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { 
      params: params
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export default {
  Login(params) {
    return fetchGet('/login', params)
  }
}