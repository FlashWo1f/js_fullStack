names=[1,2,1,1,3,4,4,5,6,6,6,5,2,2]


let nameNum = names.reduce((pre,cur)=>{
    if(cur in pre){
      pre[cur]++
    }else{
      pre[cur] = 1 
    }
    return pre
  },{});
  console.log(nameNum);