import moment from "moment";

const state = {
  categories: [
    {
      name: 'Domek na drzewie',
      dateAdd: moment().format('LLL')
    },
    {
      name: 'Domek na ziemi',
      dateAdd: moment().format('LLL')
    }
  ]
};

const actions = {
  addCategory({commit}, name) {
    commit('ADD_CATEGORY', {
      name: name,
      dateAdd: moment().format('LLL')
    })
  }
};

const mutations = {
  ADD_CATEGORY(state, category) {
    state.categories.push(category);
  }
};

export default {
  state, actions, mutations
};
