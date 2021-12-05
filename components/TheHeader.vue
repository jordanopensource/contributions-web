<template>
  <header>
    <nav>
      <div class="nav-bar">
        <img
          class="w-36 h-10"
          src="~/assets/images/navbar/logo.svg"
          alt=""
          width="128"
          height="40"
          loading="eager"
        />
        <ul class="menu">
          <li class="menu-item">
            <a href="#">Stats</a>
          </li>
          <li class="menu-item">
            <a href="#">Users</a>
          </li>
          <li class="menu-item">
            <a href="#">Organizations</a>
          </li>
          <li class="menu-item">
            <a href="#">Methodology</a>
          </li>
        </ul>
        <MobileMenuButton :is-open="isOpen" @ToggleIsOpen="ToggleIsOpen()" />
      </div>
      <MobileMenuItems :is-open="isOpen" />
    </nav>
  </header>
</template>

<script>
import MobileMenuButton from './MobileMenuButton.vue'
import MobileMenuItems from './MobileMenuItems.vue'
export default {
  name: 'TheHeader',
  components: {
    MobileMenuButton,
    MobileMenuItems,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    ToggleIsOpen() {
      if (this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Sans';
  background-color: #1a1f21;
}

li a {
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}

li a:hover {
  color: #73bc86;
}

.menu-item {
  @apply inline-block lg:mx-7;
}

.menu {
  @apply text-white hidden lg:flex font-medium text-lg lg:text-xl w-full justify-end;
}

.nav-bar {
  @apply flex items-center py-6 mx-8 md:mx-11 lg:ml-24 md:py-11;
}
</style>
