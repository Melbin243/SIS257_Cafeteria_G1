<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Cliente } from '@/models/cliente';

var clientes = ref<Cliente[]>([])
async function getClientes() {
  clientes.value = await http.get("clientes").then((response) => response.data)
}

onMounted(() => {
  getClientes()
})

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const email = ref('')
const rol = ref('')
const idCliente = ref('')

async function crearUsuario() {
  await http
    .post(ENDPOINT, {
      usuario: usuario.value,
      email: email.value,
      rol: rol.value,
      idCliente: idCliente.value
    })
    .then(() => router.push('/usuarios'))
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
          <RouterLink to="/usuarios">Usuarios</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2 style="color: white;">Crear Nuevo usuario</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearUsuario">
        <div class="form-floating mb-3">
          <select v-model="idCliente" class="form-select">
            <option v-for="cliente in clientes" :value="cliente.id">{{ cliente.nombre }}  {{ cliente.apellidos }} </option>
          </select>
          <label for="cliente">Cliente</label>
        </div>
        <div class="form-floating mb-3">
          <input type="string" class="form-control" v-model="usuario" placeholder="Usuario" required />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="string"
            class="form-control"
            v-model="email"
            placeholder="Email"
            required
          />
          <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <label for="rol">Rol</label>
          <select class="form-control" v-model="rol" id="rol" required>
              <option value="usuario">Usuario</option>
              <option value="administrador">Administrador</option>
          </select>
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