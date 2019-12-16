<template>
  <div class="phone-input border-2 border-grey-400 rounded bg-white">
    <select 
      @change="onSelectChange"
      ref="country"
      v-model="code"
      class="appearance-none bg-transparent text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="countries"
    >
      <option
        v-for="(country, i) in countries"
        :key="i"
        :value="country.code"
      >
        {{country.title}}
      </option>
    </select>
    <input 
      class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
      type="text" 
      :placeholder="placeholder" 
      v-model="formattedValue"
      ref="phoneInput"
      maxlength="15"
    >
  </div>
</template>

<script>
export default {
  name: 'phone-input',
  props: {
    placeholder: {
      type: Number,
      default: 7
    },
    value: {
      type: String,
      required: true
    },
    countries: {
      type: Array,
      default: [
        {
          title: 'Uganda',
          code: '256',
          flag: 'https://www.countryflags.io/ug/flat/24.png'
        },
        {
          title: 'Kenya',
          code: '254',
          flag: 'https://www.countryflags.io/ke/flat/24.png'
        },
        {
          title: 'Tanzania',
          code: '255',
          flag: 'https://www.countryflags.io/tz/flat/24.png'
        },
      ]
    }
  },
  data: () => ({
    code: '256'
  }),
  created () {
    // this.formattedValue = this.$refs.country.value
  },
  computed: {
    formattedValue: {
      get: function() {
        const orginalVal = this.value ? this.value.replace(/\s/g, '').replace(/(\d{3})/g, '$1 ').trim() : this.code
        return orginalVal
      },
      set: function(modifiedValue) {
          let newValue = modifiedValue.replace(/[^\d\.]/g, "")
          
          this.$emit('input', newValue)
      }
    }
  },
  methods: {
    onSelectChange () {
      const phoneVal = this.$refs.phoneInput.value
      const code = this.$refs.country.value
      
      this.formattedValue = phoneVal ? code + phoneVal.slice(3) : code 
    }
  }
}
</script>

<style scoped>
  .phone-input {
    background: #fff;
  }
</style>