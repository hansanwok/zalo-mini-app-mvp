export default {
  setUser({ state }, data) {
    state.user = { ...state.user, ...data };
  },
};
