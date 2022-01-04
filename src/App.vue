<template>
  <div id="app">
   <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import ProductPage from './components/ProductPage.vue'
// import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    // ProductPage,
    // Products
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
