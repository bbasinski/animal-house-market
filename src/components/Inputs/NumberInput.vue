<template>
  <div class="w-full px-3 mb-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input class="appearance-none block w-full text-gray-700 border  rounded py-3 px-4
      leading-tight focus:outline-none focus:bg-white"
           :class="[state === false && 'border-red-500']"
           :id="id"
           type="number"
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)"
           :placeholder="placeholder">
    <p v-if="state === false && errorText" class="text-red-500 text-xs italic">{{ errorText }}.</p>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: ['id', 'label', 'placeholder', 'state', 'errorText', 'value']
}
</script>

<style scoped>

</style>
