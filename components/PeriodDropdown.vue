<template>
  <div>
    <select id="period" name="period" @change="onChange">
      <option value="last_30_days" selected>Last 30 Days</option>
      <option value="last_month">Last Month</option>
      <option value="this_year">This Year</option>
    </select>
    <p v-if="period === 'last_30_days'">
      <small>{{ last30Days }} ➜ {{ todayDate }}</small>
    </p>
    <p v-if="period === 'last_month'">
      <small>{{ firstDayOfTheLastMonth }} ➜ {{ lastDayOfTheLastMonth }}</small>
    </p>
    <p v-if="period === 'this_year'">
      <small>{{ startOfTheYear }} ➜ {{ todayDate }}</small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PeriodDropdown',
  data() {
    return {
      todayDate: new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
      }),
      startOfTheYear: new Date(new Date().getFullYear(), 0, 1).toLocaleString(
        'en-GB',
        {
          day: 'numeric',
          month: 'long',
        }
      ),
      firstDayOfTheLastMonth: 0,
      lastDayOfTheLastMonth: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        0
      ).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
      }),
      last30Days: 0,
    }
  },
  computed: {
    currentPage() {
      return this.$store.getters.getCurrentPage
    },
    sortBy() {
      return this.$store.getters.getSortBy
    },
    period() {
      return this.$store.getters.getPeriod
    },
    getShow() {
      return this.$store.getters.getShow
    },
  },
  mounted() {
    const today = new Date()
    const priorDate = new Date().setDate(today.getDate() - 30)
    this.last30Days = new Date(priorDate).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
    })
    const firstDayOfLastMonth = new Date(today)
    firstDayOfLastMonth.setDate(1)
    firstDayOfLastMonth.setMonth(today.getMonth() - 1)
    this.firstDayOfTheLastMonth = firstDayOfLastMonth.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
    })
  },

  methods: {
    async onChange(e) {
      this.$store.commit('setPeriod', e.target.value)
      const response = await this.$axios.get(
        `/v1/users?page=${this.currentPage}&sort_by=${this.sortBy}&period=${this.period}&contributors=${this.getShow}`
      )
      this.$store.commit('setUsers', response.data.users)
    },
  },
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'IBM Sans';
  color: #1a1f21;
}

select {
  padding: 0.4rem 0.5rem;
  background-color: white;
  border: 1px solid #eaeaea;
  font-size: 0.9rem;
  border-radius: 10px;
}
</style>
