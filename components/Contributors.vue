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
          :score="user.score"
          :contributions="user.commitsTotalCount"
          :rank="user.currentRank"
        />
      </div>
    </div>
    <PaginationBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserCard from './UserCard.vue'
import PaginationBar from './PaginationBar.vue'
export default {
  name: 'Contributors',
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
    }),
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
