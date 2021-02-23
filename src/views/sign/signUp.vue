<template>
  <div id="container">
    <div id="main_wrap" class="main_slide_1">
      <div class="signup_form">
        <h2>회원가입</h2>
        <form @submit.prevent="onSubmitFrom">
          <div class="id_form">
            <input type="text" id="username" v-model="username" placeholder="ID">
          </div>
          <div class="pw_form">
            <input type="password" id="password" v-model="password" placeholder="PW">
          </div>
          <div class="nick_form">
            <input type="text" id="nickname" v-model="nickname" placeholder="닉네임">
          </div>
          <div class="btn_form">
            <button type="submit">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { signupUser } from '@/api/auth'

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    }
  },
  methods: {
    onSubmitFrom() {
      if(!this.username) {
        alert('id 입력하세요.')
      } else if(!this.password) {
        alert('pw 입력하세요.')
      } else if(!this.nickname) {
        alert('nickname 입력하세요.')
      } else {
        const uData = {
          "username" : this.username,
          "password" : this.password,
          "nickname" : this.nickname,
        }
        this.requestAPI(uData)
      }
    },
    async requestAPI(uData) {
      await signupUser({
        ...uData
      })
      this.$router.push('/login')
      this.initForm()
      alert('회원가입에 성공하였습니다.')
    },
    initForm() {
			this.username = ''
			this.password = ''
      this.nickname = ''
		},
    signUp() {
      this.$router.push('/signUp')
    }
  }
}
</script>

<style>

</style>