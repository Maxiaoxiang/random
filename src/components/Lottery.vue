<template>
    <div class="mod-lottery">
        <div class="hd">
            <div class="lottery">
                <span v-for="lottery in data.lotterys" :key="lottery">{{lottery}}</span>
                <span v-if="data.blue" class="blue-ball">{{data.blue}}</span>
            </div>
        </div>
        <div class="bd">
            <button @click="random" class="random">随机</button>
        </div>
        <div class="ft"></div>
    </div>
</template>

<script>

(function () {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = (callback, element) => {
        let currTime = new Date().getTime();
        let timeToCall = Math.max(0, 16 - (currTime - lastTime));
        let id = window.setTimeout(() => {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = (id) => {
        clearTimeout(id);
    };
}());

export default {
    name: 'app',
    data() {
        return {
            data: {
                base_arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                lotterys: [],
                blue: ''
            }
        }
    },
    created() {
        this.randomStart();
    },
    methods: {
        //随机开始
        randomStart() {
            let temp = JSON.parse(JSON.stringify(this.data.base_arr));
            let seven = JSON.parse(JSON.stringify(this.shuffle(temp, 8)));
            let blue = JSON.parse(JSON.stringify(this.shuffle(seven, 1)));
            this.data.lotterys = seven;
            this.data.blue = blue[0];
            requestAnimationFrame(this.randomStart);
        },
        //随机结束取值
        random() {
            const that = this;
            cancelAnimationFrame(this.randomStart);
        },
        /**
         * 洗牌算法 
         * arr 数组
         * count 取出个数
         */
        shuffle(arr, count) {
            let len = arr.length;
            let c = count || len;
            arr.forEach((value, i) => {
                let randomIndex = Math.floor(Math.random() * (len - i) + i);
                let tmp = arr[i];
                arr[i] = arr[randomIndex];
                arr[randomIndex] = tmp;
            });
            return arr.splice(0, c);
        },
        //冒泡排序
        bubble(arr) {
            arr.forEach((value, i) => {
                arr.forEach((v, j) => {
                    if (arr[j] > arr[j + 1]) {
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                });
            });
            return arr;
        }
    }
}
</script>

<style lang="scss" scope>
.mod-lottery {
    .hd {
        margin-top: 30px;
        padding: 0 15px;
        .lottery {
            display: -webkit-flex;
            display: flex;
            justify-content: space-around;
            align-items: center;
        } // span {
        //     width: 40px;
        //     height: 40px;
        //     line-height: 40px;
        //     text-align: center;
        //     color: #fff;
        //     background-color: #c90000;
        //     border-radius: 50%;
        //     &.blue-ball {
        //         background-color: #0084f4;
        //     }
        // }
    }
    .bd {
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
</style>
