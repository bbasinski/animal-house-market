<template>
  <div>
    <animal-form/>
    <div>
      {{ animals }}
    </div>
  </div>
</template>

<script>
import AnimalForm from "@/components/AnimalForm";
import {mapState} from "vuex";

export default {
  name: "Animals",
  components: {AnimalForm},
  computed: {
    ...mapState({
      animals: state => state.animals.animals
    })
  },
}
</script>

<style scoped>

</style>
