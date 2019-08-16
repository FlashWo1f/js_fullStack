// 匹配括号
var isValid = function (s) {
  let stack = []
  let sArr = s.split('')
  for (let i = 0; i < sArr.length; i++) {
    console.log(sArr[i])
    if (sArr[i] == '(' || sArr[i] == '{' || sArr[i] == '[')
      {stack.push(sArr[i]);
      console.log(stack)}
    else {
      if (stack.length === 0)
        return false;
      let top = stack.pop()
      console.log(top)
      let match;
      if (sArr[i] == ')') {
        match = '(';
      }
      else if (sArr[i] == ']') {
        match = '[';
      }
      else {
        match = '{';
      }
      if (match !== top)
        return false

    }
  }
    if (stack.length !== 0){
      return false
    }
    return true
};

console.log(isValid('({})'))