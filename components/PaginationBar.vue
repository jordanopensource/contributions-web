<template>
  <div class="pagination">
    <ul class="flex">
      <li class="px-1 lg:px-1">
        <button
          :class="currentPage == 1 ? 'disabled' : 'previous-page'"
          aria-label="Previous Page"
          @click="fetchCurrentPage(currentPage - 1)"
        >
          &lt; Previous
        </button>
      </li>
      <template v-for="i in pageCount">
        <li
          v-if="i == pageCount || i == 1 || Math.abs(i - currentPage) < 3"
          :key="i"
          class="hidden lg:inline"
        >
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
      </template>
      <li class="px-1 lg:px-1">
        <button
          :class="currentPage == pageCount ? 'disabled' : 'next-page'"
          aria-label="Next Page"
          @click="fetchCurrentPage(currentPage + 1)"
        >
          Next &gt;
        </button>
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
    period() {
      return this.$store.getters.getPeriod
    },
  },
  mounted() {
    this.$store.commit('setCurrentPage', 1)
  },
  methods: {
    fetchCurrentPage(page) {
      this.$store.commit(
        'setCurrentPage',
        this.limitNumberWithinRange(page, 1, this.pageCount),
      )
      this.$emit('fetch-current-page', page)
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
  @apply pt-7 pb-12 flex lg:pt-10 lg:pb-14 justify-center;
}

.pagination li {
  @apply m-1;
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
