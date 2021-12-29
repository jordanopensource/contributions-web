<template>
  <div class="pagination">
    <ul>
      <li>
        <span class="px-1 lg:px-1"
          ><button
            :class="currentPage == 1 ? 'disabled' : 'previous-page'"
            aria-label="Previous Page"
            @click="fetchCurrentPage(currentPage - 1)"
          >
            &lt; Previous
          </button></span
        >
      </li>
      <span v-for="i in pageCount" :key="i" class="hidden lg:inline">
        <li v-if="i == pageCount || i == 1 || Math.abs(i - currentPage) < 3">
          <button
            :class="{
              current: currentPage === i,
              last: i == pageCount && Math.abs(i - currentPage) > 3,
              first: i == 1 && Math.abs(i - currentPage) > 3,
            }"
            class="px-1"
            :aria-label="'Page ' + i"
            @click="fetchCurrentPage(i)"
          >
            {{ i }}
          </button>
        </li>
      </span>
      <li>
        <span class="px-1 lg:px-1"
          ><button
            :class="currentPage == pageCount ? 'disabled' : 'next-page'"
            aria-label="Next Page"
            @click="fetchCurrentPage(currentPage + 1)"
          >
            Next &gt;
          </button></span
        >
      </li>
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
    period() {
      return this.$store.getters.getPeriod
    },
  },
  methods: {
    async fetchCurrentPage(page) {
      this.$store.commit(
        'setCurrentPage',
        this.limitNumberWithinRange(page, 1, this.pageCount)
      )
      const response = await this.$axios.get(
        `/v1/users?page=${this.currentPage}&sort_by=${this.sortBy}&period=${this.period}`
      )
      this.$store.commit('setUsers', response.data.users)
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
  margin: 1px;
}

.previous-page,
.next-page {
  color: #00b199;
}

.pagination button.disabled {
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
.pagination button.first::after {
  cursor: default;
  content: '\2800\22ef';
}
.pagination button.last::before {
  cursor: default;
  content: '\22ef\2800';
}

.pagination button {
  cursor: pointer;
}
</style>
