<script setup>
defineProps({
  postByPage: Number
})
defineEmits(['update:postByPage'])
</script>

<template>
  <div class="col-6">
    <div class="row">
      <div class="col-3">
        <p class="text-end">Post by page:</p>
      </div>
      <div class="col-2">
        <select
          class="form-select form-select text-center"
          :value="postByPage"
          @change="$emit('update:postByPage', $event.target.value)"
          
        >
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="20">20</option>
          <option :value="30">30</option>
        </select>
      </div>
    </div>
  </div>
</template>
