<template>
  <div>
    <Hero />
    <Stats />
    <TopDevelopers />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Stats from '../components/Stats.vue'
import TopDevelopers from '../components/TopDevelopers.vue'
export default {
  components: {
    Hero,
    Stats,
    TopDevelopers,
  },
}
</script>
