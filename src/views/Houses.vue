<template>
  <div>
    <house-form/>
    {{ houses }}
  </div>
</template>

<script>

import HouseForm from "@/components/HouseForm";
import {mapState} from "vuex";

export default {
  name: 'Houses',
  components: {HouseForm},
  computed: {
    ...mapState({
      houses: state => state.houses.houses
    }),
  },
}
</script>
