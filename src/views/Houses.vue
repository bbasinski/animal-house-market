<template>
  <div>
    <house-form/>
    <text-input class="mt-10" label="Wyszukiwarka domków" v-model="search"
                placeholder="Zacznij pisać aby wyszukać"></text-input>
    <custom-table :headers="headers" :rows="housesFiltered"/>
  </div>
</template>

<script>

import HouseForm from "@/components/HouseForm";
import {mapState} from "vuex";
import CustomTable from "@/components/CustomTable";
import TextInput from "@/components/Inputs/TextInput";

export default {
  name: 'Houses',
  components: {TextInput, CustomTable, HouseForm},
  data() {
    return {
      search: '',
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
    housesFiltered() {
      if (!this.search.length) {
        return this.houses;
      }

      const lowerCaseSearch = this.search.toLowerCase()

      return this.houses.filter((house) => {
        return house.name.toLowerCase().includes(lowerCaseSearch)
            || house.animal.toLowerCase().includes(lowerCaseSearch)
            || house.category.toLowerCase().includes(lowerCaseSearch)
            || house.price.toString().includes(lowerCaseSearch)
            || house.dateAdd.toString().includes(lowerCaseSearch)
      })
    }
  },
}
</script>
