<template>
  <div>

    <div>
      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class="px-4 py-4">
          <f-table :headers="headers" :data="customers" fclass="full-width" />
          {{list}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { FTable } from '~/components/helpers'
export default {
  head() {
    return {
      title: 'Customers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Future Link nuxt practice demo'
        }
      ]
    }
  },
  name: 'customers',
  components: {
    FTable
  },
  data: () => ({
    headers: [
      {title: 'Name', value: 'name'},
      {title: 'Email', value: 'email'},
      {title: 'Phone', value: 'phone'},
      {title: 'Location', value: 'location'},
    ],
    name: "Bwire"
  }),
  computed: {
    customers () {
      return this.$store.state.customers.list
    },
    ...mapState('customers', ['list'])
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>