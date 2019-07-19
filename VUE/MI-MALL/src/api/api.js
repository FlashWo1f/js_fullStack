import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d1e01dfb65a8b72e0d2acab/mi-mall/'

export function getRecommend() {
  return new Promise((resolve, reject) => {
    axios.get(axios.defaults.baseURL + 'recommend')
    .then(response => {
      // console.log('recommend', response)
      if (response.status === 200) {
        resolve(response)
      }else {

      }
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export function getShopcarRecommend() {
  return new Promise((resolve, reject) => {
    axios.get(axios.defaults.baseURL + 'shopcarrecomm')
    .then(response => {
      // console.log('recommend', response)
      if (response.status === 200) {
        resolve(response)
      }else {

      }
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export function getDetail() {
  return new Promise((resolve, reject) => {
    axios.get(axios.defaults.baseURL + 'detail')
    .then(response => {
      // console.log('recommend', response)
      if (response.status === 200) {
        resolve(response)
      }else {

      }
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}
