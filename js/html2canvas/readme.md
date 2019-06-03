- html2canvas 因为移动端
  网页分享， 小程序 不能直接分享到朋友圈  它可以将网页或一部分网页转为canvas

  html2canvas(dom, onrendered(canvas){
      显示  css
  })

- svg 是图片
    假如它能将dom 画在它内部的话
    foreignObject  svg => html

- window.getComputedStyle(dom, null)
    任何节点的CSS属性值都能拿到