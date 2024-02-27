<template>
  <v-sheet class="bg-black pa-12" rounded>
    <v-card width="700" class="mx-auto mt-auto px-6 py-8">
      <v-card-title>Create Product</v-card-title>
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

export default {
  data() {
    return {
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 5) || "Name has to be more than 5 Characters",
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

  methods: {
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
        sendRequest("POST", params, this.url, "Product Created");
      }
    },
  },
};
</script>
