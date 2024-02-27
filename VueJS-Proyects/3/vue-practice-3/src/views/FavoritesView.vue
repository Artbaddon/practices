<script setup>
import { useFavoriteStore } from '../stores/favorites'
import { storeToRefs } from 'pinia'

const useFavorite = useFavoriteStore()

const { favorites } = storeToRefs(useFavorite)

const { removeFavorite } = useFavorite
const statusCheck = (status) => {
  if (status === 'Alive') {
    return 'text-success'
  } else if (status === 'unknown') {
    return 'text-secondary'
  } else {
    return 'text-danger'
  }
}
</script>
<template>
  <div>
    <h1 class="text-center">Favorites</h1>
    <ul>
      <div class="row p-2">
        <li
          v-for="character in favorites"
          :key="character.id"
          class="card text-center col-12 col-sm-6 col-md-4 col-lg-3 bg-light bg-gradient p-2"
        >
          <div class="card-body mx-2">
            <h5 class="card-title">
              <span class="text-left">{{ character.id }}. </span>{{ character.name }}
            </h5>
            <p class="card-text">
              {{ character.species }}-
              <span :class="statusCheck(character.status)">{{ character.status }}</span>
            </p>

            <img class="card-image-top rounded img-fluid" :src="character.image" alt="" srcset="" />

            <div>
              <button class="btn btn-sm btn-danger" @click="removeFavorite(character.id)">
                Delete
              </button>
              <router-link :to="`/characters/${character.id}`" class="btn btn-sm btn-info">More Info</router-link>
            </div>
          </div>
        </li> 
      </div>
    </ul>
  </div>
</template>
