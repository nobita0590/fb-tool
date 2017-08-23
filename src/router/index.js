import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test/Test'
import List from '@/components/Test/List'
import Index from '@/components/Test/Index'
import Abc from '@/components/Test/Abc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        breadcrumb: 'Hello'
      }
    },
    {
      path: '/test',
      component: Test,
      meta: {
        breadcrumb: 'Test'
      },
      children: [
        {
          path: '',
          component: Index,
          meta: {
            breadcrumb: ''
          }
        },
        {
          path: 'list',
          name: 'List',
          component: List,
          meta: {
            breadcrumb: 'List'
          }
        },
        {
          path: 'abc',
          name: 'Abc',
          component: Abc,
          meta: {
            breadcrumb: 'Abc'
          }
        }
      ]
    }
  ]
})
