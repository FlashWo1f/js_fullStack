function marry(man, woman) {
  woman.husban = man
  man.wife = woman
  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: 'John'
},
{
  name: 'Ann'
})
// 切断可达性
    //           Global
    //             |
    //           Object(Family)
    //     |                       |
    // Object(father)   <->     Object(mother)

    