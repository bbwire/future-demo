<template>
  <button 
    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    :class="fclass"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: {
      type: String,
      default: 'My button',
      required: true,
    },
    fclass: {
      type: String,
      default: '',
      required: false
    }
  },
}
</script>