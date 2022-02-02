<template>
  <div class="page-container">
    <Hero />
    <div class="area-chart-section">
      <div class="chart-header">
        <div class="divider-black"></div>
        <div class="flex-container">
          <h2 class="pb-3 lg:pb-0">Total Users in Jordan</h2>
          <ChartsPeriodDropdown
            class="justify-self-end"
            @on-chart-period-changed="onChartPeriodChanged"
          />
        </div>
      </div>
      <AreaChart :chart-options="areaChartData" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContributorsPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
    AreaChart: () => import('~/components/AreaChart.vue'),
  },
  data() {
    return {
      areaChartData: {
        type: 'area',
        chartOptions: {},
        series: [],
      },
    }
  },
  async mounted() {
    const lastYear = new Date().getFullYear() - 1
    const response = await this.$axios.get(
      `/v1/stats/contributors?period=${lastYear}-01-01_${lastYear}-12-31&type=users&aggregation=month`
    )
    const stats = response.data.usersStats[lastYear]

    this.generateAreaChartOptions(stats)
  },
  methods: {
    async onChartPeriodChanged(period) {
      if (period === 'this_year') {
        await this.thisYearCharts()
      } else if (period === 'last_year') {
        await this.lastYearCharts()
      } else if (period === 'last_month') {
        await this.lastMonthCharts()
      }
    },

    generateAreaChartOptions(stats) {
      const months = [...Array(12).keys()].map((key) =>
        new Date(0, key).toLocaleString('default', {
          month: 'short',
        })
      )
      const lastYear = new Date().getFullYear() - 1

      this.areaChartData.chartOptions = {
        chart: {
          id: 'UsersTotalCount',
          fontFamily: 'IBM Mono',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ['#00b199'],
          opacity: 0.5,
          type: 'solid',
          pattern: {
            style: 'horizontalLines',
            width: 6,
            height: 6,
            strokeWidth: 2,
          },
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 2,
          position: 'back',
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 35,
            bottom: 0,
            left: 35,
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'square',
          colors: ['#00b199'],
          width: 2,
          dashArray: 0,
        },
        theme: {
          mode: 'light',
          monochrome: {
            enabled: true,
            color: '#00b199',
            shadeTo: 'dark',
            shadeIntensity: 0.65,
          },
        },
        tooltip: {
          enabled: true,
          custom({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="tooltip">' +
              '<span class="tooltip-number">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="tooltip-description">Github users from Jordan</p>' +
              '<p class="tooltip-x-axis">' +
              w.globals.categoryLabels[dataPointIndex] +
              ' ' +
              lastYear +
              '</p>' +
              '</div>'
            )
          },
        },
        xaxis: {
          categories: months,
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#00b199'],
            },
          },
        },
      }
      this.areaChartData.series = [
        {
          name: 'Total Users',
          data: stats,
        },
      ]
    },
    async thisYearCharts() {
      const thisYear = new Date().getFullYear()
      const response = await this.$axios.get(
        `/v1/stats/contributors?period=${thisYear}-01-01_${thisYear}-12-31&type=users&aggregation=month`
      )

      const stats = response.data.usersStats[thisYear]
      const months = [...Array(12).keys()].map((key) => {
        return new Date(thisYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })

      this.changeAreaChartOptions(months, thisYear)

      this.areaChartData.series = [
        {
          name: 'Total Users',
          data: stats,
        },
      ]
    },
    async lastYearCharts() {
      const lastYear = new Date().getFullYear() - 1
      const response = await this.$axios.get(
        `/v1/stats/contributors?period=${lastYear}-01-01_${lastYear}-12-31&type=users&aggregation=month`
      )

      const stats = response.data.usersStats[lastYear]
      const months = [...Array(12).keys()].map((key) =>
        new Date(0, key).toLocaleString('default', {
          month: 'short',
        })
      )

      this.changeAreaChartOptions(months, lastYear)

      this.areaChartData.series = [
        {
          name: 'Total Users',
          data: stats,
        },
      ]
    },
    async lastMonthCharts() {
      const lastMonthDate = new Date()
      lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
      const year = lastMonthDate.getFullYear()
      const response = await this.$axios.get(
        `/v1/stats/contributors?period=${year}-01-01_${year}-12-31&type=users&aggregation=day`
      )

      const stats = response.data.usersStats[year][lastMonthDate.getMonth()]
      const days = [...Array(stats.length).keys()].map((key) => {
        return new Date(year, lastMonthDate.getMonth(), key + 1).toLocaleString(
          'en-GB',
          {
            day: 'numeric',
            month: 'numeric',
          }
        )
      })
      const tickAmount = 5
      this.changeAreaChartOptions(days, year, tickAmount)

      this.areaChartData.series = [
        {
          name: 'Total Users',
          data: stats,
        },
      ]
    },
    changeAreaChartOptions(categories, year, tickAmount) {
      this.areaChartData.chartOptions = {
        xaxis: {
          categories,
          tickAmount,
        },
        tooltip: {
          enabled: true,
          custom({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="tooltip">' +
              '<span class="tooltip-number">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="tooltip-description">Github users from Jordan</p>' +
              '<p class="tooltip-x-axis">' +
              w.globals.categoryLabels[dataPointIndex] +
              ' ' +
              year +
              '</p>' +
              '</div>'
            )
          },
        },
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.page-container {
  @apply bg-gray;
}

.area-chart-section {
  @apply lg:mx-12 2xl:mx-12 mx-3;
}

.chart-header {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  line-height: 1em;
  @apply font-normal mx-4 pb-4 pt-16 md:pt-24 md:pb-8 md:mx-12 lg:text-4xl lg:font-light lg:px-2 2xl:px-4;
}

.flex-container {
  @apply items-center md:flex md:justify-between;
}

.divider-black {
  @apply w-10 lg:w-10 border-t-2 border-black;
}
</style>
