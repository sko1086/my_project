<template>
  <div class="area-wrap">
		<h2>글쓰기</h2>
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
import { createNewPost } from '@/api/post'
import { formatDate } from '@/util/filter.js'

export default {
	data() {
		return {
			title: '',
			contents: '',
			nickname: '',
			date: formatDate(new Date),
			resultMessage: '',
		}
	},
	created () {
		this.nickname = this.$store.getters.userNickname
	},
	computed: {
		contentsLength() {
			return this.contents.length
		},
		isContentTooLong() {
			return this.contents.length > 250
		},
		isButtonDisabled() {
			return !this.title || !this.contents || this.contents.length > 50
				? 'disabled'
				: null
		},
	},
	methods: {
		async submitForm() {
			try {
				await createNewPost({
					title: this.title,
					contents: this.contents,
					nickname: this.nickname,
					date: this.date
				})
				this.$router.push('/boardList')
			} catch (error) {
				console.log(error)
				this.resultMessage = error.data.message
			}
		},
	},
}
</script>
