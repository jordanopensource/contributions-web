<template>
  <client-only>
    <div class="chart-section-container">
      <Apexchart
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
  padding: 10px;
}
.tooltip-number {
  color: #00b199;
  font-size: 1.3rem;
}

.tooltip-description {
  font-size: 0.7rem;
}
.tooltip-x-axis {
  font-weight: bold;
}
</style>
