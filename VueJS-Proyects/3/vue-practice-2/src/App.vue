<script setup>
import { ref, onMounted } from 'vue'
import BlogPost from './components/BlogPost.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
import PaginatePost from './components/PaginatePost.vue'
import LoadingSpinner from './components/loadingSpinner.vue'

const loading = ref(true)
const posts = ref([])
const postByPage = 10
const start = ref(0)
const end = ref(postByPage)
const fav = ref('')

// onMounted(async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     posts.value = await res.json()
//   } catch (error) {
//   } finally {
//     setTimeout(() => {
//       loading.value = false
//     }, 1000)
//   }
// })
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => res.json())
//   .then((data) => (posts.value = data))
//   .finally(() => (loading.value = false))

const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
}
fetchData()

const nextPage = () => {
  start.value += postByPage
  end.value += postByPage
}
const prevPage = () => {
  start.value -= postByPage
  end.value -= postByPage
}
const changeFav = (title) => {
  fav.value = title
}
</script>
<template>
  <LoadingSpinner v-if="loading"></LoadingSpinner>
  <div class="container" v-else>
    <div class="row">
      <h1>App</h1>
      <h2>My favorite post: {{ fav }}</h2>

      <PaginatePost
        class="mb-2 col-6"
        @nextPage="nextPage"
        @prevPage="prevPage"
        :start="start"
        :end="end"
        :maxLength="posts.length"
      ></PaginatePost>

      <!-- <ButtonCounter /> -->
      <BlogPost
        v-for="post in posts.slice(start, end)"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"
        @changeFav="changeFav"
        class="mb-2"
      ></BlogPost>
    </div>
  </div>
</template>
