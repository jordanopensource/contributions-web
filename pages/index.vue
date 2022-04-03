<template>
  <div class="bg-gray">
    <Hero />
    <LazyHydrate when-visible>
      <Stats />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TopDevelopers />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import Hero from '../components/HomePageHero.vue'
export default {
  components: {
    Hero,
    Stats: () => import('../components/Stats.vue'),
    TopDevelopers: () => import('../components/TopDevelopers.vue'),
    LazyHydrate,
  },
  mounted() {
    this.$store.commit('setPeriod', 'last_30_days')
    this.$store.commit('setSortBy', 'score')
    this.$store.commit('setShow', 'all')
  },
}
</script>
