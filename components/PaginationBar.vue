<template>
  <div class="pagination">
    <ul>
      <span class="px-4 lg:px-1"
        ><a
          :class="currentPage == 1 ? 'disabled' : 'previous-page'"
          @click="fetchCurrentPage(currentPage - 1)"
        >
          &lt; Previous</a
        ></span
      >
      <span v-for="i in pageCount" :key="i" class="hidden lg:inline">
        <li v-if="i == pageCount || i == 1 || Math.abs(i - currentPage) < 3">
          <a
            :class="{
              current: currentPage === i,
              last: i == pageCount && Math.abs(i - currentPage) > 3,
              first: i == 1 && Math.abs(i - currentPage) > 3,
            }"
            class="px-1"
            @click="fetchCurrentPage(i)"
            >{{ i }}</a
          >
        </li>
      </span>
      <span class="px-4 lg:px-1"
        ><a
          :class="currentPage == pageCount ? 'disabled' : 'next-page'"
          @click="fetchCurrentPage(currentPage + 1)"
          >Next &gt;</a
        ></span
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaginationBar',
  computed: {
    pageCount() {
      return this.$store.getters.getPageCount
    },
    currentPage() {
      return this.$store.getters.getCurrentPage
    },
    sortBy() {
      return this.$store.getters.getSortBy
    },
  },
  methods: {
    async fetchCurrentPage(page) {
      this.$store.commit(
        'setCurrentPage',
        this.limitNumberWithinRange(page, 1, this.pageCount)
      )
      const response = await this.$axios.get(
        `http://localhost:8080/api/v1/users?page=${this.currentPage}&sort_by=${this.sortBy}`
      )
      this.$store.commit('setUsers', response.data.users.docs)
    },
    limitNumberWithinRange(num, min, max) {
      return Math.min(Math.max(parseInt(num), min), max)
    },
  },
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Mono';
}
.pagination {
  @apply pt-7 pb-12 mx-3 px-5 flex lg:mx-0 lg:pt-10 lg:pb-14 justify-center;
}

.pagination li {
  display: inline-block;
  margin: 10px;
}

.previous-page,
.next-page {
  color: #00b199;
}

.pagination a.disabled {
  @apply cursor-default font-light;
  opacity: 0.25;
}
.pagination a.disabled:hover {
  @apply cursor-default;
}

.pagination .current {
  @apply px-1 py-0;
  background-color: #00b199;
  color: #fff;
  border-radius: 17%;
}
.pagination ul {
  @apply p-0 list-none;
}
.pagination li {
  @apply inline m-1;
}
.pagination a.first::after {
  cursor: default;
  content: '\2800\22ef';
}
.pagination a.last::before {
  cursor: default;
  content: '\22ef\2800';
}

.pagination a {
  cursor: pointer;
}
</style>
