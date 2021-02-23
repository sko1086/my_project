<template>
  <div id="header">
    <div id="l_menu">
      <h1>
        <router-link to="/portfolio">
          <img src="../assets/logo.png" alt="portfolio">
        </router-link>
      </h1>
      <ul class="main_menu">
          <li>
            <router-link to="/portfolio">
              <span class="sp_1">Portfolio</span>
              <span class="sp_2">프로젝트 작업물</span>
            </router-link>
          </li>
          <li>
            <router-link to="/boardList">
              <span class="sp_1">board</span>
              <span class="sp_2">게시판</span>
            </router-link>
          </li>
        <li v-if="isLoggedIn">
          <a href="#" @click="logout" >
            <span class="sp_1">logout</span>
            <span class="sp_2">로그아웃</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
		...mapGetters(['isLoggedIn']),
	},
  methods: {
    logout() {
			this.$store.commit('LOGOUT')
			this.$router.push('/')
		},
  }
}
</script>
