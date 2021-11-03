<template>
  <div>
    <article class="section-container">
      <div class="header-title">
        <div class="divider"></div>
        <h1>Top Developers in Jordan</h1>
      </div>
      <FilterSection class="mt-8" />
      <Contributors />
    </article>
  </div>
</template>

<script>
import FilterSection from './FilterSection.vue'
import Contributors from './Contributors.vue'
export default {
  name: 'TopDevelopers',
  components: {
    FilterSection,
    Contributors,
  },
}
</script>

<style lang="postcss" scoped>
.section-container {
  background-color: #edeeef;
}
.divider {
  @apply w-10 lg:w-14 border-t-2 border-black;
}
.header-title {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  @apply font-normal ml-8 pt-16 md:ml-12 lg:ml-20 lg:text-4xl lg:font-light 2xl:ml-24;
}
</style>
