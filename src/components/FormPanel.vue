<template>
  <form class="w-full max-w-lg bg-gray-100 rounded-2xl p-5">
    <h1>{{ title }}</h1>

    <div class="flex flex-wrap -mx-3 mb-6">
     <slot></slot>
    </div>
    <div class="flex justify-end">
      <button @click="$emit('submit')"
              type="button"
              class="bg-green-200 rounded px-3 py-2 text-sm uppercase font-bold hover:bg-green-300">
        {{ button }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormPanel",
  props: ['title', 'button']

}
</script>

<style scoped>

</style>
