<template>
  <div class="area-wrap">
		<h2>글보기</h2>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <input id="title" type="text" class="form_title" placeholder="제목을 입력해주세요." v-model="title" v-if="createUserChk"/>
          <div class="form_title detail" v-else>
            {{ this.title }}
          </div>
        </div>
        <div class="textarea-wrap">
          <textarea
            name="contents"
            id="contents"
            cols="30"
            rows="5"
            v-model="contents"
            class="form_textarea"
            placeholder="내용을 입력해주세요."
            v-if="createUserChk"
          ></textarea>
          <div class="form_textarea detail" v-else>
            {{ this.contents }}
          </div>
        </div>
        <div class="btn-box" v-if="createUserChk">
          <b-button @click="editForm">저장</b-button>
          <b-button @click="removePost">삭제</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchPostById, editPostById, deletePostById } from '@/api/post.js'

export default {
  data() {
		return {
			title: '',
			contents: '',
      createUserChk: false,
      createUserId: this.$store.getters.userId,
			resultMessage: '',
		}
	},
  methods: {
    setForm({ title, contents }) {
			this.title = title
      this.contents = contents
      console.log(this)
		},
    async editForm() {
			try {
				const id = this.$route.params.id
				await editPostById(id, {
					title: this.title,
					contents: this.contents,
				})
				this.$router.push('/boardList')
			} catch (error) {
				console.log(error)
				this.resultMessage = error.data.error.errmsg
			}
		},
    async removePost() {
			try {
        const id = this.$route.params.id
        await deletePostById(id)
        // await this.fetchData()
        this.$router.push('/boardList')
			} catch (error) {
				console.log(error)
			}
		},
  },
  async created() {
    try {
      const id = this.$route.params.id
      const { data } = await fetchPostById(id)
      if (data.createdBy == this.createUserId) {
        this.createUserChk = true
      }
      this.setForm(data)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>

</style>