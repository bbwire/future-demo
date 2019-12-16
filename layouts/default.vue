<template>
  <div id="app">
    <f-header class="header" />
    <div class="flex mb-4">
        <div class="w-1/5 px-3 pb-3 sidebar">
          <f-sidebar />
        </div>

        <div class="w-3/4 px-4 pt-4">
          <nuxt />
        </div>
    </div>
  </div>
</template>

<script>

import { FHeader, FSidebar } from '~/components/common'

export default {
  head() {
    return {
      titleTemplate: '%s - Future link demo',
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
    FHeader,
    FSidebar
  }
}

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
