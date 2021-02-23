<template>
  <div id="app">
    <mainMenu />
    <router-view />
  </div>
</template>

<script>
import mainMenu from '@/components/mainMenu.vue'
export default {
  name: 'App',
  components: {
    mainMenu
  }
}
</script>

