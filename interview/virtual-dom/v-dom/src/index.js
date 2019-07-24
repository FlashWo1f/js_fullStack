import { createElement, render, renderDOM }  from './element'
import diff from './diff';
import patch from './patch';
import './index.css'

// ul.list>li.item*3

let virtualDOM = createElement('ul', {
  class: 'list'
}, [
  createElement('li', { class: 'item' }, ['Jay']),
  createElement('li', { class: 'item' }, ['WenSent']),
  createElement('li', { class: 'item' }, ['Jun'])
])

let el = render(virtualDOM)
renderDOM(el, document.getElementById('root'))
// 创建另一个新的虚拟DOM
let virtualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item active'}, ['七里香']),
  createElement('li', {class: 'item'}, ['WenSent']),
  createElement('li', {class: 'item'}, ['需要人陪'])    
]);
let patches = diff(virtualDOM, virtualDom2);
console.log('patches', patches)
patch(el, patches);