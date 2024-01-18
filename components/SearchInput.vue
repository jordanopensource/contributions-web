<template>
  <div class="max-w-md">
    <div
      class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        id="search"
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        :placeholder="placeholder"
        @input="onChange"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from '~/utils/debounce'
export default {
  name: 'SearchInput',
  props: {
    placeholder: { type: String, default: 'Search something..' },
  },
  created() {
    this.onChange = debounce((event) => {
      const searchTerm = event.target.value
      this.$emit('on-search', searchTerm)
    }, 400)
  },
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Sans';
  color: #1a1f21;
}
</style>
