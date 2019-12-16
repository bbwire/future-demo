<template>
  <div>
    <table :class="fclass">
      <tr>
        <template v-for="item in headers">
          <th :key="item.title">{{item.title}}</th>
        </template>
      </tr>
      <tbody>
        <template v-for="item in data">
          <tr :key="item.name">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.location}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'f-table',
  props: {
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    actionColumn: {
      type: Boolean,
      default: false,
      required: false
    },
    fclass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
