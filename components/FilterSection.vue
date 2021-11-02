<template>
  <div class="section-container">
    <div class="content-conatiner">
      <div class="filter-section">
        <h1 class="filter-text">Filter</h1>
      </div>
      <div class="sort-section has-border">
        <h6 class="text-xs font-bold">Sort by:</h6>
        <div class="input-section"></div>
        <label class="text-xs">
          <input type="radio" />
          Score
        </label>
        <label class="text-xs px-10">
          <input type="radio" />
          Contributions
        </label>
      </div>
      <div class="sort-section has-border">
        <h6 class="text-xs font-bold">Show:</h6>
        <div class="input-section"></div>
        <label class="text-xs">
          <input type="radio" />
          All
        </label>
        <label class="text-xs px-14">
          <input type="radio" />
          Only JOSA members
        </label>
      </div>
      <div class="sort-section">
        <h6 class="text-xs font-bold">Count:</h6>
        <div class="input-section"></div>
        <label class="text-xs">
          <input type="checkbox" />
          Commits
        </label>
        <label class="text-xs px-5">
          <input type="checkbox" />
          Contribution
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSection',
}
</script>

<style lang="postcss" scoped>
.section-container {
  @apply block w-11/12 mx-auto;
}

.content-conatiner {
  background-color: #f4f4f5;
  @apply mx-3 mt-5;
}

.filter-section {
  @apply flex mx-6 pt-6 pb-1 border-b-2 border-dotted border-black;
}

.filter-text {
  font-family: 'IBM Sans';
  text-transform: uppercase;
  @apply text-xl;
}

.has-border {
  @apply border-b-2 border-dotted border-black;
}

.sort-section {
  @apply mx-6 pt-6 pb-4;
}

.input-section {
  @apply pt-2;
}
</style>
