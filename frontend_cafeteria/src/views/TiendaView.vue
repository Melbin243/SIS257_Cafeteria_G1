<script setup lang="ts">
import{ type Producto } from '@/models/producto';
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import { useAuthStore } from '@/stores/index'

const authStore = useAuthStore()

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productos = ref<Producto[]>([])

async function getProductos() {
  productos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/productos/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el producto')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProductos())
  }
}

function addToCart(producto: Producto) {
  //alert("compra exitosa")
}

onMounted(() => {
  getProductos()
})
</script>
<template>
  <div class="container" style="background-color: black;">
    <div class="row">
      <h2 style="color: whitesmoke; text-align: center; font-size: 50px;">Productos Disponibles</h2>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <div class="col mb-3" v-for="producto in productos" :key="producto.id">
        <div class="card h-100" style="width: 15rem">
          <img
            class="card-img-top"
            :src="producto.urlImagen"
            alt="..."
            style="width: 100%; height: auto; width: 238px; height: 250px;"
          />
          <div v-if="producto.stock >= 1">
            <div class="down-content">
              <h7>DISPONIBLE</h7>
              <br>
            </div>
          </div>
          <div v-else>
            <div class="down-content">
              <h7>AGOTADO</h7>
            </div>
          </div>
          <div class="card-body p-2" style="color: black;">
            <div class="text-center">
              <h5 class="fw-bolder" style="font-size: 1rem">{{ producto.nombre }}</h5>
              precio: &nbsp; {{ producto.precio }} Bs <br>
              stock: &nbsp;{{ producto.stock }}
            </div>
          </div>
          <div  class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div v-if="authStore.token" class="text-center">
              <a class="btn btn-outline-dark btn-sm mt-auto" href="compras/crear" @click="addToCart(producto)"
                >Comprar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
