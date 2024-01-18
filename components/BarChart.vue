<template>
  <client-only>
    <div class="bar-chart-section-container">
      <Apexchart
        :height="'100%'"
        :type="chartOptions.type"
        :options="chartOptions.chartOptions"
        :series="chartOptions.series"
      ></Apexchart>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'AreaChart',
  props: {
    chartOptions: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.bar-chart-section-container {
  @apply bg-white py-0 md:py-10;
}

.bar-tooltip {
  font-family: 'IBM Sans';
  @apply p-2 md:p-2.5;
}
.bar-tooltip-number {
  color: #0b97ac;
  @apply text-sm md:text-3xl;
}

.bar-tooltip-description {
  @apply text-xs md:text-base;
}
.bar-tooltip-x-axis {
  font-weight: bold;
  @apply text-xs md:text-lg;
}
</style>
