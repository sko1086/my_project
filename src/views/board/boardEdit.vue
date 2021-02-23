<template>
  <div class="area-wrap">
		<h2>글수정</h2>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input id="title" type="text" class="form_title" placeholder="제목을 입력해주세요." v-model="title" />
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
          ></textarea>
        </div>
        <div class="btn-box">
          <b-button type="submit">저장</b-button>
        </div>
      </form>
      <p class="log">
        {{ resultMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPostById } from '@/api/post.js'

export default {
  data() {
		return {
			title: '',
			contents: '',
			resultMessage: '',
		}
	},
  methods: {
    setForm({ title, contents }) {
			this.title = title
      this.contents = contents
      console.log(this)
		},
  },
  async created() {
    try {
      const id = this.$route.params.id
      const { data } = await fetchPostById(id)
      this.setForm(data)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>

</style>