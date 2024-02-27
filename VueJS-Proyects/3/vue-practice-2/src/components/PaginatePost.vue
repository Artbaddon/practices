<script setup>
const emit = defineEmits(['nextPage', 'prevPage'])
defineProps(['start', 'end', 'maxLength'])
</script>

<template>
  
  <div class="btn-group" role="group" aria-label="Basic Example">
    <button
      class="btn btn-outline-primary"
      @click="emit('prevPage')"
      type="button"
      :disabled="start === 0"
    >
      Previous
    </button>
    <button
      class="btn btn-outline-primary"
      @click="emit('nextPage')"
      type="button"
      :disabled="end >= maxLength"
    >
      Next
    </button>
  </div>
</template>
