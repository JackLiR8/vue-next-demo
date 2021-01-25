import Home from '@/views/Home.vue'

export const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/about',
    component: () => import('@/views/About.vue')
  },
]