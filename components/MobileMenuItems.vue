<template>
  <div :class="isOpen ? 'block lg:hidden' : 'hidden lg:hidden'">
    <ul class="mobile-menu">
      <li class="py-4 border-gray">
        <nuxt-link to="/contributors">contributors</nuxt-link>
      </li>
      <li class="py-4 border-gray">
        <nuxt-link to="/organizations">Organizations</nuxt-link>
      </li>
      <li class="py-4">
        <nuxt-link to="/methodology">Methodology</nuxt-link>
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
  @apply mx-8 py-8 text-white font-medium text-base md:mx-11;
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
