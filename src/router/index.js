import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import ChildeAbout from '../views/ChildeAbout.vue'
import ChildrenAbout from '../views/ChildrenAbout.vue'
import Administrative from '../views/IndexPage/Administrative.vue'
import Attendance from '../views/IndexPage/Attendance.vue'
import Client from '../views/IndexPage/Client.vue'
import Document from '../views/IndexPage/Document.vue'
import Finance from '../views/IndexPage/Finance.vue'
import OfficePer from '../views/IndexPage/OfficePer.vue'
import CenterPer from '../views/officeper/CenterPer.vue'
import Mail from '../views/officeper/Mail.vue'
import Process from '../views/IndexPage/Process.vue'
import ProcessModule from '../views/IndexPage/ProcessModule.vue'
import Resources from '../views/IndexPage/Resources.vue'
import System from '../views/IndexPage/System.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    path: '/index',
    components: {
      default: Index,
      main: Main
    },
    children: [
      { path: '/index/', redirect: '/index/officeper' },
      { path: '/index/administrative', component: Administrative },
      { path: '/index/attendance', component: Attendance },
      { path: '/index/client', component: Client },
      { path: '/index/document', component: Document },
      { path: '/index/finance', component: Finance },
      {
        path: '/index/officeper',
        components: {
          side: OfficePer
        },
        children: [
          {
            path: '/index/officeper/',
            component: CenterPer
          },
          {
            path: '/index/officeper/centerper',
            component: CenterPer
          },
          {
            path: '/index/officeper/mail',
            component: Mail
          }
        ]
      },
      { path: '/index/process', component: Process },
      { path: '/index/processModule', component: ProcessModule },
      { path: '/index/resources', component: Resources },
      { path: '/index/system', component: System }
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
