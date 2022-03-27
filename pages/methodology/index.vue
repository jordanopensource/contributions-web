<template>
  <Hero title="Methodology" />
</template>

<script>
export default {
  name: 'MethodologyPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
  },
}
</script>

<style lang="postcss" scoped></style>
