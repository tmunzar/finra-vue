import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import Data from '@/components/Data'
import Compare from '@/components/Compare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
    },
    {
      path: '/compare',
      name: 'Compare',
      component: Compare,
    }
  ]
})
