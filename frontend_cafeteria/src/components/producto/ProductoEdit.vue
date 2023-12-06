<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')
const categoria = ref('')
const precio = ref('')
const stock = ref('')
const urlImagen = ref('')
const id = router.currentRoute.value.params['id']

async function editarProducto() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      descripcion: descripcion.value,
      categoria: categoria.value,
      precio: precio.value,
      stock: stock.value,
      urlImagen: urlImagen.value
    })
    .then(() => router.push('/productos'))
}

async function getProducto() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(nombre.value = response.data.nombre),
      (descripcion.value = response.data.descripcion),
      (categoria.value = response.data.categoria),
      (precio.value = response.data.precio),
      (stock.value = response.data.stock),
      (urlImagen.value = response.data.urlImagen)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getProducto()
})
</script>

<template>
  <div class="container" style="background-color: black;">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2 style="color: white">Editar Producto</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarProducto">
        <div class="form-floating mb-3">
          <input
            type="string"
            class="form-control"
            v-model="nombre"
            placeholder="Nombre"
            required
          />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="string"
            class="form-control"
            v-model="descripcion"
            placeholder="Descripcion"
            required
          />
          <label for="descripcion">Descripcion</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="string"
            class="form-control"
            v-model="categoria"
            placeholder="Categoria"
            required
          />
          <label for="categoria">Categoria</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"
            required
            step="0.1"
          />
          <label for="precio">Precio</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="stock" placeholder="Stock" required />
          <label for="stock">Stock</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="urlImagen"
            placeholder="imagen"
            required
          />
          <label for="imagen">URL Imagen</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Editar</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
