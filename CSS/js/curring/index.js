// function mulit(a){
//     return function(b){
//         return function(c){
//             return a * b * c
//         }
//     }
// }
// console.log(mulit(2)(2)(3))


//-------------------------------------------------------------------------------
// function multiFn(a, b, c){
//     return a * b * c
// }
// function curry(fn){
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function(){
//         var newArgs = args.concat(Array.prototype.slice.call(arguments))
//         return fn.apply(this, newArgs)
//     }
// }
// var multi = curry(multiFn)
// console.log(multi(2, 3, 4))

// ----------------------------------------------------------------------------------
function multiFn(a, b, c){
        return a * b * c
}
function curry(fn, args){
    var length = fn.length
    var args = args || []
    console.log(args)
    return function(){
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        console.log(arguments)
        if (newArgs.length < length){
            return curry.call(this, fn, newArgs)
        }else{
            return fn.apply(this, newArgs)
        }
    }
}
var multi = curry(multiFn)
console.log(multi(2)(5)(4))
// -----------------------------------------------------------------------------

// function mulit(){
//     var args = Array.prototype.slice.call(arguments)
//     var fn = function(){
//         var newArgs = args.concat(Array.prototype.slice.call(arguments))
//         return mulit.apply(this, newArgs)
//     }
//     // Function.prototype.toString 展示该方法的源代码
//     fn.toString = function(){
//         return args.reduce(function(a, b){
//             return a * b
//         })
//     }
//     return fn
// }
// console.log(mulit(2)(3)) 
