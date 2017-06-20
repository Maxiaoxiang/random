<template>
  <div class="mod-image" :class="isVertical ? 'vertical' : 'transverse'">
    <div class="hd">
      <img :src="data.url" :alt="data.title" @click="toggle">
    </div>
    <div class="bd" id="description">
      <p class="title">{{data.title}}</p>
      <p class="description">{{data.description}}</p>
      <p class="sub">
        <i class="iconfont">&#xe636;</i>
        {{getFormatDate(data.enddate)}}
      </p>
      <p class="sub">
        <i class="iconfont">&#xe6eb;</i>
        {{data.attribute}}
      </p>
      <p class="sub">
        <i class="iconfont">&#xe6d0;</i>
        {{data.copyright}}
      </p>
    </div>
    <div class="ft">
      <button @click="getImage" class="random" id="random">随机</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      data: '',
      isVertical: true
    }
  },
  created: function () {
    this.getImage();
    this.getOrientation();
  },
  methods: {
    //获取图片
    getImage: function () {
      const that = this;
      this.jsonp('https://bing.ioliu.cn/v1/rand?type=json', null, function (err, data) {
        if (err) {
          console.error(err.message)
        } else {
          that.$data.data = data.data;
        }
      });
    },
    //获取旋转屏幕角度
    getOrientation: function (e) {
      const that = this;
      if ('orientation' in screen) {
        if (screen.orientation.angle == 0 || screen.orientation.angle == -180) {
          that.$data.isVertical = true;
          that.cancelFullScreen();
        } else {
          that.$data.isVertical = false;
          that.viewFullScreen();
        }
        screen.orientation.addEventListener("change", function (e) {
          if (screen.orientation.angle == 0 || screen.orientation.angle == -180) {
            that.$data.isVertical = true;
            that.cancelFullScreen();
          } else {
            that.$data.isVertical = false;
            that.viewFullScreen();
          }
        }, false);
      } else {
        window.addEventListener('orientationchange', function (event) {
          if (window.orientation == 180 || window.orientation == 0) {
            that.$data.isVertical = true;
            that.cancelFullScreen();
          }
          if (window.orientation == 90 || window.orientation == -90) {
            that.$data.isVertical = false;
            that.viewFullScreen();
          }
        });
      }
    },
    //开启全屏模式
    viewFullScreen: function () {
      var docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
    },
    //关闭全屏模式
    cancelFullScreen: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },
    //格式化日期
    getFormatDate: function (date) {
      let temp_date = String(date);
      let y = temp_date.split('').splice(0, 4).join('');
      let m = temp_date.split('').splice(4, 2).join('');
      let d = temp_date.split('').splice(6, 2).join('');
      return y + '-' + m + '-' + d;
    },
    //横屏收起描述
    toggle: function () {
      if (this.$data.isVertical === false) {
        let $description = document.getElementById('description');
        let $random = document.getElementById('random');
        if ($description.style.bottom == 0 || $description.style.bottom == '0px') {
          $description.style.bottom = -$description.offsetHeight + 'px';
          $random.style.right = -($random.offsetWidth + 20) + 'px';
        } else {
          $description.style.bottom = 0;
          $random.style.right = 20 + 'px';
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
.mod-image {
  position: relative;
  overflow: hidden;
  .hd {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &.vertical {
    .bd {
      padding: 15px;
      color: #666;
      .title {
        padding-bottom: 15px;
        text-align: center;
        font-size: 18px;
        border-bottom: 1px solid #e1e1e1;
      }
      .description {
        margin-top: 15px;
        line-height: 2;
        text-indent: 2em;
      }
      .sub {
        margin-top: 10px;
        font-size: 14px;
        i {
          margin-right: 5px;
        }
      }
    }
    .ft {
      .random {
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
    }
  }
  &.transverse {
    .bd {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 10px;
      width: 100%;
      color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      background: rgba(1, 1, 1, 0.5);
      transition: bottom 600ms ease-in-out;
      .title {
        display: none;
      }
      .description {
        text-indent: 2em;
        line-height: 1.5;
      }
      .sub {
        margin-top: 5px;
      }
    }
    .ft {
      .random {
        position: absolute;
        top: 20px;
        right: 20px;
        display: block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 16px;
        background: rgba(1, 1, 1, 0.5);
        color: #fff;
        transition: right 600ms ease-in-out;
      }
    }
  }
}
</style>
