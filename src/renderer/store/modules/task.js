import api from '@/utils/api';

const state = {
  freeTaskList: '',
  freeTaskTotal: 0,
  freeTaskTabIndex: 0,
}

const mutations = {
  changeState(state, changeState) {
    for (var key of Object.keys(state)) {
      for (var key2 of Object.keys(changeState)) {
        if (key == key2) {
          state[key] = changeState[key2];
        }
      }
    }
    console.log(state)
  },
  freeTaskSelect(state, res) {
    state.freeTaskTabIndex = 0;
    state.freeTaskList = res.data.data;
    state.freeTaskTotal = res.total;
  }
}

const actions = {
  changeState({ commit }, changeState) {
    commit('changeState', changeState)
  },
  freeTaskSelect({ commit }, params) {
    params.type = 1;
    api.get('taskSelect', { params: params }).then((res) => {
      if (res.code == 200) {
        commit('freeTaskSelect', res);
      }
    });

  }
}

export default {
  state,
  mutations,
  actions
}
