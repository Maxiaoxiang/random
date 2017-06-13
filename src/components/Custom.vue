<template>
  <div class="mod-custom">
    <div class="item">
      <input type="text">
      <div v-for="items in item">{{items.name}}</div>
      <button @click="add">添加</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        data: {
          items: [
          {name: 'mss'},
          {name: 'sis'}
        ]
        }
      }
    },
    //实例化后调用
    created: function() {
      
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scope>
  
</style>
