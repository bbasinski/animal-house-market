<template>
  <form-panel title="Dodaj zwierzę" button="Dodaj" @submit="submitAnimal">
    <text-input label="Nazwa"
                placeholder="Podaj nazwę zwierzęcia"
                :state="state"
                :error-text="errorText"
                v-model="name"/>
  </form-panel>
</template>

<script>
import TextInput from "@/components/Inputs/TextInput";
import {mapActions} from "vuex";
import FormPanel from "@/components/FormPanel";

export default {
  name: "AnimalForm",
  components: {FormPanel, TextInput},
  data() {
    return {
      name: '',
      errorText: '',
      state: true,
      disableValidation: false,
    }
  },
  methods: {
    ...mapActions([
      'addAnimal'
    ]),
    submitAnimal() {
      if (!this.name.trim().length) {
        this.setError()
        return;
      }

      this.addAnimal(this.name);
      this.clearForm();
    },
    setError(message = 'Uzupełnij pole nazwa') {
      this.state = false;
      this.errorText = message;
    },
    clearError() {
      this.state = true;
      this.errorText = '';
    },
    clearForm() {
      this.disableValidation = true;

      this.name = '';

      this.clearError();

      //enable validation on next tick
      this.$nextTick(() => {
        this.disableValidation = false;
      })
    },
  },
  watch: {
    name(newVal) {
      if (this.disableValidation) {
        return;
      }

      newVal.length
          ? this.clearError()
          : this.setError();
    }
  }
}
</script>

<style scoped>

</style>
