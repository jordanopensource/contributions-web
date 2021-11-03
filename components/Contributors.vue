<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="text-section has-border">
        <h1 class="head-text">Rank</h1>
        <h1 class="head-text px-4">User</h1>
        <div class="flex justify-end w-full">
          <h1 class="head-text">Total</h1>
        </div>
      </div>
      <UserCard />
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
  name: 'Contributors',
  components: {
    UserCard,
  },
}
</script>

<style lang="postcss" scoped>
* {
  @apply bg-white;
}

.section-container {
  @apply block w-11/12 mx-auto;
}

.content-conatiner {
  @apply mx-3 bg-white;
}

.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.text-section {
  @apply flex flex-nowrap mx-8;
}

.head-text {
  font-family: 'IBM Sans';
  text-transform: uppercase;
  @apply text-lg;
}
</style>
