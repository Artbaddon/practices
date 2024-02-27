<script setup>
import { useCounterStore } from '../stores/counter'
const useCounter = useCounterStore()

const { increment } = useCounter
</script>

<template>
  <div class="text-center">
    <h1>Home counter: {{ useCounter.count }}</h1>
    <h1>Double: {{ useCounter.double }}</h1>
    <button class="btn btn-primary" @click="increment">Increment</button>
  </div>
</template>
