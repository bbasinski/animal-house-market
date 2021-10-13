import moment from "moment";
moment.locale('pl');

const state = {
  houses: []
};

const actions = {
  addHouse({commit}, house) {
console.log(house)
    commit('ADD_HOUSE', {
      name: house.name,
      category: house.category,
      animal: house.animal,
      price: house.price,
      dateAdd: moment().format('LLL'),
    });
  }
};

const mutations = {
  ADD_HOUSE(state, animal) {
    state.houses.push(animal);
  }
};

export default {
  state, actions, mutations
};
