import API from '../../services/API'

const getProducts = () => API.get('/products')

export default {
  getProducts
}

