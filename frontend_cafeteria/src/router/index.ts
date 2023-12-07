import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactoView.vue')
    },
    // {
    //   path: '/catalogo',
    //   name: 'catalogo',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/CatalogoView.vue')
    // },
    {
      path: '/tienda',
      name: 'tienda',
      component: () => import('../views/ProductoView.vue'),
      children: [
        { path: '', component: () => import('../views/TiendaView.vue') },
        // { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        // {
        //   path: 'editar/:id',
        //   component: () => import('../components/producto/ProductoEdit.vue')
        // }
      ]
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
        { path: '', component: () => import('../components/producto/ProductoList.vue') },
        { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/producto/ProductoEdit.vue')
        }
      ]
    },
    {
      path: '/compras',
      name: 'compras',
      component: () => import('../views/CompraView.vue'),
      children: [
        { path: '', component: () => import('../components/compra/CompraList.vue') },
        { path: 'crear', component: () => import('../components/compra/CompraCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/compra/CompraEdit.vue')
        }
      ]
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
        { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
        { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/usuario/UsuarioEdit.vue')
        }
      ]
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/', '/about','/contacto', '/login', '/tienda']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
