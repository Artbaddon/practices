<template>
  <div class="container">
    <div class="row mt-4">
      <div class="text-center" :class="classDiv">
        <h1 :class="classToggle">Hello {{ name }}</h1>
        <h2 :class="classToggle">{{ counter }}</h2>
        <h4 :class="classToggle">Counter</h4>
        <div class="row">
          <div class="text-center">
            <div>
              <button class="btn btn-success mx-2" @click="increment">Add</button>
              <button class="btn btn-warning mx-2" @click="decrement">Decrement</button>
            </div>
            <div class="row">
              <div class="mt-2 text-center">
                <button :disabled="disableBtn" class="btn btn-info mx-2" @click="addFavorite">
                  Add Favorite number
                </button>
                <button class="btn btn-danger mx-2" @click="reset">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 text-center" v-if="favoriteNums.length > 0">
        <h2>Favorite numbers</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5" v-for="(favnum, index) of favoriteNums">
            {{ favnum }}
            <span @click="deleteFavorite(index)" class="mr-5 delete">x</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const name = "Artbaddon's first Vue dinamyc Practice"

const counter = ref(0)

const favoriteNums = ref([])

const increment = () => {
  if (counter.value >= 100) {
    counter.value = 0
  }
  counter.value++
}

const decrement = () => {
  if (counter.value <= -10) {
    counter.value = 0
  }
  counter.value--
}

const reset = () => (counter.value = 0)

const addFavorite = () => {
  favoriteNums.value.push(counter.value)
}
const deleteFavorite = (idx) => {
  favoriteNums.value.splice(idx, 1)
}
const disableBtn = computed(() => {
  const numSearch = favoriteNums.value.find((num) => num === counter.value)
  return numSearch || numSearch === 0
})
const classDiv = computed(() => {
  if (favoriteNums.value.length > 0) {
    return 'col-8'
  } else {
    return 'col-12'
  }
})

const classToggle = computed(() => {
  if (counter.value === 0) {
    return 'zero'
  }
  if (counter.value > 0) {
    return 'positive'
  }
  if (counter.value < 0) {
    return 'negative'
  }
})
</script>

<style>
.positive {
  color: green;
}
.negative {
  color: red;
}
.zero {
  color: peru;
}
.delete {
  color: red;
  cursor: pointer;
}
</style>
