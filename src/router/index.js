import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import ChildeAbout from '../views/ChildeAbout.vue'
import ChildrenAbout from '../views/ChildrenAbout.vue'
import Administrative from '../views/IndexPage/Administrative.vue'
import Attendance from '../views/IndexPage/Attendance.vue'
import Client from '../views/IndexPage/Client.vue'
import Document from '../views/IndexPage/Document.vue'
import Finance from '../views/IndexPage/Finance.vue'
import OfficePer from '../views/IndexPage/OfficePer.vue'
import Process from '../views/IndexPage/Process.vue'
import ProcessModule from '../views/IndexPage/ProcessModule.vue'
import Resources from '../views/IndexPage/Resources.vue'
import System from '../views/IndexPage/System.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      { path: '/administrative', component: Administrative },
      { path: '/attendance', component: Attendance },
      { path: '/client', component: Client },
      { path: '/document', component: Document },
      { path: '/finance', component: Finance },
      { path: '/officePer', component: OfficePer },
      { path: '/process', component: Process },
      { path: '/processModule', component: ProcessModule },
      { path: '/resources', component: Resources },
      { path: '/system', component: System }
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
