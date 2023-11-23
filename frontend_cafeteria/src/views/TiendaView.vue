<script setup lang="ts">
import{ Producto } from '@/models/producto';
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

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
  console.log('Producto agregado al carro:', producto)
}

onMounted(() => {
  getProductos()
})
</script>
<template>
  <div class="container">
    <div class="row">
      <h2 style="color: whitesmoke; text-align: center; font-size: 50px;">Productos Disponibles</h2>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <div class="col mb-3" v-for="producto in productos" :key="producto.id">
        <div class="card h-100" style="width: 15rem">
          <!-- Product image -->
          <img
            class="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div class="card-body p-2">
            <div class="text-center">
              <h5 class="fw-bolder" style="font-size: 1rem">{{ producto.nombre }}</h5>
              precio: &nbsp; {{ producto.precio }} Bs <br>
              stock: &nbsp; {{ producto.stock }}
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <a class="btn btn-outline-dark btn-sm mt-auto" @click="addToCart(producto)"
                >Agregar al Carro</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
