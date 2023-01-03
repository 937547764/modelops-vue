<template>
  <div id="app">
    <Menu active-name="1"></Menu>
    <div style="margin-left:140px">
      <router-view />
    </div>

  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
}
body {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
