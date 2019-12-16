<template>
  <input 
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
    :type="type" 
    :placeholder="placeholder"
    :class="fclass"
    :value="value"
    ref="textInput"
    @input="updateInput()"
  >
</template>

<script>
export default {
  name: 'f-input',
  props: {
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: 'Enter text',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: true
    },
    fclass: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    updateInput () {
      this.$emit('input', this.$refs.textInput.value)
    }
  }
}
</script>