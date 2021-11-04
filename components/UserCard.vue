<template>
  <div class="flex mx-8 h-32 content-center has-border pb-3">
    <h1 class="rank">1.</h1>
    <img
      class="image-filter image"
      src="~/assets/images/stats/icon-users.svg"
      alt=""
    />
    <div class="block w-full px-4 mt-5">
      <div class="flex flex-col">
        <h1 class="full-name">Mohamad Berjawi</h1>
        <h1 class="user-name">thread-koder</h1>
      </div>
    </div>
    <div class="self-center">
      <div class="block text-right">
        <div class="flex flex-col">
          <p class="text-xs">Score</p>
          <p class="blue">24324</p>
        </div>
        <div class="flex flex-col">
          <p class="text-xs">Contributions</p>
          <p class="green">7689</p>
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
  @apply text-lg text-center pr-2 self-center;
}

.full-name {
  font-family: 'IBM Sans';
  @apply text-sm font-semibold;
}

.user-name {
  font-family: 'IBM Mono';
  @apply text-sm font-light;
}

.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.blue {
  color: #0b97ac;
}

.green {
  color: #73bc86;
}

.image {
  @apply w-20 h-20 rounded-full border border-gray-100 shadow-sm self-center;
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
