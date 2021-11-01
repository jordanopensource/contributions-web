<template>
  <article class="section-container">
    <div class="header">
      <div class="divider"></div>
      <h1>Jordan Stats</h1>
    </div>

    <div class="cards-container">
      <Card
        v-for="stat in stats"
        :key="stat.id"
        :count="stat.count"
        :description="stat.description"
        :color="stat.color"
        :image="stat.image"
      />
    </div>
  </article>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Stats',
  components: {
    Card,
  },
  data() {
    return {
      stats: [
        {
          id: 1,
          count: 23556,
          description: 'Commits from users in Jordan in last 12 months',
          color: 'blue',
          image: 'icon-commits.svg',
        },
        {
          id: 2,
          count: 235,
          description: 'Github users from Jordan',
          color: 'blue-green',
          image: 'icon-users.svg',
        },
        {
          id: 3,
          count: 98,
          description: 'Organizations in Jordan on Github',
          color: 'green',
          image: 'icon-organization.svg',
        },
      ],
    }
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
  @apply font-normal ml-8 pt-16 lg:ml-20 lg:text-4xl lg:font-light 2xl:ml-24;
}

.divider {
  @apply w-10 lg:w-10 border-t-2 border-black;
}

.cards-container {
  @apply block py-2 w-11/12 mx-auto lg:flex lg:flex-nowrap lg:justify-center;
}
</style>
