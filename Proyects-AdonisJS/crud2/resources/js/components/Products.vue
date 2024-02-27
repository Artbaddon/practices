<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-left">Name</th>
        <th class="text-left">Description</th>
        <th class="text-left">Price</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="products.length > 0">
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <v-btn tile outlined color="success" class="mr-3">
              <v-icon left>mdi-pencil</v-icon> Edit
            </v-btn>
            <v-btn tile outlined color="error">
              <v-icon left>mdi-delete-forever</v-icon> Delete
            </v-btn>
            <!-- <a class="btn btn-primary" href="/products/{{ product.id }}/edit">Edit</a>
                  <form action="{{`/products/${product.id}?_method=DELETE`}}" method="POST">
                      {{ csrfField() }}
                      <button type="submit" class="btn btn-danger">Delete</button>
                    </form> -->

            <!-- <a class="btn btn-primary" href="/products/{{ product.id }}/edit">Edit</a>
                      <form action="{{`/products/${product.id}?_method=DELETE`}}" method="POST">
                        {{ csrfField() }}
                        <button type="submit" class="btn btn-danger">Delete</button>
                      </form> -->
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td colspan="4" class="warning">No Products Added</td>
          <td colspan="1"><a href="/products/create" class="btn btn-success">Create Product</a></td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<script setup>
const { products } = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>
