import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Files from '@/components/Files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    }
  ]
})
