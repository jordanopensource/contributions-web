<template>
  <div class="bg-gray">
    <buildInfoBanner v-if="this.$config.TARGET_ENV==='development'"/>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
