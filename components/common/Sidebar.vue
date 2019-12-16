<template>
  <div>
    <ul class="main-menu">

      <template v-for="item in items">
        <li :key="item.title">
          <nuxt-link :to="item.path">
            <i class="material-icons mr-2 mt-1">{{item.icon}}</i> 
            <span>{{item.title}}</span>
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'f-sidebar',
  data: () => ({
    items: [
      {
        title: 'Home',
        path: '/',
        icon: 'home'
      },
      {
        title: 'Customers',
        path: '/customers',
        icon: 'people'
      },
      {
        title: 'Savings',
        path: '/savings',
        icon: 'attach_money'
      },
      {
        title: 'Loans',
        path: '/loans',
        icon: 'list'
      }
    ]
  })
}
</script>