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
html{
    height: 100%;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #f3f3f3;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

h1,
h2 {
  font-weight: normal;
}
</style>
