<template>
  <Hero />
</template>

<script>
export default {
  name: 'ContributorsPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
  },
}
</script>
