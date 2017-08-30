const state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || ''
}

const mutations = {
  SIGNIN(state, userInfo) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    state.userInfo = userInfo
  },
  /**
   * 退出登录
   * 
   * @param {Object} state
   */
  SIGNOUT(state) {
    localStorage.removeItem('userInfo')
    state.userInfo = ''
  }
}

const actions = {
  SIGNIN({ commit }, userInfo) {
    commit('SIGNIN', userInfo)
  },
  SIGNOUT({ commit }) {
    commit('SIGNOUT')
  }
}

export default {
  state,
  mutations,
  actions
}
