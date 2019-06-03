const arr = [99, 0, 33, 1, 2]

console.log(arr)
function sortNumber(a,b)
{return a - b}
console.log(arr.sort(sortNumber)[0],arr.sort(sortNumber)[arr.length-1])