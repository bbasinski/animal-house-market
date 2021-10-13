<template>
  <table class="table-auto my-10 border-collapse border border-green-800 w-full">
    <thead v-if="headers">
    <tr>
      <th v-for="(header, i) in headers" :key="i" class="border border-green-600 p-2"
          :class="[header.sortable && 'sortable']" @click="toggleSort(header)">
        <div class="flex justify-between">
          <div>
            {{ header.name }}
          </div>
          <div class="flex" v-if="header.sortable">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 fill-current" :class="[sort.key === header.key && sort.asc && 'text-green-600']"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6" :class="[sort.key === header.key && !sort.asc && 'text-green-600']"
                 fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
          </div>
        </div>
      </th>
    </tr>
    </thead>
    <tbody v-if="rows.length">
    <tr v-for="(row, i) in rowsSorted" :key="i">
      <td v-for="(header, i) in headers" :key="i" class="border border-green-600 p-2 text-sm">
        {{ row[header.key] }}
      </td>
    </tr>
    </tbody>
    <tbody v-else>
    <tr>
      <td :colspan="headers.length" class="text-center p-3">Nic tu nie ma :(</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CustomTable",
  props: ['headers', 'rows'],
  data() {
    return {
      sort: {
        key: null,
        asc: false,
      }
    }
  },
  methods: {
    toggleSort(header) {
      if (!header.sortable) {
        return;
      }

      this.sort.key = header.key;
      this.sort.asc = !this.sort.asc;
    },
  },
  computed: {
    rowsSorted() {
      if (!this.sort.key) {
        return this.rows;
      }

      const rows = JSON.parse(JSON.stringify(this.rows));

      return rows.sort((a, b) => {
        let nameA = a[this.sort.key].toLowerCase();
        let nameB = b[this.sort.key].toLowerCase();

        if (nameA < nameB) {
          return this.sort.asc ? -1 : 1;
        }

        if (nameA > nameB) {
          return this.sort.asc ? 1 : -1;
        }

        return 0;
      });
    }
  }
}
</script>

<style scoped>
.sortable {
  @apply cursor-pointer;
}
</style>
