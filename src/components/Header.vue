<template>
    <div class="mod-header">
        <div class="header">
            <span class="iconfont logo">&#xe66c;</span>
            <div @click="toggle" class="toggle iconfont" :class="returnVertical === 'horizontal'? 'horizontal' : 'vertical'">&#xe646;</div>
            <div class="nav" id="nav">
                <ul>
                    <li v-for="nav in navs" :key="nav">
                        <i class="iconfont" v-html="nav.icon"></i>
                        <router-link :to="nav.link">{{nav.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask" @click="toggle" v-show="!isOpen"></div>
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
        //返回横竖屏状态
        returnVertical() {
            return this.$store.state.status.isVertical;
        }
    },
    methods: {
        //展开收起侧栏导航
        toggle() {
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
    position: relative;
    z-index: 99;
    .header{
        position: relative;
        display: flex;
        align-items: center;
        height: 60px;
        background-color: #303641;
        color: #fff;
        font-size: 14px;
        .logo{
            display: inline-block;
            margin: 0 auto;
            font-size: 40px;
        }
        .toggle{
            position: absolute;
            right: 20px;
            font-size: 28px;
        }
    }
    .nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 120px;
        height: 100%;
        background-color: #303641;
        color: #fff;
        font-size: 14px;
        ul{
            margin-top: 60px;
        }
        li{
            display: block;
            padding-left: 15px;
            height: 50px;
            line-height: 50px;
            box-sizing: border-box;
            i{
                display: inline-block;
                width: 30px;
                text-align: center;
            }
        }
    }
}
</style>
