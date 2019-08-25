function selectSort(arr){
  for(let i = 0; i < arr.length; i++) {
      let min = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min])
        min = j
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp

  }
  return arr
}

console.log(selectSort([9,7,10,18,22,2,5,0]))
