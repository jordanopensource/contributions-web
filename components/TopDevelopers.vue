<template>
  <div>
    <article class="section-container">
      <div class="header-title">
        <div class="divider"></div>
        <h2>Top Developers in Jordan</h2>
      </div>
      <div class="filter-component">
        <FilterSection class="lg:mt-0 lg:order-2" />
        <Contributors :users="users" class="lg:grow lg:pl-6" />
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FilterSection from './FilterSection.vue'
import Contributors from './Contributors.vue'
export default {
  name: 'TopDevelopers',
  components: {
    FilterSection,
    Contributors,
  },
  async fetch() {
    const response = await this.$axios.get('/v1/users')
    this.$store.commit('setUsers', response.data.users)
    this.$store.commit('setPageCount', response.data.totalPages)
  },
  computed: {
    ...mapState({
      users: 'users',
    }),
  },
}
</script>

<style lang="postcss" scoped>
* {
  background-color: #edeeef;
}
.divider {
  @apply w-10 lg:w-14 border-t-2 border-black;
}
.header-title {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  @apply font-normal mx-8 pt-16 lg:pt-24 md:mx-12 lg:mx-20 lg:text-4xl lg:font-light 2xl:mx-24;
}

.filter-component {
  @apply lg:flex mx-auto mt-10 lg:mt-20 lg:w-11/12;
}
</style>
