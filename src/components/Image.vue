<template>
    <div class="mod-image" :class="rVertical">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide">
                <div class="hd">
                    <img :src="slide.url" :alt="slide.title" @click="toggle">
                </div>
                <div class="bd" id="description">
                    <p class="title">{{slide.title}}</p>
                    <p class="description">{{slide.description}}</p>
                    <p class="sub">
                        <i class="iconfont">&#xe636;</i>
                        {{getFormatDate(slide.enddate)}}
                    </p>
                    <p class="sub">
                        <i class="iconfont">&#xe6eb;</i>
                        {{slide.attribute}}
                    </p>
                    <p class="sub">
                        <i class="iconfont">&#xe6d0;</i>
                        {{slide.copyright}}
                    </p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'app',
    data() {
        return {
            count: 0,
            isVertical: 'horizontal',
            swiperOption: {
                notNextTick: true,
                autoplay: false,
                direction: 'horizontal',
                setWrapperSize: true,
                mousewheelControl: true,
                observeParents: true,
                onSlideChangeEnd: swiper => {
                    if(this.swiperSlides.length > 5){
                        swiper.removeSlide(0);//限制节点数量
                    }
                    this.count++;
                }
            },
            swiperSlides: []
        }
    },
    created() {
        for (let i = 0; i < 2; i++) {
            this.getImage();
        }
        this.getOrientation();
    },
    components: {
        swiper,
        swiperSlide
    },
    watch: {
        //监听count变化触发swiper回调
        count(val, oldVal) {
            this.getImage();
        }
    },
    computed: {
        //返回横竖屏状态
        rVertical() {
            return this.$store.state.status.isVertical;
        }
    },
    mounted() {

    },
    methods: {
        //获取图片
        getImage(callback) {
            const that = this;
            this.jsonp('https://bing.ioliu.cn/v1/rand?type=json', null, function (err, data) {
                if (err) {
                    console.error(err.message)
                } else {
                    that.$data.swiperSlides.push(data.data);
                }
            });
        },
        //获取旋转屏幕角度
        getOrientation(e) {
            const that = this;
            if ('orientation' in screen) {
                if (screen.orientation.angle == 0 || screen.orientation.angle == -180) {
                    that.$store.state.status.isVertical = 'vertical';
                } else {
                    that.$store.state.status.isVertical = 'horizontal';
                }
                screen.orientation.addEventListener("change", function (e) {
                    if (screen.orientation.angle == 0 || screen.orientation.angle == -180) {
                        that.$store.state.status.isVertical = 'vertical';
                    } else {
                        that.$store.state.status.isVertical = 'horizontal';
                    }
                }, false);
            } else {
                window.addEventListener('orientationchange', function (event) {
                    if (window.orientation == 180 || window.orientation == 0) {
                        that.$store.state.status.isVertical = 'vertical';
                    }
                    if (window.orientation == 90 || window.orientation == -90) {
                        that.$store.state.status.isVertical = 'horizontal';
                    }
                });
            }
        },
        //开启全屏模式
        viewFullScreen() {
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
        cancelFullScreen() {
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
        getFormatDate(date) {
            let temp_date = String(date);
            let y = temp_date.split('').splice(0, 4).join('');
            let m = temp_date.split('').splice(4, 2).join('');
            let d = temp_date.split('').splice(6, 2).join('');
            return y + '-' + m + '-' + d;
        },
        //横屏收起描述
        toggle() {
            if (that.$store.state.status.isVertical === 'horizontal') {
                let $description = document.getElementById('description');
                $description.style.bottom = $description.style.bottom == 0 || $description.style.bottom == '0px' ? -$description.offsetHeight + 'px' : 0;
            }
        }
    }
}
</script>

<style lang="scss" scope>
.mod-image {
    position: relative;
    overflow: hidden;
    height: 100%;
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
    }
    &.horizontal {
        .bd {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 10px;
            width: 100%;
            color: #fff;
            font-size: 14px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background: rgba(1, 1, 1, 0.5);
            -webkit-transition: bottom 600ms ease-in-out;
            transition: bottom 600ms ease-in-out;
            font-size: 14px;
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
    }
}
</style>
