<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-center">ID</th>
        <th class="text-center">Name</th>
        <th class="text-center">Description</th>
        <th class="text-center">Price</th>
        <th class="text-center">Status</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="products != 0">
        <tr v-for="(product, index) in products" :key="product.id">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-center">{{ product.name }}</td>
          <td class="text-center">{{ product.description }}</td>
          <td class="text-center">
            ${{ new Intl.NumberFormat("en-us").format(product.price) }}
          </td>
          <td class="text-center">
            <router-link :to="{ path: 'products/edit/' + product.id }">
              <v-btn tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon> Edit
              </v-btn>
            </router-link>

            <v-btn
              tile
              outlined
              color="error"
              v-on:click="deleteProducts(product.id)"
            >
              <v-icon left>mdi-delete</v-icon> Delete
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td colspan="4" class="text-center">There is no products please</td>
          <td>
            <router-link to="/products/add">
              <v-btn tile outlined color="success">
                <v-icon left>mdi-plus-circle</v-icon> Add More
              </v-btn>
            </router-link>
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";
import { confirm } from "../functions.js";
export default {
  data() {
    return { products: null };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get("http://127.0.0.1:3333/products").then((response) => {
        this.products = response.data;
      });
    },
    deleteProducts(id) {
      confirm(id);
    },
  },
};
</script>
