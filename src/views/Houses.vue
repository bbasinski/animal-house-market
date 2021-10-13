<template>
  <div>
    <house-form/>
    <custom-table :headers="headers" :rows="houses"/>
  </div>
</template>

<script>

import HouseForm from "@/components/HouseForm";
import {mapState} from "vuex";
import CustomTable from "@/components/CustomTable";

export default {
  name: 'Houses',
  components: {CustomTable, HouseForm},
  data() {
    return {
      headers: [
        {
          name: 'Nazwa',
          key: 'name',
          sortable: true,
        },
        {
          name: 'Cena',
          key: 'price',
          sortable: true,
        },
        {
          name: 'Kategoria',
          key: 'category',
          sortable: true,
        },
        {
          name: 'Zwierzę',
          key: 'animal',
          sortable: true,
        },
        {
          name: 'Data dodania',
          key: 'dateAdd',
          sortable: true,
        }
      ]
    };
  },
  computed: {
    ...mapState({
      houses: state => state.houses.houses
    }),
  },
}
</script>
