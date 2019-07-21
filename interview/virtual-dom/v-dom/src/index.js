import { createElement, render, renderDOM }  from './element'

// ul.list>li.item*3

let virtualDOM = createElement('ul', {
  class: 'list'
}, [
  createElement('li', { class: 'item' }, ['Jay']),
  createElement('li', { class: 'item' }, ['WenSent']),
  createElement('li', { class: 'item' }, ['Jun'])
])
console.log(virtualDOM)
let el = render(virtualDOM)
renderDOM(el, document.getElementById('root'))