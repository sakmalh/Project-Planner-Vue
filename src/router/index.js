import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }, 
  {
    path: "/add",
    name: "AddProject",
    component: AddProject
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
