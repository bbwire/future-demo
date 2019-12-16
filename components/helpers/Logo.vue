<template>
  <div :class="fclass">
    <!-- <i class="material-icons mr-2">menu</i> -->
    <!-- <f-icon name="users" /> -->
    <span class="fs-18">Savings Plus</span>
  </div>
</template>

<script>
import FIcon from './Icon.vue';
export default {
  name: 'f-logo',
  props: {
    fclass: {
      type: String,
      default: '',
      required: false
    }
  },
  components: {
    FIcon
  }
}
</script>