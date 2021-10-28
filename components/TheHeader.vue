<template>
  <header>
    <nav>
      <div class="flex justify-between items-center p-8 md:px-28 md:py-11">
        <img class="w-13 h-10" src="~/assets/images/navbar/logo.svg" alt="" />
        <ul class="text-white hidden md:flex font-medium text-lg">
          <li class="inline-block px-4">
            <a class="" href="#">Stats</a>
          </li>
          <li class="inline-block px-4">
            <a class="" href="#">Users</a>
          </li>
          <li class="inline-block px-4">
            <a class="" href="#">Organizations</a>
          </li>
          <li class="inline-block px-4">
            <a class="" href="#">Methodology</a>
          </li>
        </ul>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none" @click="OnClick">
            <img
              v-if="isOpen"
              class="w-9 h-9"
              src="~/assets/images/navbar/x-circle.svg"
              alt=""
            />
            <img
              v-else
              class="w-9 h-9"
              src="~/assets/images/navbar/bars-solid.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div :class="isOpen ? 'block md:hidden' : 'hidden md:hidden'">
        <ul class="px-8 py-8 text-white font-medium text-base">
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
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    OnClick() {
      if (this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    },
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'IBM Sans';
  font-style: normal;
  font-display: swap;
  src: url('~assets/fonts/IBMPlexSansArabic-Medium.ttf') format('truetype');
}

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

.border-gray {
  border-bottom: solid 2px #22292c;
}
</style>
