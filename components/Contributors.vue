<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="text-section has-border">
        <h1 class="hidden head-text md:block">Rank</h1>
        <h1 class="head-text px-0 lg:px-7">User</h1>
        <div class="flex justify-end w-full">
          <h1 class="head-text">Total</h1>
        </div>
      </div>
      <div>
        <UserCard
          v-for="user in users"
          :key="user.github_id"
          :username="user.username"
          :name="user.name"
          :image-url="user.avatar_url"
          :profile-url="user.profile_url"
          :score="user.score"
          :contributions="user.contributionsTotalCount"
          :rank="user.currentRank"
          :is-josa-member="user.isJOSAMember"
        />
      </div>
    </div>
    <div v-if="users?.length <= 0" class="flex justify-center py-14">
      <p class="">Sorry, no users were found</p>
    </div>
    <PaginationBar v-else @fetch-current-page="fetchCurrentPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserCard from './UserCard.vue'
import PaginationBar from './PaginationBar.vue'
export default {
  name: 'ContributorsList',
  components: {
    UserCard,
    PaginationBar,
  },
  props: {
    users: { type: Array, required: true },
  },
  computed: {
    ...mapState({
      sortBy: 'sortBy',
      currentPage: 'currentPage',
      period: 'period',
      show: 'show',
      userSearchTerm: 'userSearchTerm',
      countType: 'countType',
    }),
  },
  methods: {
    async fetchCurrentPage(page) {
      if (this.userSearchTerm) {
        const response = await this.$axios.get(
          `v1/users?page=${this.currentPage}&sort_by=${this.sortBy}&period=${this.period}&contributors=${this.show}&search=${this.userSearchTerm}&type=${this.countType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `v1/users?page=${this.currentPage}&sort_by=${this.sortBy}&period=${this.period}&contributors=${this.show}&type=${this.countType}`,
        )

        this.$store.commit('setUsers', response.data.users)
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
