import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views
const Helloworld = () => import('@/views/pages/HelloWorld')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'helloworld',
          name: 'helloworld',
          component: Helloworld
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: () => import('@/views/pages/Page404.vue')
        },
        {
          path: '500',
          name: 'Page500',
          component: () => import('@/views/pages/Page500.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/views/pages/Register.vue')
        }
      ]
    }
  ]
})
