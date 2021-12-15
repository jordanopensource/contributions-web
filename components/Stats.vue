<template>
  <article class="section-container">
    <div class="header">
      <div class="divider"></div>
      <h2>Jordan Stats</h2>
    </div>

    <div class="cards-container">
      <Card
        :count="commitsLastMonth"
        description="Commits from users in Jordan in the 30 days"
        color="blue"
        image="icon-commits.svg"
        img-size="w-10"
        alt-text="Commits"
      />
      <Card
        :count="usersCount"
        description="Github users from Jordan"
        color="blue-green"
        image="icon-users.svg"
        img-size="w-16"
        alt-text="Users"
      />
      <Card
        :count="orgsCount"
        description="Organizations in Jordan on Github"
        color="green"
        image="icon-organization.svg"
        img-size="w-12"
        alt-text="Organizations"
      />
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import Card from './Card.vue'
export default {
  name: 'Stats',
  components: {
    Card,
  },
  async fetch() {
    let response = await this.$axios.get(`/v1/orgs?limit=1`)
    this.$store.commit('setOrgsCount', response.data.orgs.totalDocs)
    response = await this.$axios.get('/v1/users')
    this.$store.commit('setUsersCount', response.data.users.totalDocs)
    this.$store.commit('setUsers', response.data.users.docs)
    this.$store.commit('setPageCount', response.data.users.totalPages)
    response = await this.$axios.get('/v1/contributions')
    this.$store.commit('setCommitsLastMonth', response.data.commits_last_month)
  },
  computed: {
    ...mapState({
      orgsCount: 'orgsCount',
      usersCount: 'usersCount',
      commitsLastMonth: 'commitsLastMonth',
    }),
  },
}
</script>

<style lang="postcss" scoped>
.section-container {
  background-color: #edeeef;
}

.header {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  @apply font-normal ml-8 pt-16 lg:pt-24 lg:pb-5 md:ml-12 lg:ml-20 lg:text-4xl lg:font-light 2xl:ml-24;
}

.divider {
  @apply w-10 lg:w-10 border-t-2 border-black;
}

.cards-container {
  @apply block py-2 w-11/12 mx-auto lg:flex lg:flex-nowrap lg:justify-center;
}
</style>
