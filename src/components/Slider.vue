<template>
    <div class="mod-slider">
        <div class="slider-container">
            <div class="slider-wrapper" :style="rStyle" @touchstart="start" @touchmove="move" @touchend="end">
                <div class="slider-item" v-for="slide in slides" :style="slide.style">{{slide}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'slider',
    data() {
        return {
            data: {
                
            },
            slides: [1, 2, 3, 4, 5]
        }
    },
    created() {
        
    },
    computed: {
        rStyle() {

        }
    },
    methods: {
        start(e) {
            
        },
        move(e) {

        },
        end(e) {

        }
    }
}
</script>
<style lang="scss" scope>
.mod-slider {
    .slider-container {
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 300px;
        overflow: hidden;
        z-index: 1;
    }
    .slider-wrapper {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        transition-property: transform;
        box-sizing: content-box;
    }
    .slider-item {
        position: relative;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        background-color: #ccc;
        text-align: center;
        line-height: 300px;
    }
}
</style>
