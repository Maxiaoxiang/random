<template>
  <div id="app" class="app" :class="rVertical">
    <mod-header></mod-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <mod-footer></mod-footer>
  </div>
</template>
<script>
import header from './components/Header.vue';
import footer from './components/Footer.vue';
export default {
  components: {
    'mod-header': header,
    'mod-footer': footer
  },
  computed: {
    //返回横竖屏状态
    rVertical() {
      return this.$store.state.status.isVertical;
    }
  },
}
</script>

<style lang="scss" scope>
html {
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

.container {
  padding-top: 60px;
}

.app {
  &.horizontal {
    .header {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .container {
      padding-top: 0;
    }
  }
}
</style>
