<template>
    <div class="mod-lottery">
        <!--<div class="hd">
                  <input type="text" id="option">
                </div>-->
        <!--<div class="bd">
                  <ul>
                    <li v-for="item in data.items">
                      <div class="item">{{item}}</div>
                    </li>
                  </ul>
                </div>-->
        <div class="ft">
            <button @click="random">随机</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            data: {
                lottery: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
            }
        }
    },
    //实例化后调用
    created: function () {

    },
    methods: {
        //随机
        random: function () {
            let temp = JSON.parse(JSON.stringify(this.data.lottery));
            let seven = JSON.parse(JSON.stringify(this.shuffle(temp, 7)));
            let blue = JSON.parse(JSON.stringify(this.shuffle(seven, 1)));
            this.bubble(seven);
            console.log(seven, blue)
        },
        /**
         * 洗牌算法 
         * arr 数组
         * count 取出个数
         */
        shuffle: function (arr, count) {
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
        bubble: function (arr) {
            arr.forEach((value, i) => {
                arr.forEach((value, j) => {
                    if (arr[j] > arr[j + 1]) {
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                });
            });
            return arr;
        },
        //深拷贝
        copyArr: function (arr) {
            return arr.map((e) => {
                if (typeof e === 'object') {
                    return Object.assign({}, e)
                } else {
                    return e
                }
            })
        }
    }
}
</script>

<style lang="scss" scope>

</style>
