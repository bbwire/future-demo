<template>
  <div>{{title}}</div>
</template>

<script>
// import { ref } from "vue";
export default {
  head() {
    return {
      title: 'Loans',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Future Link nuxt practice demo'
        }
      ]
    }
  },
  setup () {
    const title = 'Loans page'

    return { title }
  }
}
</script>