<template>
  <select
    :value="value"
    class="mt-1 block form-select text-sm py-1 px-2 pr-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
  >
    <option @click="$emit('select', choice)" v-for="choice of choices" :key="choice">{{choice}}</option>
  </select>
</template>

<script>
export default {
  name: "c-select",
  props: ["value", "choices"]
};
</script>
