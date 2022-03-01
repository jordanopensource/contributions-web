<template>
  <div class="flex mx-8 h-36 lg:h-48 content-center has-border pb-3">
    <p class="rank hidden md:block">{{ rank }}.</p>
    <div class="image-container">
      <img class="image" :src="imageUrl" alt="avatar" width="80" height="80" />
      <span class="image-filter"></span>
    </div>

    <div class="block w-full pl-2 lg:px-3 mt-8 lg:mt-12">
      <div class="flex flex-col">
        <h3 class="full-name">{{ name }}</h3>
        <p class="user-name">{{ username }}</p>
      </div>
    </div>
    <div class="self-center">
      <div class="block text-right">
        <div class="flex flex-col pb-2 pt-5">
          <p class="counters">Count</p>
          <p class="blue">{{ repositoriesNumber }}</p>
        </div>
        <div class="flex flex-col">
          <p class="counters">Stars</p>
          <p class="blue-green">{{ repositoriesStars }}</p>
        </div>
        <div class="flex flex-col">
          <p class="counters">Members</p>
          <p class="blue-green">{{ membersCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    name: { type: String, default: '' },
    username: { type: String, required: true },
    repositoriesNumber: { type: Number, default: 0 },
    repositoriesStars: { type: Number, required: true },
    membersCount: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    rank: { type: Number, required: true, default: 0 },
  },
}
</script>

<style lang="postcss" scoped>
.rank {
  font-family: 'IBM Sans';
  width: 3.2em;
  @apply text-lg text-right pr-1 self-center lg:text-2xl tracking-widest lg:pr-4;
}

.counters {
  font-size: 0.7rem;
  @apply lg:text-sm;
}

.full-name {
  font-family: 'IBM Sans';
  @apply text-sm font-semibold lg:text-lg;
}

.user-name {
  font-family: 'IBM Mono';
  @apply text-xs lg:text-sm font-light;
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
  @apply w-12 h-12 lg:w-20 lg:h-20 rounded-full  object-contain;
}

.image-filter {
  @apply rounded-full -top-12 w-12 h-12 self-center object-contain relative block lg:w-20 lg:h-20 lg:-top-20;
  background: linear-gradient(
    to bottom,
    rgba(115, 188, 134, 0.7) 0%,
    rgba(0, 177, 153, 0.5) 80%
  );
}

.image-container {
  @apply self-center w-16 h-16 relative lg:w-20 lg:h-20;
}
</style>
