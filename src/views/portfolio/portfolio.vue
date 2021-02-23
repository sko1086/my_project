<template>
  <div class="area-wrap">
    <div id="content">
      <ul class="pr_list">
        <li v-for="item in portfolioItems" :key="item._id">
          <a href="#" class="btn_view">
            <div class="pr_img" :class="item.imgClass"></div>
            <p class="pr_title">{{ item.title }}</p>
            <div class="blind">
              <div class="bln_in">
                <span class="blsp_1">{{ item.subTitle }}</span>
                <span class="blsp_2">작업기간 : {{ item.workTime }}</span>
                <span class="blsp_3">
                  {{ item.contents }}
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPortfolioData } from '@/api/portfolio'

export default {
  data() {
    return {
      portfolioItems: null
    }
  },
  methods: {
    
  },
  async created() {
    try {
      const {
				data: { data: portfolioItems },
			} = await getPortfolioData()
      this.portfolioItems = portfolioItems
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>