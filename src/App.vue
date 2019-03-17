<template>
  <div id="app">
    <order-header></order-header>
    <router-view></router-view>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from './components/Header'
import OrderContainer from './components/Container'
import OrderCommodity from './components/Commodity'
import OrderFooter from './components/Footer'
import OrderAbout from './components/About'
import OrderGame from './components/Games'

export default {
  name: 'App',
  components: {
    OrderHeader, OrderContainer, OrderFooter, OrderAbout, OrderGame, OrderCommodity
  }
}
</script>

<style>
*{
  padding: 0;
  margin:0;
}
</style>
