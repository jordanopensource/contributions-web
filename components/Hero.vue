<template>
  <div>
    <section class="banner">
      <div class="content-container">
        <div class="content-header">
          <div class="divider"></div>
          <p>Top Jordan's</p>
          <p>Contributors</p>
        </div>
        <div class="para-section">
          <p>
            A list of Github users in Jordan sorted by their open contributions.
          </p>
          <p>Provided to you by Jordan Open Source Association(JOSA)</p>
        </div>
      </div>
      <img
        class="section-image"
        src="~/assets/images/hero/jordan-commits.svg"
        alt=""
      />
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
  @apply flex flex-col px-9 h-auto md:flex-row  lg:px-24;
}

.content-container {
  @apply w-5/6 text-white md:self-center pt-8;
}

.content-header {
  font-family: 'IBM Mono';
  @apply text-4xl md:text-4xl  lg:text-5xl tracking-wide font-normal md:ml-2;
}

.para-section {
  font-family: 'IBM Sans';
  @apply w-11/12 pt-7 text-xl lg:text-2xl font-normal md:ml-2;
}

.section-image {
  @apply py-8 place-self-end w-3/5 md:w-2/5 lg:w-1/4 lg:mt-5 lg:mr-12;
}
</style>
