<script setup>
// const props = defineProps(['title', 'content', 'id'])

defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: 'No description'
  }
})

const emit = defineEmits(['changeFav'])
</script>

<template>
  <div class="card">
    <div class="card-body" @click="postFav">
      <h5 class="cart-title">{{ id }} - {{ title }}</h5>
      <p>{{ body }}</p>
      <button @click="emit('changeFav', title)" class="btn btn-outline-primary">Favorite</button>
    </div>
  </div>
</template>
