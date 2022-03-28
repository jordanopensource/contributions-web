<template>
  <div class="page-container">
    <Hero title="Contributors" />
    <div class="header-text">
      <div class="divider-black"></div>
      <h2>About JOSA</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MethodologyPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
  },
}
</script>

<style lang="postcss" scoped>
.page-container {
  @apply bg-gray;
}

.top-developers {
  @apply 2xl:mx-3;
}

.flex-container {
  @apply items-center md:flex md:justify-between;
}

.divider-black {
  @apply w-10 lg:w-10 border-t-2 border-black;
}

.header-text {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  line-height: 1em;
  @apply font-normal mx-7 pb-4 pt-16 md:mx-12 lg:mx-24;
}
</style>
