<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="text-section has-border">
        <h3 class="hidden head-text md:block">Rank</h3>
        <h3 class="head-text px-0 lg:px-7">Organization</h3>
        <div class="flex justify-end w-full">
          <h3 class="head-text">Total</h3>
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
    <div v-if="organizations?.length <= 0" class="flex justify-center py-14">
      <p class="">Sorry, no organizations were found</p>
    </div>
    <PaginationBar v-else @fetch-current-page="fetchCurrentPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrganizationCard from './OrganizationCard.vue'
import PaginationBar from './PaginationBar.vue'
export default {
  name: 'OrganizationsList',
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
      orgSearchTerm: 'orgSearchTerm',
    }),
  },
  methods: {
    async fetchCurrentPage(page) {
      if (this.orgSearchTerm) {
        const response = await this.$axios.get(
          `/v1/orgs?page=${this.currentPage}&sort_by=${this.sortBy}&search=${this.orgSearchTerm}`,
        )
        this.$store.commit('setOrgs', response.data.orgs)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `/v1/orgs?page=${this.currentPage}&sort_by=${this.sortBy}`,
        )
        this.$store.commit('setOrgs', response.data.orgs)
        this.$store.commit('setPageCount', response.data.totalPages)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
* {
  @apply bg-white;
}

.section-container {
  @apply block bg-gray;
}

.content-conatiner {
  @apply bg-white;
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
