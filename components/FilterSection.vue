<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="filter-section has-border">
        <h1 class="filter-text">Filter</h1>
        <button
          class="outline-none lg:hidden"
          aria-label="Expand Filter Section"
          @click="ToggleIsOpen"
        >
          <img
            class="w-6 h-6"
            src="~/assets/images/filter/icon-small-chevron.svg"
            alt="small chevron"
          />
        </button>
      </div>
      <InputsSection :is-open="isOpen" />
    </div>
  </div>
</template>

<script>
import InputsSection from './InputsSection.vue'
export default {
  name: 'FilterSection',
  components: {
    InputsSection,
  },
  data() {
    return {
      isOpen: true,
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
.section-container {
  @apply block w-11/12 lg:w-1/3 mx-auto lg:mx-0 lg:mr-5 lg:bg-lightgrey;
}

.content-conatiner {
  background-color: #f4f4f5;
  @apply mx-3 lg:mx-0;
}

.filter-section {
  @apply flex mx-8 pt-6 lg:pt-10 lg:mx-8 pb-2 justify-between;
}

.filter-text {
  font-family: 'IBM Sans';
  text-transform: uppercase;
  @apply text-xl;
}

.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.sort-section {
  @apply mx-6 pt-6 pb-4;
}

.contributions-radio {
  margin-left: 2.8rem;
}
</style>
