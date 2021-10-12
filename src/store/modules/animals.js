import moment from "moment";

const state = {
  animals: []
};

const actions = {
  addAnimal({commit}, name) {
    moment.locale('pl');

    commit('ADD_ANIMAL', {
      name: name,
      dateAdd: moment().format('LLL'),
    });
  }
};

const mutations = {
  ADD_ANIMAL(state, animal) {
    state.animals.push(animal);
  }
};

export default {
  state, actions, mutations
};
