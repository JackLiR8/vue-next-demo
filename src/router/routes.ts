import Home from '@/views/Home.vue'

interface Route {
  path: string,
  name?: string,
  component: any,
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'page.home',
    component: Home
  },
  { 
    path: '/about',
    name: 'page.about',
    component: () => import('@/views/About.vue')
  },
]