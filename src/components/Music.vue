<template>
  <div class="mod-music">
    音乐
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        data: ''
      }
    },
    //实例化后调用
    created: function() {
      this.getMusice();
    },
    methods: {
      //请求随机音乐
      getMusice: function() {
        
      }
    }
  }
</script>

<style lang="scss" scope>
  
</style>
