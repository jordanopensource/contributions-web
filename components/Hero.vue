<template>
  <div>
    <section class="banner">
      <div class="content-container">
        <div class="content-header">
          <div class="divider"></div>
          <p>Jordan's Top</p>
          <p>Contributors</p>
        </div>
        <div class="para-section">
          <p>
            An aggregated list of Jordan’s GitHub users, ranked according to
            their Open Source commits and contributions. Provided to you by the
            Jordan Open Source Association (JOSA)
          </p>
        </div>
      </div>
      <img
        class="section-image"
        src="~/assets/images/hero/jordan-commits.svg"
        alt=""
        width="320"
        height="320"
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
  @apply flex flex-col mx-9 h-auto md:flex-row;
}

.content-container {
  @apply w-full text-white md:self-center pt-8;
}

.content-header {
  font-family: 'IBM Mono';
  @apply text-4xl md:text-4xl  lg:text-5xl tracking-wide font-normal md:mx-3 lg:mx-16;
}

.para-section {
  font-family: 'IBM Sans';
  @apply w-11/12 pt-7 text-xl lg:text-2xl font-normal md:mx-3 lg:mx-16 lg:w-9/12;
}

.section-image {
  @apply my-8 place-self-end w-8/12 md:w-5/12 lg:w-80 lg:mt-14 2xl:w-96 lg:mr-12;
}
</style>
