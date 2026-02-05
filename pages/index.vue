<template>
  <div class="bg-gray">
    <Hero />
    <div class="px-8 md:px-14 lg:px-24">
      <LastUpdated />
      <Stats />
      <TopDevelopers />
    </div>
  </div>
</template>

<script>
import Hero from '../components/HomePageHero.vue'
import LastUpdated from '~/components/LastUpdated.vue'
export default {
  components: {
    Hero,
    Stats: () => import('../components/Stats.vue'),
    TopDevelopers: () => import('../components/TopDevelopers.vue'),
    LastUpdated,
  },
  mounted() {
    this.$store.commit('setPeriod', 'last_30_days')
    this.$store.commit('setSortBy', 'score')
    this.$store.commit('setShow', 'all')
  },
}
</script>
