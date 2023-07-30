<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="text-section has-border">
        <h1 class="hidden head-text md:block">Rank</h1>
        <h1 class="head-text px-0 lg:px-7">Organization</h1>
        <div class="flex justify-end w-full">
          <h1 class="head-text">Total</h1>
        </div>
      </div>
      <div>
        <OrganizationCard
          v-for="org in organizations"
          :key="org.github_id"
          :username="org.username"
          :name="org.name"
          :image-url="org.avatar_url"
          :repositories-stars="org.repositories_stars_count"
          :repositories-number="org.repositories_count"
          :members-count="org.members_count"
          :profile-url="org.profile_url"
          :rank="org.currentRank"
        />
      </div>
    </div>
    <PaginationBar @fetch-current-page="fetchCurrentPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrganizationCard from './OrganizationCard.vue'
import PaginationBar from './PaginationBar.vue'
export default {
  name: 'Organizations',
  components: {
    OrganizationCard,
    PaginationBar,
  },
  props: {
    organizations: { type: Array, required: true },
  },
  computed: {
    ...mapState({
      sortBy: 'orgs_sortBy',
      currentPage: 'currentPage',
    }),
  },
  methods: {
    async fetchCurrentPage(page) {
      const response = await this.$axios.get(
        `/v1/orgs?page=${this.currentPage}&sort_by=${this.sortBy}`
      )
      this.$store.commit('setOrgs', response.data.orgs)
    },
  },
}
</script>

<style lang="postcss" scoped>
* {
  @apply bg-white;
}

.section-container {
  @apply block w-11/12 mx-auto lg:mx-0 bg-gray;
}

.content-conatiner {
  @apply mx-3 lg:mx-0 bg-white;
}

.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.text-section {
  @apply flex flex-nowrap mx-8 py-3 pt-7 lg:pb-2 lg:pt-10;
}

.head-text {
  font-family: 'IBM Sans';
  text-transform: uppercase;
  @apply text-lg lg:text-xl;
}
</style>
