import userInitialState from "./user/initialState";
import userGetters from "./user/getters";
import userActions from "./user/actions";

import productsInitialState from "./products/initialState";
import productsGetters from "./products/getters";
import productsActions from "./products/actions";

export default {
  state: {
    ...userInitialState,
    ...productsInitialState,
  },
  getters: {
    ...userGetters,
    ...productsGetters,
  },
  actions: {
    ...userActions,
    ...productsActions,
  },
};
