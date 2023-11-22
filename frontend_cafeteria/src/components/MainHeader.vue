<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()
</script>

<template scope>
  <header>
    <h1 class="site-heading text-center text-faded d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3">CAFE</span>
      <span class="site-heading-lower">CAFE CAPITAL</span>
    </h1>
  </header>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-lg-4">
            <RouterLink to="/" class="nav-link text-uppercase">Inicio</RouterLink>
          </li>
          <li class="nav-item px-lg-4">
            <RouterLink to="/about" class="nav-link text-uppercase">Acerca de</RouterLink>
          </li>
          <slot v-if="authStore.token">
            <li class="nav-item px-lg-4">
              <RouterLink to="/usuarios" class="nav-link text-uppercase">Usuarios</RouterLink>
            </li>
            <li class="nav-item px-lg-4">
              <RouterLink to="/productos" class="nav-link text-uppercase">Productos</RouterLink>
            </li>
            <li class="nav-item px-lg-4">
              <RouterLink to="/compras" class="nav-link text-uppercase">Compras</RouterLink>
            </li>
            <li class="nav-item px-lg-4">
              <RouterLink to="/clientes" class="nav-link text-uppercase">Clientes</RouterLink>
            </li>
            <li class="nav-item px-lg-4">
              <RouterLink to="#" class="nav-link text-uppercase"
                >Hola {{ authStore.user }}</RouterLink
              >
            </li>
          </slot>
        </ul>
        <ul class="navbar-nav mx-auto">
          <li class="nav-item px-lg-4">
            <RouterLink v-if="!authStore.token" to="/login" class="nav-link text-uppercase"
              >Iniciar Sesión</RouterLink
            >
            <a v-else @click="authStore.logout()" class="nav-link text-uppercase" style="cursor: pointer;">Salir</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
