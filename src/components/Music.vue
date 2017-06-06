<template>
  <div class="mod-music">
    <audio :src="music.src" preload controls></audio>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        music: this.$store.state.music
      }
    },
    //实例化后调用
    created: function() {
      this.getMusicList()
    },
    methods: {
      //获取用户歌单
      getMusicList: function(){
        this.$http.get('https://www.easy-mock.com/mock/5936806691470c0ac10532a3/random/playlist?id=434437070')
        .then(response => {
          const result = response.data.playlist;
          result.tracks.forEach((e) => {
            this.$store.state.music_arr.push(e.id);
          })
          console.log(this.$store.state.music_arr)
        })
        .catch(error => {
          throw('获取用户歌单失败'+error);
        });
      }
    }
  }
</script>

<style lang="scss" scope>
  
</style>
