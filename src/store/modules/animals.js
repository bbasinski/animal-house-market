const state = {
  animals: []
};

const actions = {
  addAnimal({commit}, name) {
    commit('ADD_ANIMAL', {
      name: name,
      dateAdd: new Date(),
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
