<script setup lang="ts">
import { onMounted} from 'vue'
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Usuario } from '@/models/usuario';



const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const apellidos = ref('')
const direccion = ref('')
const celular = ref('')


async function crearCliente() {
  await http
    .post(ENDPOINT, {
      nombre: nombre.value,
      apellidos: apellidos.value,
      direccion: direccion.value,
      celular: celular.value,

    })
    .then(() => router.push('/clientes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container" style="background-color: black;">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page" style="color: cadetblue;">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2 style="color: whitesmoke;">Crear Nuevo Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCliente">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
            required
          />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="apellidos"
            placeholder="Apellidos"
            required
          />
          <label for="apellidos">Apellidos</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="direccion"
            placeholder="Direccion"
            required
          />
          <label for="direccion">Direccion</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="celular"
            placeholder="Celular"
            required
          />
          <label for="celular">Celular</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style>
</style>