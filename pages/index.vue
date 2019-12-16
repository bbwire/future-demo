<template>
  <div>
    <div>

          <div class="flex">

            <div class="w-full px-4">

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <bar-chart id="bar" 
              :data="population" 
              xkey="countryiso3code" 
              ykeys='["value"]' 
              labels='["Pop."]'
              resize="true" 
              bar-colors='[ "#36A2EB" ]'
              grid="true" 
              grid-text-weight="bold">
            </bar-chart>
            
          </div>

        </div>

          </div>
          
          <div class="flex">
            <div class="w-1/2 px-4">

              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <f-button text="Click me"> Plain button </f-button> 
                      
              </div>

            </div>

            <div class="w-1/2 px-4">

              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <!-- <f-input v-model="text" /> -->
                <phone-input v-model="phone" placeholder="Enter phone number" />
                {{phone}}
              </div>

            </div>

            
          </div>
          
        </div>
      
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import { FButton, FInput } from '~/components/helpers'
import { BarChart } from 'vue-morris'
import PhoneInput from '~/components/helpers/PhoneInput'

export default {
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A Future Link nuxt practice demo'
        }
      ]
    }
  },
  components: {
    FButton,
    FInput,
    BarChart,
    PhoneInput
  },
  data: () => ({
    data: [],
    namex: 'Bwiress',
    phone: '256783211233',
    
  }),
  created () {
    this.getPopulationData()
  },
  computed: {
    formatted () {
      return this.phone.replace(/\D/g,'')
    },
    text: {
      get () {
        return this.name
      },
      set (value) {
        this.updateName(value);
      }
    },
    ...mapState('customers', ['name', 'population'])
  },
  methods: {
    ...mapMutations('customers', ['updateName']),
    ...mapActions('customers', ['getPopulationData'])
  },
  mounted () {
    //
  }
}
</script>

<style>

</style>
