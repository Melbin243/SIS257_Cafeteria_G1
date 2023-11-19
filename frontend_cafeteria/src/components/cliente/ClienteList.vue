<script setup lang="ts">
import type { Cliente } from '@/models/cliente'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var clientes = ref<Cliente[]>([])

async function getClientes() {
  clientes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/clientes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar al Cliente')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getClientes())
  }
}

onMounted(() => {
  getClientes()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Intérpretes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Cliente</h2>
      <div class="col-12">
        <RouterLink to="/clientes/crear">
          <font-awesome-icon icon="fa-solid fa-circle-plus"/> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Direccion</th>
            <th scope="col">Celular</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes.values()" :key="cliente.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellidos }}</td>
            <td>{{ cliente.direccion }}</td>
            <td>{{ cliente.celular }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(cliente.id)">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" title="Editar"/>
              </button>
              <button class="btn text-danger" @click="toDelete(cliente.id)">
                <font-awesome-icon icon="fa-solid fa-trash-can" title="Eliminar"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>