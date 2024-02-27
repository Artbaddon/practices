<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-info bg-gradient navbar-expand-lg">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/rick-sanchez.png"
          alt="rick-sanchez"
        />
        Rick & Morty API
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/96/morty-smith.png"
          alt="morty-smith"
        />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-2">
            <RouterLink class="btn btn-outline-dark text-light" to="/">Home</RouterLink>
          </li>
          <li class="nav-item me-2">
            <RouterLink class="btn btn-outline-dark text-light" to="/characters"
              >Characters</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-outline-dark text-light" to="/favorites"
              >Favorites</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>
