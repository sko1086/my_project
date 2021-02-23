<template>
  <div id="container">
    <div id="main_wrap" class="main_slide_1">
      <div class="login_form">
        <h2>Login</h2>
        <form @submit.prevent="onSubmitFrom">
          <div class="id_form">
            <input type="text" id="username" v-model="username" placeholder="ID">
          </div>
          <div class="pw_form">
            <input type="password" id="password" v-model="password" placeholder="PW">
          </div>
          <div class="btn_form">
            <button type="submit">로그인</button>
          </div>
          <div class="txt_form">
            Don't you have ID? 
            <a href="#" @click="signUp">sign up</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    onSubmitFrom() {
      if(!this.username) {
        alert('id입력')
      } else if(!this.password) {
        alert('pw입력')
      } else {
        const uData = {
          "username" : this.username,
          "password" : this.password
        }
        this.requestAPI(uData)
      }
    },
    async requestAPI(uData) {
      try {
        const returnData = await this.$store.dispatch('LOGIN', uData)
        console.log(returnData)
        this.$router.push('/portfolio')
        this.initForm()
      } catch(error) {
        console.log(error);
      }
    },
    initForm() {
			this.username = '';
			this.password = '';
		},
    signUp() {
      this.$router.push('/signUp')
    }
  }
}
</script>

<style>

</style>