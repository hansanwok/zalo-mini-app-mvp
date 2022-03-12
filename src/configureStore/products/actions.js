import productRequests from './requests'

export default {
  addProduct({ state }, product) {
    state.products = [...state.products, product];
  },
  async getProducts({state}) {
    try {
      const response = await productRequests.getProducts()
      state.products = [...state.products, ...response.data.data]
    } catch {}
  }
}
