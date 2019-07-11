export const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEAD_COLOR':
      // store.head.color = action.color
      // break
      return {
        ...store,
        head: {
          ...store.head,
          color: action.color
        }
      }
    case 'BODY_TEXT':
      // store.body.text = action.text
      // break
      return {
        ...store,
        body: {
          ...store.body,
          text: action.text
        }
      }
    default:
      return {
        ...store
      }
  }
}