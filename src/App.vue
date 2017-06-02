<template>
  <div id="app">
    <div class="hd">
      <h1 class="title">{{data.title}}</h1>
      <p class="author">{{data.author}}</p>
    </div>
    <div class="bd">
      <p v-html="data.content"></p>
    </div>
    <div class="ft">
      <button @click="getArticle" class="random">随机</button>
    </div>
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
      this.getArticle();
    },
    methods: {
      //请求随机文章
      getArticle: function() {
        this.$http.get('https://interface.meiriyiwen.com/article/random?dev=1')
          .then(response => {
            const result = response['data']['data'];
            this.$data.data = result;
            window.scroll(0, 0);
          })
          .catch(error => {
            thorw('请求随机文章失败' + error);
          });
      }
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
  
  .hd .title {
    margin: 80px 30px 0;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
  }
  
  .hd .author {
    padding-top: 20px;
    color: #666;
    text-align: center;
  }
  
  .bd {
    margin: 30px;
  }
  
  .bd p {
    margin-bottom: 10px;
    text-indent: 2em;
    line-height: 1.8;
    color: #757575;
  }
  
  .ft .random {
    display: block;
    margin: 30px auto;
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    outline: none;
    border: none;
    font-size: 16px;
    background-color: #ec4043;
    color: #fff;
  }
</style>
