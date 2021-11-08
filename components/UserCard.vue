<template>
  <div class="flex mx-8 h-32 lg:h-40 content-center has-border pb-3">
    <h1 class="rank">1.</h1>
    <img
      class="image-filter image"
      src="~/assets/images/stats/icon-users.svg"
      alt=""
    />
    <div class="block w-full pl-2 lg:px-5 mt-6 lg:mt-8">
      <div class="flex flex-col">
        <h1 class="full-name">Mohamad Berjawi</h1>
        <h1 class="user-name">thread-koder</h1>
      </div>
    </div>
    <div class="self-center">
      <div class="block text-right">
        <div class="flex flex-col pb-2 pt-5">
          <p class="text-xs">Score</p>
          <p class="blue">24324</p>
        </div>
        <div class="flex flex-col">
          <p class="text-xs">Contributions</p>
          <p class="blue-green">7689</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
}
</script>

<style lang="postcss" scoped>
.rank {
  font-family: 'IBM Sans';
  @apply text-lg text-center pr-1 self-center lg:text-2xl tracking-widest lg:pr-10;
}

.full-name {
  font-family: 'IBM Sans';
  @apply text-sm font-semibold lg:text-lg;
}

.user-name {
  font-family: 'IBM Mono';
  @apply text-sm font-light;
}

.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.blue {
  @apply lg:text-xl;
  color: #0b97ac;
}

.blue-green {
  @apply lg:text-xl;
  color: #00b199;
}

.image {
  @apply w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-gray-100 shadow-sm self-center object-contain;
}

.image-filter {
  background: linear-gradient(
    to bottom,
    rgba(0, 177, 153, 0.5) 0%,
    rgba(115, 188, 134, 0.7) 100%
  );

  mix-blend-mode: multiply;
}
</style>
