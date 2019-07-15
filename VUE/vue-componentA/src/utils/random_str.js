// function a(len = 32) {
//   const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
//   var res = []
//   for(let i = 0; i < len; i++) {
//     var ran = Math.floor(Math.random() * $chars.length)
//     res.push($chars.slice(ran, ran + 1))
//   }
//   console.log(res.join('').toString())
// }
// a()
export default function (len = 32){
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const max = $chars.length;
  let str = ''
  for (let i = 0; i < len; i++){
      str += $chars.charAt(Math.floor(Math.random() * max))
  }
  return str
}