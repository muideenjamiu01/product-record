<template>
  <div class="products">
    <h3>Products</h3>

    <div class="card">
      <div class="card-header">Add a new product</div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>ID</label>
            <input
              v-model="productData.product_id"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="productData.product_name"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="productData.product_price"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">Product List</div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in sortedProducts" :key="product.id">
                <template v-if="editId == product.id">
                  <td>
                    <input v-model="editProductData.product_id" type="text" />
                  </td>
                  <td>
                    <input v-model="editProductData.product_name" type="text" />
                  </td>
                  <td>
                    <input
                      v-model="editProductData.product_price"
                      type="text"
                    />
                  </td>
                  <td>
                    <span class="icon">
                      <i @click="onEditSubmit(index)" class="fa fa-check"></i>
                    </span>
                    <span class="icon">
                      <i @click="onCancel" class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>
                <template v-else>
                  <td>
                    {{ product.product_id }}
                  </td>
                  <td>
                    {{ product.product_name }}
                  </td>
                  <td>
                    {{ product.product_price }}
                  </td>
                  <td>
                    <a href="#" class="icon">
                      <i
                        v-on:click="onDelete(product.id)"
                        class="fa fa-trash"
                      ></i>
                    </a>
                    <a href="#" class="icon">
                      <i v-on:click="onEdit(product)" class="fas fa-edit"></i>
                    </a>
                    <router-link
                      :to="{
                        name: 'ProductPage',
                        params: { id: product.id, productId:product.product_id, productName: product.product_name, productPrice: product.product_price},
                      }"
                      class="icon"
                    >
                      <i class="far fa-eye"></i>
                    </router-link>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      editId: "",
      id: Number,
      productData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: "",
      },
      editProductData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: "",
      },
      products: [
        {
          id: "1",
          product_id: "100",
          product_name: "chocolate",
          product_price: "50",
        },
        {
          id: "2",
          product_id: "101",
          product_name: "bread",
          product_price: "100",
        },
      ],
    };
  },

  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id;
      });
    },
  },
  methods: {
    onSubmit() {
      const data = {
        product_id: this.productData.product_id,
        product_name: this.productData.product_name,
        product_price: this.productData.product_price,
      };

      this.products.push(data);
    },

    onDelete() {
      this.products.splice(this.id, 1);
    },
    onEdit(product) {
      this.editId = product.id;
      this.editProductData.product_id = product.product_id;
      this.editProductData.product_name = product.product_name;
      this.editProductData.product_price = product.product_price;
    },
    onCancel() {
      this.editId = "";
      this.editProductData.product_id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_price = "";
    },

    onEditSubmit(index) {
      this.products[index].product_name = this.editProductData.product_name;
      this.products[index].product_price = this.editProductData.product_price;
      this.products[index].product_id = this.editProductData.product_id;
      this.editId = "";
      this.editProductData.product_id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_price = "";
    },
  },
};
</script>
<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
</style>
