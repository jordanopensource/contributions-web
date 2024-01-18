<template>
  <div class="bg-gray">
    <Hero />
    <div class="px-8 md:px-14 lg:px-24">
      <LastUpdated />
      <LazyHydrate when-visible>
        <Stats />
      </LazyHydrate>
      <LazyHydrate when-visible>
        <TopDevelopers />
      </LazyHydrate>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Hero from '../components/HomePageHero.vue'
import LastUpdated from '~/components/LastUpdated.vue'
export default {
  components: {
    Hero,
    Stats: () => import('../components/Stats.vue'),
    TopDevelopers: () => import('../components/TopDevelopers.vue'),
    LazyHydrate,
    LastUpdated,
  },
  mounted() {
    this.$store.commit('setPeriod', 'last_30_days')
    this.$store.commit('setSortBy', 'score')
    this.$store.commit('setShow', 'all')
  },
}
</script>
