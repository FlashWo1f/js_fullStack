import style from './index.css'
import lodash from 'lodash-es'
const sync = function () {
  console.log('sync')
  // index__test--3j9_P
  document.getElementById('app').innerHTML = `<h1 class=${style.test}>css module</h1>`
}
const testIsArray = function(arg) {
  console.log('isArray')
  console.log(lodash.isArray(arg))
}
export {
  sync,
  testIsArray
}