<template>
  <client-only>
    <div class="chart-section-container">
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
.chart-section-container {
  @apply m-auto w-11/12 bg-white py-0 px-0 md:px-7 md:py-10;
}

.tooltip {
  font-family: 'IBM Sans';
  @apply p-2 md:p-2.5;
}
.tooltip-number {
  color: #00b199;
  @apply text-sm md:text-3xl;
}

.tooltip-description {
  @apply text-xs md:text-base;
}
.tooltip-x-axis {
  font-weight: bold;
  @apply text-xs md:text-lg;
}
</style>
