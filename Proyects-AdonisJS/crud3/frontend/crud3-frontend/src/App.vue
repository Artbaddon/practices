<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <v-toolbar dark color="black">
        <router-link to="/products">
          <v-btn icon="mdi-arrow-left" color="white"></v-btn>
        </router-link>

        <v-toolbar-title>Simple Crud</v-toolbar-title>
        <router-link to="/products/add">
          <v-btn icon="mdi-plus-circle-outline" color="white"></v-btn>
        </router-link>
      </v-toolbar>
    </v-app-bar>

    <v-main
      class="d-lg-flex align-center justify-center mt-3"
      style="min-height: 300px"
     
    >
      <router-view />
    </v-main>
  </v-layout>

</template>

<script setup>
//
</script>
