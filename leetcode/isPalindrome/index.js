"A man, a plan, a canal:Panama"

/**
 * 忽略大小写   tolowerCase
 * 忽略特殊字符 特殊字符就跳过
 * left right 指针
 */

function isValid(c) {
  const charCode = c.charCodeAt(0) // 本身
  const isDigit = charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0)
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)
  return isDigit || isChar
}

var isPalindrome = function (s) {
  s = s.toLowerCase()
  let left = 0
  let right = s.length - 1
  while(left < right) {
    if (!isValid(s[left])) {
      left++
      continue
    }
    if (!isValid(s[right])) {
      right--
      continue
    }
    if (s[left] === s[right]) {
      left++,
      right--
    } else {
      break
    }
  }
  return right <= left
}
console.log(isPalindrome('A man, a plan, a canal:Panama'))