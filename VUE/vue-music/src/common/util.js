export function debounce(fn, delay) {
  let timer
  return function(...args) {
    if (timer) {clearTimeout(timer)}
    else {fn.apply(this, args)}
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}