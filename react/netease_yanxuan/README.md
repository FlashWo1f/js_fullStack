## 设计自定义组件

- 暴露出来的API尽可能少
当然不是说功能多了不好，只是要善用外观模式或者命令模式等去封装一些操作，做到高内聚，API 过多会增加学习成本，一个高内聚的 API 会被认做是一个易于使用的 API
- 使用 props.children
在开始标签和结束标签中间的内容都会被塞进 props.children props，应该尽可能多的使用它，因为它比一个 content prop，或者一些文本内容需要传递的时候更易使用
- 扩散剩余的 props
function ToolTip({ isVisible, ...rest }) {
  return isVisible ? <span role="tooltip" {...rest} /> : null;
}
- 给出足够的默认值
- 编写 prop types
代码既文档，现在已经有 prop-types 包可用，去使用它