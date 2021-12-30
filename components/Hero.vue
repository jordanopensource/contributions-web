<template>
  <div>
    <section class="banner">
      <div class="content-container">
        <div class="content-header">
          <div class="divider"></div>
          <h1>Contributors</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="postcss" scoped>
* {
  background-color: #22292c;
}

.divider {
  @apply w-14 lg:w-20 pb-5 border-t-4;
}

.banner {
  @apply flex flex-col mx-9 h-96 md:flex-row;
}

.content-container {
  @apply w-full text-white md:self-center pt-8;
}

.content-header {
  font-family: 'IBM Mono';
  @apply text-4xl md:text-4xl  lg:text-5xl tracking-wide font-normal md:mx-3 lg:mx-16;
}
</style>
