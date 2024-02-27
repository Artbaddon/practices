<template>
  <v-sheet class="bg-black pa-12" rounded>
    <v-card width="600" class="mx-auto mt-10 px-6 py-8">
      <v-card-title>Edit Product</v-card-title>
      <v-card-text>
        <v-form fast-fail v-model="isValid" v-on:submit="save()">
          <v-text-field
            v-model="name"
            label="Product name"
            :rules="nameRules"
            prepend-inner-icon="mdi-alphabetical"
            required
          ></v-text-field>

          <v-textarea
            v-model="description"
            prepend-inner-icon="mdi-text"
            auto-grow
            required
            variant="filled"
            color="gray"
            :rules="descriptionRules"
            label="Description"
            rows="1"
          ></v-textarea>
          <v-text-field
            v-model="price"
            label="Product price"
            prepend-inner-icon="mdi-currency-usd"
            type="number"
            :rules="priceRules"
            required
          >
          </v-text-field>

          <v-btn type="submit" :disabled="!isValid" block class="mt-2"
            >Submit</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { showAlert, sendRequest } from "@/functions";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      id: 0,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 5) || "Name has to be more than 5 Characters",
        (v) =>
          (v && v.length < 100) || "Name has to be less than 100 Characters",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length >= 5) ||
          "Description has to be more than 5 Characters",
        (v) =>
          (v && v.length <= 255) ||
          "Description has to be less than 255 Characters",
      ],
      price: "",
      priceRules: [
        (v) => !!v || "Price is required",
        (v) =>
          (v && v.length <= 10) || "Price can not be more than 10 Characters",
      ],
      url: "http://127.0.0.1:3333/products",
    };
  },
  mounted() {
    const route = useRoute();
    this.id = route.params.id;
    this.url = this.url + "/" + this.id;
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get(this.url)
        .then(
          (response) => (
            (this.name = response.data["name"]),
            (this.description = response.data["description"]),
            (this.price = response.data["price"])
          )
        );
    },
    save() {
      event.preventDefault();
      if (this.name.trim() === "") {
        showAlert("Name can not be empty", "warning", "name");
      } else if (this.description.trim() === "") {
        showAlert("Name can not be empty", "warning", "description");
      } else if (this.price.trim() === "") {
        showAlert("PRice can not be empty", "warning", "price");
      } else {
        let params = {
          name: this.name.trim(),
          description: this.description.trim(),
          price: this.price.trim(),
        };
        sendRequest("PUT", params, this.url, "Product Updated");
      }
    },
  },
};
</script>
