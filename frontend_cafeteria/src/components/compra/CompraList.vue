<script setup lang="ts">
import type { Compra } from '@/models/compra'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var compras = ref<Compra[]>([])

async function getCompras() {
  compras.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/compras/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Compra')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCompras())
  }
}

onMounted(() => {
  getCompras()
})
</script>

<template>
  <div v-if="authStore.token" style="background-color: black">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page" style="color: cadetblue">
            Compras
          </li>
        </ol>
      </nav>

      <div class="row">
        <h2 style="color: whitesmoke">Lista de Compras</h2>
        <div class="col-12">
          <RouterLink to="/compras/crear">
            <font-awesome-icon icon="fa-solid fa-circle-plus" /> Crear Nuevo
          </RouterLink>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="table-responsive">
        <table class="table table-bordered" style="background-color: whitesmoke">
          <thead>
            <tr style="color: rgb(218, 107, 28); background-color: wheat">
              <th scope="col">N°</th>
              <th scope="col">Total</th>
              <th scope="col">Usuario</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-light" v-for="(compra, index) in compras.values()" :key="compra.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ compra.totalCompra }}</td>
              <td>{{ compra.idUsuario }}</td>
              <td>
                <button class="btn text-success" @click="toEdit(compra.id)">
                  <font-awesome-icon icon="fa-solid fa-edit" />
                </button>
                <button class="btn text-danger" @click="toDelete(compra.id)">
                  <font-awesome-icon icon="fa-solid fa-trash-can" title="Eliminar" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
