import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
// import IntroPage from '@/components/IntroPage.vue'
import SkillsPage from '@/components/SkillsPage.vue'
import ProjectsPage from '@/components/ProjectsPage.vue'
import CareersPage from '@/components/CareersPage.vue'
import BoardPage from '@/components/BoardPage.vue'

const routes = [
  {
    path: '/',
    name: 'HeaderPage',
    component: HeaderPage
  },
  {
    path: '/IntroPage',
    name: 'IntroPage',
    // component: IntroPage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/IntroPage.vue')
  },
    {
    path: '/SkillsPage',
    name: 'SkillsPage',
    component: SkillsPage
  },
    {
    path: '/ProjectsPage',
    name: 'ProjectsPage',
    component: ProjectsPage
  },
    {
    path: '/CareersPage',
    name: 'CareersPage',
    component: CareersPage
  },
    {
    path: '/BoardPage',
    name: 'BoardPage',
    component: BoardPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router