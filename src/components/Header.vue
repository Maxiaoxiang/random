<template>
    <div class="mod-header">
        <div class="header">
            <span class="iconfont logo">&#xe66c;</span>
            <div @click="toggle" class="toggle iconfont" :class="rVertical === 'horizontal'? 'horizontal' : 'vertical'" v-html="rOpen ? '&#xe646;' : '&#xe643;'"></div>
            <div class="nav" id="nav" :class="rOpen ? 'close' : 'open'">
                <ul>
                    <li v-for="nav in navs" :key="nav">
                        <i class="iconfont" v-html="nav.icon"></i>
                        <router-link :to="nav.link">{{nav.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask" @click="toggle" id="mask" :class="rOpen ? 'close' : 'open'"></div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            data: '',
            navs: [
                { name: '首页', link: '/', icon: '&#xe60b;' },
                { name: '文章', link: '/Article', icon: '&#xe6ac;' },
                { name: '壁纸', link: '/Image', icon: '&#xe601;' },
                { name: '音乐', link: '/Music', icon: '&#xe655;' },
                { name: '美食', link: '/Food', icon: '&#xe650;' },
                { name: '彩票', link: '/lottery', icon: '&#xe654;' },
                { name: '自定义', link: '/Custom', icon: '&#xe602;' },
            ]
        }
    },
    computed: {
        //返回横竖屏状态
        rVertical() {
            return this.$store.state.status.isVertical;
        },
        //返回导航状态
        rOpen() {
            return this.$store.state.status.isOpen;
        }
    },
    methods: {
        //展开收起侧栏导航
        toggle() {
            this.$store.state.status.isOpen = !this.$store.state.status.isOpen;
        }
    }
}
</script>
<style lang="scss" scope>
.mod-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    .header {
        position: relative;
        display: flex;
        align-items: center;
        height: 60px;
        background-color: #303641;
        color: #fff;
        font-size: 14px;
        z-index: 98;
        .logo {
            display: inline-block;
            margin: 0 auto;
            font-size: 30px;
        }
        .toggle {
            position: absolute;
            right: 20px;
            font-size: 28px;
        }
    }
    .nav {
        position: fixed;
        top: 0;
        left: -120px;
        width: 120px;
        height: 100%;
        background-color: #303641;
        color: #fff;
        font-size: 14px;
        z-index: 98;
        -webkit-transition: left 400ms ease-in-out;
        transition: left 400ms ease-in-out;
        overflow-y: auto;
        overflow-x: hidden;
        &.open {
            left: 0;
        }
        &.close {
            left: -120px;
        }
        ul {
            margin-top: 60px;
        }
        li {
            display: block;
            padding-left: 15px;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            i {
                display: inline-block;
                width: 30px;
                text-align: center;
            }
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 97;
        opacity: 0;
        -webkit-transition: opacity 400ms ease-in-out;
        transition: opacity 400ms ease-in-out;
        &.open {
            opacity: 1;
        }
        &.close {
            opacity: 0;
            visibility: hidden;
        }
    }
}
</style>
