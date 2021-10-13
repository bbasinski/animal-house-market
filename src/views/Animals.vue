<template>
  <div>
    <animal-form/>
    <custom-table :headers="headers" :rows="animals"/>
  </div>
</template>

<script>
import AnimalForm from "@/components/AnimalForm";
import {mapState} from "vuex";
import CustomTable from "@/components/CustomTable";

export default {
  name: "Animals",
  components: {CustomTable, AnimalForm},
  data() {
    return {
      headers: [
        {
          name: 'Nazwa',
          key: 'name',
          sortable: true,
        },
        {
          name: 'Data dodania',
          key: 'dateAdd',
          sortable: true,
        }
      ],
    }
  },
  computed: {
    ...mapState({
      animals: state => state.animals.animals
    })
  },
}
</script>

<style scoped>

</style>
