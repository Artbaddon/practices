import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref([])
  if (localStorage.getItem('favorites')) {
    favorites.value = JSON.parse(localStorage.getItem('favorites'))
  }

  const addFavorite = (character) => {
    favorites.value.push(character)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }
  const removeFavorite = (id) => {
    favorites.value = favorites.value.filter((item) => item.id !== id)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }
  const findCharacter = (id) => favorites.value.find((item) => item.id === id)

  return {
    addFavorite,
    favorites,
    removeFavorite,
    findCharacter
  }
})
