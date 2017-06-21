<template>
  <div id="app">
    <mod-header></mod-header>
    <router-view></router-view>
  </div>
</template>
<script>
import header from './components/Header.vue';
export default {
  components: {
    'mod-header': header
  }
}
</script>

<style lang="scss" scope>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #f3f3f3;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  font-weight: normal;
}
</style>
