export default {
  addProduct({ state }, product) {
    state.products = [...state.products, product];
  },
}
