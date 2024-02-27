<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '../composables/getData'
import { useCounterStore } from '../stores/counter'
const useCounter = useCounterStore()

const { data, getData, loading, error } = useGetData()

getData('https://rickandmortyapi.com/api/character/')

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
  <div class="col-12">
    <h1 class="text-center text-info">Rick And Morty Characters</h1>
    <h1 v-if="loading" class="text-center text-info">Loading information...</h1>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
      <ul>
        <div class="row p-2">
          <div class="text-center mb-4">
            <button
              class="btn btn-outline-dark me-2"
              :disabled="!data.info.prev"
              @click="getData(data.info.prev)"
            >
              Previous
            </button>
            <button
              class="btn btn-outline-dark"
              :disabled="!data.info.next"
              @click="getData(data.info.next)"
            >
              Next
            </button>
          </div>
          <li
            v-for="character in data.results"
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
              <router-link :to="`/characters/${character.id}`">
                <img
                  class="card-image-top rounded img-fluid"
                  :src="character.image"
                  alt=""
                  srcset=""
                />
              </router-link>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
