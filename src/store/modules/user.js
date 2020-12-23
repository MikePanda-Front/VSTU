export default {
  state: {
    user: {
      name: '',
      email: '',
      status: '',
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  getters: {
    userInfo(state) {
      return state.user
    },
  },
}
