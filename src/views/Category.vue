<template>
  <div>
    <category-form/>
    <custom-table :headers="headers" :rows="categories"/>
  </div>
</template>

<script>
import CategoryForm from "@/components/CategoryForm";
import CustomTable from "@/components/CustomTable";
import {mapState} from "vuex";

export default {
  name: "Category",
  components: {
    CustomTable,
    CategoryForm
  },
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
      categories: state => state.categories.categories
    })
  }
}
</script>

<style scoped>

</style>
