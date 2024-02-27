<template>
  <h2 class="text-center">PAGE NOT FOUND 404</h2>
  <div class="d-grid gap-2">
    <button type="button" @click="back" class="btn btn-outline-primary">Back</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const back = () => {
  router.push('/characters')
}
</script>
