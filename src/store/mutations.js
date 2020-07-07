export default {
  deleteItem : (state, payload) => {
    let arr = state.menus.filter(data => {
      return payload.id != data.id;
    })
    state.menus = arr;
  }
}