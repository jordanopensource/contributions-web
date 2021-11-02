<template>
  <div class="lg:hidden flex items-center">
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
  props: {
    isOpen: Boolean,
  },
  methods: {
    OnClick() {
      this.$emit('ToggleIsOpen')
    },
  },
}
</script>
