<template>
  <div>

    <div>
      Savings {{savings}}
    </div>
  </div>
</template>

<script>
import { FHeader, FSidebar } from '~/components/common'
export default {
  head() {
    return {
      title: 'Savings',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Future Link nuxt practice demo'
        }
      ]
    }
  },
  name: 'savings',
  components: {
    FHeader,
    FSidebar
  },
  computed: {
    savings () {
      return this.$store.state.savings.list
    }
  }
}
</script>