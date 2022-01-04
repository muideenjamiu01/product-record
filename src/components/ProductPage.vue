<template>
  <div class="single-product">
    <div v-if="loaded">
      <h3>Product details</h3>
      <div class="card">
        <div class="card-header">header</div>
        <div class="card-body">
          <p>ID: {{ $route.params.productId }}</p>
          <p>Product Name: {{ $route.params.productName }}</p>
          <p>Product Price: ${{ $route.params.productPrice }}</p>
          <!-- <button class="btn btn-success">Buy Now</button> -->
          <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Loading...</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductPage",
  data() {
    return {
      productId: "",
      productName: "",
      productPrice: "",
      loaded: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
