<template>
  <form class="w-full max-w-lg bg-gray-100 rounded-2xl p-5">
    <h1>Dodaj zwierzę</h1>

    <div class="flex flex-wrap -mx-3 mb-6">
      <text-input label="Nazwa"
                  placeholder="Podaj nazwę zwierzęcia"
                  :state="state"
                  :error-text="errorText"
                  v-model="name"/>
    </div>
    <div class="flex justify-end">
      <button @click="addAnimal"
              type="button"
              class="bg-green-200 rounded px-3 py-2 text-sm uppercase font-bold hover:bg-green-300">
        Dodaj
      </button>
    </div>
  </form>
</template>

<script>
import TextInput from "@/components/Inputs/TextInput";

export default {
  name: "AnimalForm",
  components: {TextInput},
  data() {
    return {
      name: '',
      errorText: '',
      state: true,
    }
  },
  methods: {
    addAnimal() {
      if (!this.name.length) {
        this.setError()
        return;
      }

      console.log('add')
    },
    setError(message = 'Uzupełnij pole nazwa') {
      this.state = false;
      this.errorText = message;
    },
    clearError() {
      this.state = true;
      this.errorText = '';
    }
  },
  watch: {
    name(newVal) {
      newVal.length
          ? this.clearError()
          : this.setError();
    }
  }
}
</script>

<style scoped>

</style>
