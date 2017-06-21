<template>
    <div class="mod-header">
        <div @click="toggle" class="toggle iconfont" :class="returnVertical || 'transverse'">&#xe646;</div>
        <div class="mask" @click="toggle" v-show="!isOpen"></div>
        <div class="nav" id="nav">
            <ul>
                <li v-for="nav in navs">
                    <i class="iconfont" v-html="nav.icon"></i>
                    <router-link :to="nav.link">{{nav.name}}</router-link>
                </li>
            </ul>
        </div>
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
            ],
            isOpen: true
        }
    },
    computed: {
        returnVertical: function () {
            return this.$store.state.status.isVertical;
        }
    },
    methods: {
        //展开收起侧栏导航
        toggle: function () {
            const $nav = document.getElementById('nav');
            if (this.$data.isOpen) {
                $nav.style.left = '0px';
                this.$data.isOpen = false;
            } else {
                $nav.style.left = '-120px';
                this.$data.isOpen = true;
            }
        }
    }
}
</script>
<style lang="scss" scope>
.mod-header {
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
    }
    .toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        line-height: 37px;
        color: #fff;
        background: rgba(1, 1, 1, 0.5);
        border-radius: 5px;
        z-index: 997;
        font-size: 28px;
        text-align: center;
        &.transverse{
            right: auto;
            left: 20px;
        }
    }
    .nav {
        position: fixed;
        top: 0;
        left: -120px;
        width: 120px;
        height: 100%;
        color: #fff;
        font-size: 16px;
        background: rgba(1, 1, 1, 0.5);
        z-index: 999;
        transition: left 400ms ease-in-out;
        li {
            position: relative;
            overflow: hidden;
            margin-top: 10px;
            i {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 25px;
                font-size: 18px;
                text-align: center;
            }
            a {
                display: block;
                padding: 10px 0 10px 40px;
            }
        }
    }
}
</style>
