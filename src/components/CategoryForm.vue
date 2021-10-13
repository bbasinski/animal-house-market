<template>
  <form-panel title="Dodaj kategorię" button="Dodaj" @submit="submitCategory">
    <text-input label="Nazwa"
                placeholder="Podaj nazwę kategorii"
                :state="state"
                :error-text="errorText"
                v-model="name"/>
  </form-panel>
</template>

<script>
import FormPanel from "@/components/FormPanel";
import TextInput from "@/components/Inputs/TextInput";
import {mapActions} from "vuex";

export default {
  name: "CategoryForm",
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
      'addCategory'
    ]),
    submitCategory() {
      if (!this.name.trim().length) {
        this.setError()
        return;
      }

      this.addCategory(this.name);
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
