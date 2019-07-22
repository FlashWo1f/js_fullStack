import axios from 'axios';

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'
// /netease_yanxuan/index

// axios.interceptors.response.use((res) => {
//   if (res.data.code !== 200){
//     window.alert('网络异常....')
//     return Promise.reject(res)
//   }
//   return res
// },(error) => {
//   window.alert('网络异常....')
//   return Promise.reject(error)
// })


export function getData() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/netease_yanxuan/index')
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export function getGoodDetail(id) {
  return new Promise((resolve, reject) => {
    axios.get('https://www.easy-mock.com/mock/5d2c0894dfc019450c5a1f2b/netease-shop/detail')
    .then(response => {
      console.log(response)
      let result = response.data.data.goodDetail.find(item => item.id == id)
      resolve(result)
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export function getCateList() {
  return new Promise((resolve, reject) => {
    axios.get('https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/netease_yanxuan/cateList')
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
