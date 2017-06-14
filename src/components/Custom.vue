<template>
  <div class="mod-custom">
    <div class="hd">
      <input type="text" id="option" class="input" placeholder="请输入选项名称">
      <button @click="add" class="btn">添加</button>
    </div>
    <div class="bd">
      <ul>
        <li v-for="item in data.items">
          <div class="item">{{item}}</div>
          <button @click="del" class="del" v-bind:data-value="item"></button>
        </li>
      </ul>
    </div>
    <div class="ft">
      <button @click="random" class="random">随机</button>
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
    //添加
    add: function () {
      const option = document.getElementById("option");
      if (option.value != '') {
        this.data.items.push(option.value);
        option.value = '';
      }
    },
    //删除
    del: function (event) {
      let value = event.currentTarget.getAttribute('data-value');
      let index = this.data.items.indexOf(value);
      if(index != '-1'){
        this.data.items.splice(index ,1);
      }
    },
    //随机
    random: function () {
      let items = JSON.parse(JSON.stringify(this.data.items));
      //结果数量，结果数量<数组长度&&结果数量>1
      // let c = count || 1;
      if (items.length > 1) {
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
      arr.forEach((value, i) => {
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

<style lang="scss">
.mod-custom {
  .hd {
    display: -webkit-flex;
    display: flex;
    margin-top: 15px;
    padding: 0 15px;
    .input {
      flex-grow: 1;
      padding: 15px;
      outline: none;
      border: 1px solid #e1e1e1;
    }
    .btn {
      margin-left: -1px;
      width: 80px;
      outline: none;
      border: 1px solid #ec4043;
      background-color: #ec4043;
      color: #fff;
    }
  }
  .bd {
    margin-top: 30px;
    padding: 0 15px;
    ul {
      display: -webkit-flex;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    li {
      position: relative;
      margin: 10px 10px 10px 0;
    }
    .item {
      padding: 0 15px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #e1e1e1;
      border-radius: 5px;
      background-color: #fff;
    }
    .del {
      position: absolute;
      top: -6px;
      right: -6px;
      width: 15px;
      height: 15px;
      background-color: #ec4043;
      color: #fff;
      outline: none;
      border: none;
      border-radius: 50%;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      &:before {
        content: "";
        position: absolute;
        top: 7px;
        left: 4px;
        width: 8px;
        height: 2px;
        background-color: #fff;
      }
      &:after {
        content: "";
        position: absolute;
        top: 4px;
        left: 7px;
        width: 2px;
        height: 8px;
        background-color: #fff;
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
</style>
