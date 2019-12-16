<template>
  <div class="flex">
    <div class="w-1/2">
      <f-logo />
    </div>
    <div class="w-1/2">
      <f-header-right />
    </div>
  </div>
</template>

<script>
import { FLogo, FHeaderRight } from '~/components/helpers'
export default {
  name: 'f-header',
  components: {
    FLogo,
    FHeaderRight
  }
}
</script>