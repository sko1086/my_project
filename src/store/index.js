import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from '@/api/auth'
import {
	saveAuthToCookie,
	saveUserToCookie,
	saveNicknameToCookie,
	saveUserIdToCookie,
	getUserFromCookie,
	getNicknameFromCookie,
	getUseridFromCookie,
	deleteCookie,
} from '@/util/cookies.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		token: '',
	},
	getters: {
		isLoggedIn(state) {
			return !!state.token || getUserFromCookie()
		},
		userToken(state) {
			return state.token
		},
		userNickname() {
			return getNicknameFromCookie()
		},
		userId() {
			return getUseridFromCookie()
		}
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user
		},
		SET_TOKEN(state, token) {
			state.token = token
		},
		LOGOUT(state) {
			state.user = null
			state.token = null
			deleteCookie('til_auth')
			deleteCookie('til_user')
			deleteCookie('til_nickname')
			deleteCookie('til_userid')
		},
	},
	actions: {
		async LOGIN({ commit }, data) {
			const response = await loginUser(data)
			commit('SET_USER', response.data.user)
			commit('SET_TOKEN', response.data.token)
			saveUserToCookie(response.data.user.username)
			saveNicknameToCookie(response.data.user.nickname)
			saveUserIdToCookie(response.data.user.userid)
			saveAuthToCookie(response.data.token)
			return response
		},
	},
})
