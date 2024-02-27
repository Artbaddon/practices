<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '../composables/getData'
import { useFavoriteStore } from '../stores/favorites'

const route = useRoute()
const router = useRouter()
const useFavorite = useFavoriteStore()
const { addFavorite, findCharacter } = useFavorite

const back = () => {
  router.push('/characters')
}

const statusCheck = (status) => {
  if (status === 'Alive') {
    return 'text-success'
  } else if (status === 'unknown') {
    return 'text-secondary'
  } else {
    return 'text-danger'
  }
}

const { data, getData, loading, error } = useGetData()
getData(`https://rickandmortyapi.com/api/character/${route.params.id}`)
</script>

<template>
  <h1 v-if="loading" class="text-center text-info">Loading information...</h1>
  <div class="alert alert-danger" v-if="error">{{ error }}</div>
  <div class="card mt-4" v-if="data">
    <div class="d-grid gap-2 col-2 p-2">
      <button type="button" @click="back" class="btn btn-outline-primary">Back</button>
      <button
        type="button"
        :disabled="findCharacter(data.id)"
        @click="addFavorite(data)"
        class="btn btn-outline-primary"
      >
        Add to Favorite
      </button>
    </div>
    <div class="card-body d-flex flex-column align-items-center justify-content-center">
      <h5 class="card-title">
        {{ data.name }}
      </h5>
      <p class="card-text">
        {{ data.species }}-
        <span :class="statusCheck(data.status)">{{ data.status }}</span>
      </p>

      <img class="card-image-top rounded img-fluid" :src="data.image" alt="" srcset="" />
    </div>
  </div>
  <div v-else class="row">
    <div class="col-12">
      <h1 class="text-center">Character not found</h1>
    </div>
    <div class="col-2">
      <router-link to="/ch"></router-link>
      <button type="button" @click="back" class="btn btn-outline-primary">Back</button>
    </div>
  </div>
</template>
