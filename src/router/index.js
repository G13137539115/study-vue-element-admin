import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import home from '@/views/home/home'
import articleList from '@/views/article/list'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active_menu_li',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/articleList',
      component: articleList
    }
  ]
})
