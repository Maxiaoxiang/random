<template>
  <div class="mod-music">
    <audio :src="music.url" preload id="audio" controls></audio>
    <button @click="play">播放</button>
    <button @click="stop">暂停</button>
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
  created: function () {
    this.getMusicList()
    this.getMusicUrl()
  },
  methods: {
    //获取用户歌单
    getMusicList: function () {
      this.$http.get('https://www.easy-mock.com/mock/5936806691470c0ac10532a3/random/playlist?id=434437070')
        .then(response => {
          const result = response.data.playlist;
          result.tracks.forEach((e) => {
            this.$store.state.music_arr.push(e.id);
          })
        })
        .catch(error => {
          throw ('获取用户歌单失败' + error);
        });
    },
    //获取歌曲
    getMusicUrl: function () {
      this.$http.get('https://www.easy-mock.com/mock/5936806691470c0ac10532a3/random/url')
        .then(response => {
          const result = response.data.data;
          this.$store.state.music.url = result[0].url;
          this.music = this.$store.state.music;
        }).catch(error => {
          throw ('获取歌曲链接失败' + error);
        })
    },
    //播放歌曲
    play() {
      let audio = document.querySelector('#audio');
      if (!this.music.isPlaying) {
        audio.play();
        this.music.isPlaying = true;
      }
    },
    //暂停播放
    stop() {
      let audio = document.querySelector('#audio');
      if (this.music.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }
}
</script>

<style lang="scss" scope>

</style>
