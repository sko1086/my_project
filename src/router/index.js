import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import signUp from '@/views/sign/signUp'
import portfolio from '@/views/portfolio/portfolio'
import portfolioCreate from '@/views/portfolio/portfolioCreate'
import boardList from '@/views/board/boardList'
import boardCreate from '@/views/board/boardCreate'
import boardDetail from '@/views/board/boardDetail'

import store from '../store'
import { getUserFromCookie } from '../util/cookies.js'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter(to, from, next) {
      store.getters['isLoggedIn'] ? next('/portfolio') : next()
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolio,
    // beforeEnter
  },
  {
    path: '/portfolio/portfolioCreate',
    name: 'portfolio/portfolioCreate',
    component: portfolioCreate,
    // beforeEnter
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp,
  },
  {
    path: '/boardList',
    name: 'boardList',
    component: boardList,
    beforeEnter
  },
  {
    path: '/board/create',
    name: 'boardCreate',
    component: boardCreate,
    beforeEnter
  },
  {
    path: '/board/detail/:id',
    name: 'boardDetail',
    component: boardDetail,
    beforeEnter
  },
  {
    path: '*',
    redirect: '/'
  }
]

function beforeEnter(to, from, next) {
	if (store.getters['isLoggedIn'] || getUserFromCookie()) {
		next()
	} else {
		alert('로그인을 해주세요.')
		next('/login')
	}
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router