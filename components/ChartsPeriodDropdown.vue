<template>
  <div>
    <select :id="name" :name="name" @change="onChange">
      <option value="last_year">Last Year</option>
      <option value="this_year">This Year</option>
      <option value="last_month">Last Month</option>
    </select>
    <p v-if="chartPeriod === 'last_year'">
      <small>{{ startOfTheYear }} ➜ {{ endOfTheYear }}</small>
    </p>
    <p v-if="chartPeriod === 'this_year'">
      <small>{{ startOfTheYear }} ➜ {{ todayDate }}</small>
    </p>
    <p v-if="chartPeriod === 'last_month'">
      <small>{{ firstDayOfTheLastMonth }} ➜ {{ lastDayOfTheLastMonth }}</small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PeriodDropdown',
  props: {
    name: { type: String, default: 'period' },
  },
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
        },
      ),
      firstDayOfTheLastMonth: 0,
      lastDayOfTheLastMonth: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        0,
      ).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
      }),
      endOfTheYear: new Date(
        new Date().getFullYear() - 1,
        11,
        31,
      ).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
      }),
    }
  },
  computed: {
    chartPeriod() {
      return this.$store.getters.getChartPeriod
    },
  },
  mounted() {
    const today = new Date()
    const firstDayOfLastMonth = new Date(today)
    firstDayOfLastMonth.setDate(1)
    firstDayOfLastMonth.setMonth(today.getMonth() - 1)
    this.firstDayOfTheLastMonth = firstDayOfLastMonth.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
    })
  },

  methods: {
    onChange(e) {
      this.$store.commit('setChartPeriod', e.target.value)
      this.$emit('on-chart-period-changed', e.target.value)
    },
  },
}
</script>

<style lang="postcss" scoped>
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
  font-size: 1rem;
  border-radius: 10px;
}

p {
  @apply text-base;
}
</style>
