<template>
  <div :class="isOpen ? 'block lg:hidden' : 'hidden lg:hidden'">
    <ul class="mobile-menu">
      <li class="pb-4 border-gray">
        <a href="#">Stats</a>
      </li>
      <li class="py-4 border-gray">
        <a href="#">Users</a>
      </li>
      <li class="py-4 border-gray">
        <a href="#">Organizations</a>
      </li>
      <li class="py-4">
        <a href="#">Methodology</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileMenuItems',
  props: {
    isOpen: Boolean,
  },
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Sans';
}
.mobile-menu {
  @apply px-8 py-8 text-white font-medium text-base;
}

.border-gray {
  border-bottom: solid 2px #22292c;
}

li a {
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}

li a:hover {
  color: #73bc86;
}
</style>
