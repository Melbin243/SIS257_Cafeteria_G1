<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Compra } from '@/models/compra'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const totalCompra = ref('')
const idUsuario = ref('')

async function crearCompra() {
  await http
    .post(ENDPOINT, {
      totalCompra: totalCompra.value,
      idUsuario: idUsuario.value
    })
    .then(() => router.push('/compras'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container" style="background-color: black">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/compras">Compras</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page" style="color: cadetblue">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2 style="color: whitesmoke">Comprar Producto</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCompra">
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="totalCompra"
            placeholder="TotalCompra"
            required
          />
          <label for="TotalCompra">Total</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="idUsuario"
            placeholder="idUsuario"
            required
          />
          <label for="idUsuario">idUsuario</label>
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

<style></style>
