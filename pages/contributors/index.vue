<template>
  <div class="page-container">
    <Hero title="Contributors" />
    <LastUpdated />
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
      <AreaChart class="area-chart" :chart-options="areaChartData" />
    </div>
    <div class="bar-chart-section">
      <div class="bar-chart-header">
        <div class="divider-black"></div>
        <div class="flex-container">
          <h2 class="pb-3 lg:pb-0">Contributions from Jordan</h2>
        </div>
      </div>
      <BarChart class="bar-chart" :chart-options="barChartData" />
    </div>
    <div>
      <TopDevelopers class="top-developers" />
    </div>
  </div>
</template>

<script>
import LastUpdated from '~/components/LastUpdated.vue'
export default {
  name: 'ContributorsPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
    AreaChart: () => import('~/components/AreaChart.vue'),
    BarChart: () => import('~/components/BarChart.vue'),
    TopDevelopers: () => import('~/components/TopDevelopers.vue'),
    LastUpdated,
  },
  data() {
    return {
      areaChartData: {
        type: 'area',
        chartOptions: {},
        series: [],
      },
      barChartData: {
        type: 'bar',
        chartOptions: {},
        series: [],
      },
    }
  },
  async mounted() {
    const lastYear = new Date().getFullYear() - 1
    let response = await this.$axios.get(
      `/v1/contributors/stats?period=${lastYear}-01-01_${lastYear}-12-31&type=users&aggregation=month`
    )
    const areaChartStats = response.data.usersStats[lastYear]

    response = await this.$axios.get(
      `/v1/contributors/stats?period=${lastYear}-01-01_${lastYear}-12-31&type=commits&aggregation=month`
    )
    const barChartStats = response.data.commitsStats[lastYear]

    this.generateAreaChart(areaChartStats)
    this.generateBarChart(barChartStats)

    this.$store.commit('setPeriod', 'last_30_days')
    this.$store.commit('setSortBy', 'score')
    this.$store.commit('setShow', 'all')
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
    generateAreaChart(stats) {
      const months = [...Array(12).keys()].map((key) =>
        new Date(0, key).toLocaleString('default', {
          month: 'short',
        })
      )
      const lastYear = new Date().getFullYear() - 1

      this.areaChartData.chartOptions = {
        chart: {
          id: 'UsersTotalCount',
          fontFamily: 'IBM Sans',
          height: '100%',
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
        series: [
          {
            name: 'Total Users',
            data: stats,
          },
        ],
        xaxis: {
          categories: months,
          labels: {
            style: {
              fontFamily: 'IBM Sans',
              fontSize: '15px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#00b199'],
              fontFamily: 'IBM Mono',
              fontSize: '18px',
            },
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              xaxis: {
                labels: {
                  style: {
                    fontSize: '12px',
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: ['#00b199'],
                    fontSize: '13px',
                  },
                },
              },
            },
          },
        ],
      }
    },
    generateBarChart(stats) {
      const lastYear = new Date().getFullYear() - 1
      const months = [...Array(12).keys()].map((key) => {
        return new Date(lastYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })

      this.barChartData.chartOptions = {
        chart: {
          id: 'Contributions',
          fontFamily: 'IBM Sans',
          height: '100%',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
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
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          hover: {
            filter: {
              type: 'lighten',
              value: 0.01,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '100%',
            barHeight: '70%',
          },
        },
        fill: {
          colors: ['#0b97ac'],
          opacity: 0.5,
          type: 'solid',
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
              '<div class="bar-tooltip">' +
              '<span class="bar-tooltip-number">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="bar-tooltip-description">Contributions from Jordan on</p>' +
              '<p class="bar-tooltip-x-axis">' +
              w.config.xaxis.categories[dataPointIndex] +
              ' ' +
              lastYear +
              '</p>' +
              '</div>'
            )
          },
        },
        series: [
          {
            name: 'Contributions',
            data: stats,
          },
        ],
        xaxis: {
          categories: months,
          labels: {
            style: {
              fontFamily: 'IBM Sans',
              fontSize: '15px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ['#0b97ac'],
              fontFamily: 'IBM Mono',
              fontSize: '18px',
            },
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              xaxis: {
                labels: {
                  style: {
                    fontSize: '12px',
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: ['#0b97ac'],
                    fontSize: '13px',
                  },
                },
              },
            },
          },
        ],
      }
    },
    async thisYearCharts() {
      const thisYear = new Date().getFullYear()

      let response = await this.$axios.get(
        `/v1/contributors/stats?period=${thisYear}-01-01_${thisYear}-12-31&type=users&aggregation=month`
      )

      let areaChartStats = response.data.usersStats[thisYear]
      if (areaChartStats?.length) {
        const months = [...Array(areaChartStats.length).keys()].map((key) => {
          return new Date(thisYear, key).toLocaleString('en-GB', {
            month: 'short',
          })
        })
        this.changeAreaChartOptions(areaChartStats, months, thisYear)
      } else {
        const lastYear = thisYear - 1
        response = await this.$axios.get(
          `/v1/contributors/stats?period=${lastYear}-01-01_${thisYear}-12-31&type=users&aggregation=month`
        )
        areaChartStats = response.data.usersStats[lastYear]
        areaChartStats = [areaChartStats[areaChartStats?.length - 1]]

        const months = [...Array(areaChartStats.length).keys()].map((key) => {
          return new Date(thisYear, key).toLocaleString('en-GB', {
            month: 'short',
          })
        })
        this.changeAreaChartOptions(areaChartStats, months, thisYear)
      }

      response = await this.$axios.get(
        `/v1/contributors/stats?period=${thisYear}-01-01_${thisYear}-12-31&type=commits&aggregation=month`
      )
      const barChartStats = response.data.commitsStats[thisYear]
      if (barChartStats?.length) {
        const months = [...Array(barChartStats.length).keys()].map((key) => {
          return new Date(thisYear, key).toLocaleString('en-GB', {
            month: 'short',
          })
        })
        this.changeBarChartOptions(barChartStats, months, thisYear)
      }
    },
    async lastYearCharts() {
      const lastYear = new Date().getFullYear() - 1

      let response = await this.$axios.get(
        `/v1/contributors/stats?period=${lastYear}-01-01_${lastYear}-12-31&type=users&aggregation=month`
      )
      const areaChartStats = response.data.usersStats[lastYear]
      let months = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(lastYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })
      this.changeAreaChartOptions(areaChartStats, months, lastYear)

      response = await this.$axios.get(
        `/v1/contributors/stats?period=${lastYear}-01-01_${lastYear}-12-31&type=commits&aggregation=month`
      )
      const barChartStats = response.data.commitsStats[lastYear]
      months = [...Array(barChartStats.length).keys()].map((key) => {
        return new Date(lastYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })
      this.changeBarChartOptions(barChartStats, months, lastYear)
    },
    async lastMonthCharts() {
      const lastMonthDate = new Date()
      lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
      const year = lastMonthDate.getFullYear()

      let response = await this.$axios.get(
        `/v1/contributors/stats?period=${year}-01-01_${year}-12-31&type=users&aggregation=day`
      )

      const areaChartStats =
        response.data.usersStats[year][lastMonthDate.getMonth()]

      let days = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(year, lastMonthDate.getMonth(), key + 1).toLocaleString(
          'en-GB',
          {
            day: 'numeric',
            month: 'numeric',
          }
        )
      })
      const tickAmount = 5
      this.changeAreaChartOptions(areaChartStats, days, year, tickAmount)

      response = await this.$axios.get(
        `/v1/contributors/stats?period=${year}-01-01_${year}-12-31&type=commits&aggregation=day`
      )
      const barChartStats =
        response.data.commitsStats[year][lastMonthDate.getMonth()]
      days = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(year, lastMonthDate.getMonth(), key + 1).toLocaleString(
          'en-GB',
          {
            day: 'numeric',
            month: 'numeric',
          }
        )
      })
      this.changeBarChartOptions(barChartStats, days, year, tickAmount)
    },
    changeAreaChartOptions(data, categories, year, tickAmount) {
      this.areaChartData.chartOptions = {
        series: [
          {
            data,
          },
        ],
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
    changeBarChartOptions(data, categories, year, tickAmount) {
      this.barChartData.chartOptions = {
        series: [
          {
            data,
          },
        ],
        xaxis: {
          categories,
          tickAmount,
        },
        tooltip: {
          enabled: true,
          custom({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="bar-tooltip">' +
              '<span class="bar-tooltip-number">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="bar-tooltip-description">Contributions from Jordan on</p>' +
              '<p class="bar-tooltip-x-axis">' +
              w.config.xaxis.categories[dataPointIndex] +
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

.area-chart {
  @apply h-56 md:h-96 lg:h-720;
}

.bar-chart {
  @apply h-56 md:h-96 lg:h-720;
}

.area-chart-section {
  @apply lg:mx-10 2xl:mx-9 mx-3;
}

.bar-chart-section {
  @apply lg:mx-10 2xl:mx-9 mx-3;
}

.top-developers {
  @apply 2xl:mx-3;
}

.bar-chart-header {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  line-height: 1em;
  @apply font-normal mx-4 pb-4 pt-16 md:pt-24 md:pb-8 md:mx-14 lg:text-4xl lg:font-light lg:px-2 2xl:px-4;
}

.chart-header {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  line-height: 1em;
  @apply font-normal mx-4 pb-4 pt-16 md:pt-24 md:pb-8 md:mx-14 lg:text-4xl lg:font-light lg:px-2 2xl:px-4;
}

.flex-container {
  @apply items-center md:flex md:justify-between;
}

.divider-black {
  @apply w-10 lg:w-10 border-t-2 border-black;
}
</style>
