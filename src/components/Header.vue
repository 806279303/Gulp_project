<template>
  <div class="order-header">
    <div class="logo"></div>
    <ul>
        <li>
            <router-link to="/" exact>首页</router-link>
        </li>
        <li>
            <router-link to="/commodity" exact>商品</router-link>
        </li>
        <li>
            <router-link to="/container" exact>订单</router-link>
        </li>
        <li>
            <router-link to="/about" exact>关于</router-link>
        </li>
        <li>
            <router-link to="/games" exact>游戏</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'order-header',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-header{
    width: 900px;
    height: 50px;
    background-color: blueviolet;
    margin:0 auto;
}
.order-header .logo{
    width: 50px;
    height: 100%;
    background-color: brown;
    float: left;
}
.order-header ul{
    height: 100%;
    float: left;
    line-height: 50px;
}
.order-header ul li{
    display: inline-block;
    height: 100%;
    cursor: pointer;
}
.order-header ul li a{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 0 20px 0 20px;
}
.order-header ul li:hover{
    background-color: brown;
}
</style>
