<template>
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
</template>

<script>
export default {
  name: 'MobileMenuButton',
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
