<template>
  <div v-if="lastUpdated" class="flex justify-end mr-24 pt-5">
    <p class="opacity-50">
      {{ lastUpdated }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LastUpdated',
  data() {
    return {
      lastUpdated: null,
    }
  },
  async fetch() {
    const response = await this.$axios.get('/v1/stats/updated')
    const year = new Date(response.data.lastUpdated).getFullYear()
    const month = new Date(response.data.lastUpdated).toLocaleString('en-GB', {
      month: '2-digit',
    })
    const day = new Date(response.data.lastUpdated).toLocaleString('en-GB', {
      day: '2-digit',
    })
    const time = new Date(response.data.lastUpdated).toLocaleTimeString('en-GB')
    this.lastUpdated = `The information on this site was last updated at ${year}-${month}-${day} ${time}`
  },
}
</script>

<style lang="postcss" scoped>
.cards-container {
  @apply block py-2 w-11/12 mx-auto lg:flex lg:flex-nowrap lg:justify-center;
}
</style>
