import { createStore } from "zmp-core/lite";

import configureStore from "./configureStore";

const store = createStore({
  state: configureStore.state,
  getters: configureStore.getters,
  actions: configureStore.actions,
});

export default store;
