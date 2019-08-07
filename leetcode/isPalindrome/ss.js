var longestPalindrome = function(s) {
  var res = 0
  let resStr
  for(let i = 0; i < s.length; i++) {
      for(var j = 1; j <= s.length - i; j++) {
        let str = s.slice(i, j+i)
          if (str.split('').reverse().join('') === str){
              let len = str.length
              console.log(len)
              if (len >= res){
                res = len
                resStr = str    
                // console.log(resStr)
              }
          }
      }
  }
  return resStr
};
// longestPalindrome('asdds')
console.log(longestPalindrome('babad'))