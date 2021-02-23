<template>
  <div class="area-wrap">
		<h2>글쓰기</h2>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input id="title" type="text" class="form_title" placeholder="제목을 입력해주세요." v-model="title" />
        </div>
        <div class="pdt10">
          <input id="subTitle" type="text" class="form_title" placeholder="서브제목을 입력해주세요." v-model="subTitle" />
        </div>
        <div class="pdt10">
          <input id="workTime" type="text" class="form_title" placeholder="작업기간을 입력해주세요." v-model="workTime" />
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
        <div class="pdt10">
          <input id="imgClass" type="text" class="form_title" placeholder="이미지 class를 입력해주세요." v-model="imgClass" />
        </div>
        <div class="btn-box">
          <b-button type="submit">저장</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createNewPortfolio } from '@/api/portfolio'

export default {
	data() {
		return {
			title: '',
      subTitle: '',
      workTime: '',
			contents: '',
      imgClass: ''
		}
	},
	methods: {
		async submitForm() {
			try {
				await createNewPortfolio({
					title: this.title,
          subTitle: this.subTitle,
          workTime: this.workTime,
					contents: this.contents,
          imgClass: this.imgClass
				})
				this.$router.push('/portfolio')
			} catch (error) {
				console.log(error)
				this.resultMessage = error.data.message
			}
		},
    initForm() {
      this.title = ''
      this.subTitle = ''
      this.workTime = ''
      this.contents = ''
      this.imgClass = ''
    }
	},
}
</script>
