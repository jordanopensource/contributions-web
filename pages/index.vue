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
import Hero from '../components/Hero.vue'
import Stats from '../components/Stats.vue'
import TopDevelopers from '../components/TopDevelopers.vue'
export default {
  components: {
    Hero,
    Stats,
    TopDevelopers,
    LazyHydrate,
  },
}
</script>
