<template>
  <div class="order-games">
    <h1>小目标列表</h1>
    <h3>添加小目标</h3>
    <input class="addText" type="text" placeholder="输入小目标后，按回车确认" @keyup.13="addList" v-model="addText">
    <p>共有{{prolist.length}}个目标,{{noend==0?"全部完成了":'已完成'+(prolist.length-noend)+'，还有'+noend+'个未完成'}}</p>
    <p>
        <input type="radio" name="chooseType" checked="true" @click="chooseList(1)"><label>所有目标</label>
        <input type="radio" name="chooseType" @click="chooseList(2)"><label>已完成目标</label>
        <input type="radio" name="chooseType" @click="chooseList(3)"><label>未完成目标</label>
    </p>
    <ul>
        <li class="li1" v-for="(list,index) in newList" v-bind:key="list.name" :class="{'editing':curIndex===index}">
            <div>
                <span class="type-span" @click="list.status = !list.status" :class="{'status-end':list.status}"></span>
                <span class="text1" v-rainbow @dblclick="curIndex=index">{{list.name | touppercase}}</span>
                <span class="close" @click="deleteList(index)">X</span>
            </div>
            <input type="text" class="text2" v-model="list.name" @keyup.esc="cancelEdit(list)" @blur="edited" @focus="editBefore(list.name)" @keyup.enter="edited" v-focus/>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'order-games',
  data () {
    return {
        blog:{},
        addText:'',
        curIndex:'',
        beforeName:'',
        prolist:[
            {name:'HTML5',status:false},
            {name:'css3',status:false},
            {name:'vue',status:false},
            {name:'react',status:false},
        ],
        newList:[]
    }
  },
  computed:{
      noend:function(){
          return this.prolist.filter(function(item){return !item.status}).length;
      }
  },
  filters:{
      "touppercase":function(v){
          return v.toUpperCase();
      }
  },
  directives:{
      "rainbow":{
          bind(el,bind,vnode){
              el.style.fontWeight = 'bold';
              el.style.color = '#' + Math.random().toString(16).slice(2,8);
          }
      },
      "focus":{
          update(el){
              el.focus();
          }
      }
  },
  methods:{
    addList(){
        this.prolist.push({
            name:this.addText,
            status:false
        })
        this.addText = ""
    },
    chooseList(type){
        switch(type){
            case 1: this.newList = this.prolist;break;
            case 2: this.newList = this.prolist.filter(function(item){return item.status});break;
            case 3: this.newList = this.prolist.filter(function(item){return !item.status});break;
        }
    },
    deleteList(index){
        this.prolist.splice(index,1);
        this.newList = this.prolist;
    },
    editBefoere(name){
        this.beforeName = name;
    },
    edited(){
        this.curIndex = "";
    },
    cancelEdit(val){
        val.name = this.beforeName;
        this.curIndex = "";
    }

  },
  mounted(){
      this.newList = this.prolist
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => {
          var bt = data.json()
          console.log(bt)
          bt = JSON.stringify(bt)
          console.log(bt)
          this.data = data.body[0].id
        //   console.log(this.data)
          return
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    text-align: center;
}
p{
    margin: 10px auto;
    /* margin-left: 10px; */
}
p,ul,h3,h1{
    min-width: 900px;
}
.addText{
    width: 260px;
    height: 30px;
    border: 1px solid darksalmon;
    font-size: 16px;
    outline: none;
    margin:15px auto;
}
.order-games{
    width: 900px;
    margin:0 auto;
    background-color: azure;
}
.type-span{
    width: 15px;
    height: 15px;
    background-color: aquamarine;
    display: inline-block;
    line-height: 30px;
    margin-left: 10px;
}
.status-end{
    background-color: blueviolet;
}
.close{
    float: right;
    margin-right: 40px;
    cursor: pointer;
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: beige;
    text-align: center;
    line-height: 20px;
    margin-top: 5px;
    font-weight: bold;
}
li{
    position: relative;
    list-style: none;
}
li div{
    display: block;
    min-width:340px;
    max-width: 340px;
    height: 30px;
    border:2px solid rgba(0, 0, 0, 0);
    line-height: 30px;
}
li div:hover{
    border:2px solid deeppink;
}
li div .text1{
    margin-left:10px;
}
p input{
    margin-left: 6px;
    margin-right: 3px;
}
li .text2{
    display: none;
    position: absolute;
    height: 100%;
    min-width: 200px;
    border:2px solid deeppink;
    top: 0;
    left: 0;
    display: none;
}
.editing div{
    display: none;
}
.editing .text2{
    display: block;
}
</style>
