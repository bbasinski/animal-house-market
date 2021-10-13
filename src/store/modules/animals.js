import moment from "moment";
moment.locale('pl');

const state = {
  animals: [
    {
      name: 'Pies',
      dateAdd: moment().format('LLL'),
    },
    {
      name: 'Kot',
      dateAdd: moment().format('LLL'),
    },
  ]
};

const actions = {
  addAnimal({commit}, name) {
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
