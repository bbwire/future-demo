<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href': '/assets/sprite.feathericon.svg#'+name}"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    }
  }
}
</script>