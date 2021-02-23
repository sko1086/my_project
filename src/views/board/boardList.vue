<template>
  <div class="area-wrap">
    <h2>게시판</h2>
    <b-table
      striped
      hover
      :items="postItems"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination v-model="currentPage" :total-rows="postLength" :per-page="perPage" align="center"></b-pagination>
    <div class="btn-box">
      <b-button @click="writeContent">글쓰기</b-button>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/post.js';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data() {
		return {
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 보여줄 갯수
      postItems: null,
      postLength: null,
      fields: [
        {
          key: "listNum",
          label: "번호"
        },
        {
          key: "title",
          label: "제목"
        },
        {
          key: "nickname",
          label: "닉네임"
        },
        {
          key: "date",
          label: "날짜"
        }
      ],
		};
	},
  methods: {
    async getListData() {
      try {
				const {
					data: { posts: postItems },
        } = await fetchPosts();
        const listtItems = postItems
        let listNum = 1
        const addItems = listtItems.map(sortItems => {
          console.log('dd')
          return {
            ...sortItems,
            listNum: listNum++
          }
        })
        this.postItems = addItems.reverse()
        this.postLength = addItems.length
				return;
			} catch (error) {
				console.log(error);
			}
    },
    rowClick(postItems) {
      this.$router.push({
        path: `/board/detail/${postItems._id}`
      });
    },
    rowLength(postItems) {
      return postItems.length;
    },
    writeContent() {
      this.$router.push({
        path: `/board/create`
      });
    }
  },
  created() {
    this.getListData()
  },
  computed: {
    rows() {
      return this.postItems.length;
    }
  }
}
</script>

<style>

</style>