<template>
  <form-panel title="Dodaj domek" button="Dodaj" @submit="submitHouse">
    <text-input label="Nazwa domku"
                placeholder="Podaj nazwę domku"
                v-model="name"
                :state="state.name.state"
                :error-text="state.name.errorText"
    ></text-input>
    <number-input label="Cena"
                  placeholder="Podaj cenę domku"
                  v-model.number="price"
                  :state="state.price.state"
                  :error-text="state.price.errorText"
    ></number-input>
    <select-input label="Kategoria"
                  empty-text="Dodaj najpierw kategorie"
                  :options="categoriesOptions"
                  v-model="category"
                  :state="state.category.state"
                  :error-text="state.category.errorText"
    ></select-input>
    <select-input label="Zwierzę"
                  empty-text="Dodaj najpierw zwierzę"
                  :options="animalsOptions"
                  v-model="animal"
                  :state="state.animal.state"
                  :error-text="state.animal.errorText"
    ></select-input>
  </form-panel>
</template>

<script>
import SelectInput from "@/components/Inputs/SelectInput";
import TextInput from "@/components/Inputs/TextInput";
import NumberInput from "@/components/Inputs/NumberInput";
import FormPanel from "@/components/FormPanel";
import {mapActions, mapState} from "vuex";

export default {
  name: "HouseForm",
  components: {SelectInput, TextInput, NumberInput, FormPanel},
  data() {
    return {
      name: '',
      price: '',
      category: '',
      animal: '',
      disableValidation: false,
      state: {
        name: {
          errorText: '',
          state: true,
        },
        price: {
          errorText: '',
          state: true,
        },
        category: {
          errorText: '',
          state: true,
        },
        animal: {
          errorText: '',
          state: true,
        },
      }
    };
  },
  methods: {
    ...mapActions([
      'addHouse'
    ]),
    submitHouse() {
      if (!this.name.trim().length) {
        this.setError('name')
        return;
      }

      if (this.price <= 0) {
        this.setError('price', 'Podaj poprawną cenę')
        return;
      }

      if (this.category === '') {
        this.setError('category', 'Wybierz kategorię')
        return;
      }

      if (this.animal === '') {
        this.setError('animal', 'Wybierz zwierzę')
        return;
      }

      this.addHouse({
        name: this.name,
        price: this.price,
        animal: this.animal,
        category: this.category,
      });
      this.clearForm();
    },
    setError(input, message = 'Uzupełnij pole') {
      this.state[input].state = false;
      this.state[input].errorText = message;
    },
    clearError(input) {
      this.state[input].state = true;
      this.state[input].errorText = '';
    },
    clearErrors() {
      Object.keys(this.state).forEach((key) => this.clearError(key));
    },
    clearForm() {
      this.disableValidation = true;

      this.name = '';
      this.price = '';
      this.category = '';
      this.animal = '';

      this.clearErrors();

      //enable validation on next tick
      this.$nextTick(() => {
        this.disableValidation = false;
      })
    },
  },
  computed: {
    ...mapState({
      animals: state => state.animals.animals,
      categories: state => state.categories.categories,
    }),
    categoriesOptions() {
      return this.categories.map((a) => a.name);
    },
    animalsOptions() {
      return this.animals.map((a) => a.name);
    },
  },
  watch: {
    name(newVal) {
      if (this.disableValidation) {
        return;
      }

      newVal.length
          ? this.clearError('name')
          : this.setError('name');
    },
    price(newVal) {
      if (this.disableValidation) {
        return;
      }

      newVal > 0
          ? this.clearError('price')
          : this.setError('price', 'Podaj poprawną cenę');
    },
    category(newVal) {
      if (this.disableValidation) {
        return;
      }

      newVal.length
          ? this.clearError('category')
          : this.setError('category', 'Wybierz kategorię');
    },
    animal(newVal) {
      if (this.disableValidation) {
        return;
      }

      newVal.length
          ? this.clearError('animal')
          : this.setError('animal', 'Wybierz zwierzę');
    },

  },
}
</script>

<style scoped>

</style>
