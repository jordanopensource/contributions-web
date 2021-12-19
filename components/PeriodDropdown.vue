<template>
  <div>
    <select id="period" name="period" @change="onChange">
      <option value="last30Days" selected>Last 30 Days</option>
      <option value="lastMonth">Last Month</option>
      <option value="thisYear">This Year</option>
    </select>
    <p v-if="period === 'last30Days'">
      <small>{{ last30Days }} ➜ {{ todayDate }}</small>
    </p>
    <p v-if="period === 'lastMonth'">
      <small>{{ firstDayOfTheLastMonth }} ➜ {{ lastDayOfTheLastMonth }}</small>
    </p>
    <p v-if="period === 'thisYear'">
      <small>{{ startOfTheYear }} ➜ {{ todayDate }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState({
      period: 'period',
    }),
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
    onChange(e) {
      this.$store.commit('setPeriod', e.target.value)
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
