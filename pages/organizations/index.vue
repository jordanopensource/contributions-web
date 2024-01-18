<template>
  <div class="page-container">
    <Hero title="Organizations" />
    <div class="px-8 md:px-14 lg:px-24">
      <LastUpdated />
      <div class="area-chart-section">
        <div class="chart-header">
          <div class="divider"></div>
          <div class="flex-container">
            <h2 class="pb-3 lg:pb-0">Total Organizations in Jordan</h2>
            <label class="hidden" for="orgCharts">Period</label>
            <ChartsPeriodDropdown
              class="justify-self-end"
              name="orgCharts"
              @on-chart-period-changed="onChartPeriodChanged"
            />
          </div>
        </div>
        <AreaChart class="area-chart" :chart-options="areaChartData" />
      </div>
      <div>
        <TopOrganizations class="top-developers" />
      </div>
    </div>
  </div>
</template>

<script>
import LastUpdated from '~/components/LastUpdated.vue'
export default {
  name: 'OrganizationsPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
    AreaChart: () => import('~/components/AreaChart.vue'),
    TopOrganizations: () => import('~/components/TopOrganizations.vue'),
    LastUpdated,
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
      `/v1/organizations/stats?period=${lastYear}-01-01_${lastYear}-12-31&aggregation=month`,
    )
    const areaChartStats = response.data.organizationsStats[lastYear]

    this.generateAreaChart(areaChartStats)
  },
  methods: {
    generateAreaChart(stats) {
      const months = [...Array(12).keys()].map((key) =>
        new Date(0, key).toLocaleString('default', {
          month: 'short',
        }),
      )
      const lastYear = new Date().getFullYear() - 1

      this.areaChartData.chartOptions = {
        chart: {
          id: 'OrganizationsTotalCount',
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
          colors: ['#73bc86'],
          opacity: 0.8,
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
          colors: ['#73bc86'],
          width: 2,
          dashArray: 0,
        },
        theme: {
          mode: 'light',
          monochrome: {
            enabled: true,
            color: '#73bc86',
            shadeTo: 'dark',
            shadeIntensity: 0.65,
          },
        },
        tooltip: {
          enabled: true,
          custom({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="tooltip-organizations">' +
              '<span class="tooltip-number-organizations">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="tooltip-description-organizations">Organizations from Jordan</p>' +
              '<p class="tooltip-x-axis-organizations">' +
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
              colors: ['#73bc86'],
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
                    colors: ['#73bc86'],
                    fontSize: '13px',
                  },
                },
              },
            },
          },
        ],
      }
    },
    async onChartPeriodChanged(period) {
      if (period === 'this_year') {
        await this.thisYearCharts()
      } else if (period === 'last_year') {
        await this.lastYearCharts()
      } else if (period === 'last_month') {
        await this.lastMonthCharts()
      }
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
              '<div class="tooltip-organizations">' +
              '<span class="tooltip-number-organizations">' +
              series[seriesIndex][dataPointIndex] +
              '</span>' +
              '<p class="tooltip-description-organizations">Organizations users from Jordan</p>' +
              '<p class="tooltip-x-axis-organizations">' +
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
    async thisYearCharts() {
      const thisYear = new Date().getFullYear()

      const response = await this.$axios.get(
        `/v1/organizations/stats?period=${thisYear}-01-01_${thisYear}-12-31&aggregation=month`,
      )
      const areaChartStats = response.data.organizationsStats[thisYear]
      const months = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(thisYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })
      this.changeAreaChartOptions(areaChartStats, months, thisYear)
    },
    async lastYearCharts() {
      const lastYear = new Date().getFullYear() - 1

      const response = await this.$axios.get(
        `/v1/organizations/stats?period=${lastYear}-01-01_${lastYear}-12-31&aggregation=month`,
      )
      const areaChartStats = response.data.organizationsStats[lastYear]
      const months = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(lastYear, key).toLocaleString('en-GB', {
          month: 'short',
        })
      })
      this.changeAreaChartOptions(areaChartStats, months, lastYear)
    },
    async lastMonthCharts() {
      const lastMonthDate = new Date()
      lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
      const year = lastMonthDate.getFullYear()

      const response = await this.$axios.get(
        `/v1/organizations/stats?period=${year}-01-01_${year}-12-31&aggregation=day`,
      )

      const areaChartStats =
        response.data.organizationsStats[year][lastMonthDate.getMonth()]

      const days = [...Array(areaChartStats.length).keys()].map((key) => {
        return new Date(year, lastMonthDate.getMonth(), key + 1).toLocaleString(
          'en-GB',
          {
            day: 'numeric',
            month: 'numeric',
          },
        )
      })
      const tickAmount = 5
      this.changeAreaChartOptions(areaChartStats, days, year, tickAmount)
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

.chart-header {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  line-height: 1em;
  @apply font-normal pb-4 pt-16 md:pt-24 md:pb-8  lg:text-4xl lg:font-light;
}

.flex-container {
  @apply items-center md:flex md:justify-between;
}

.divider {
  @apply w-10 lg:w-10 border-t-2 border-black;
}
</style>
