import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import ChildeAbout from '../views/ChildeAbout.vue'
import ChildrenAbout from '../views/ChildrenAbout.vue'
import CenterPer from '../views/officeper/CenterPer.vue'
import Mail from '../views/officeper/Mail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index/main'
  },
  {
    path: '/index',
    redirect: '/index/main',
    components: {
      default: Index
    },
    children: [
      { path: '/index/main', component: Main },
      { path: '/index/officeper/centerper', component: CenterPer },
      { path: '/index/officeper/mail', component: Mail }
    ]
  },
  {
    path: '/about',
    component: About,
    children: [
      { path: '/childeabout', component: ChildeAbout },
      { path: '/childrenabout', component: ChildrenAbout }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
