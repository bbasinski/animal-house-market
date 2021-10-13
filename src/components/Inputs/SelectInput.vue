<template>
  <div class="w-full px-3 mb-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <select class="block w-full text-gray-700 border rounded py-3 px-4 bg-white text-black
      leading-tight focus:outline-none focus:bg-white"
            :class="[state === false && 'border-red-500']"
            :id="id"
            v-bind:value="value"
            v-on:change="$emit('input', $event.target.value)">
      <option v-if="options.length" selected disabled value="">Wybierz</option>
      <option v-else selected disabled value="">{{ emptyText }}</option>
      <option v-for="(option, i) in options" :key="i" :value="option.value || option">
        {{ option.text || option }}
      </option>
    </select>

    <p v-if="state === false && errorText" class="text-red-500 text-xs italic">{{ errorText }}.</p>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: ['id', 'label', 'placeholder', 'state', 'errorText', 'value', 'options', 'emptyText']
}
</script>

<style scoped>

</style>
