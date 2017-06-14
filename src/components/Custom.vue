<template>
  <div class="mod-custom">
    <div class="hd">
      <input type="text" id="option">
      <button @click="add">添加</button>
    </div>
    <div class="bd">
      <ul>
        <li v-for="item in data.items">
          <div class="item">{{item}}</div>
        </li>
      </ul>
    </div>
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
        items: ['mss', 'sis', 'xiaoming', 'xiaolv']
      }
    }
  },
  //实例化后调用
  created: function () {

  },
  methods: {
    //添加随机项目
    add: function () {
      const option = document.getElementById("option");
      if (option.value != '') {
        this.data.items.push(option.value);
        option.value = '';
      }
    },
    //随机
    random: function () {
      let items = this.copyArr(this.data.items);
      //结果数量，结果数量<数组长度&&结果数量>1
      // let c = count || 1;
      if (items.length > 2) {
        console.log(this.shuffle(items, 1));
      } else {
        alert('至少需要两个选项');
      }
    },
    /**
     * 洗牌算法 
     * arr 数组
     * count 取出个数
     */
    shuffle: function (arr, count) {
      let len = arr.length;
      let c = count || len;
      arr.forEach((value,i) => {
        let randomIndex = Math.floor(Math.random() * (len - i) + i);
        let tmp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = tmp;
      });
      return arr.splice(0, c);
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
