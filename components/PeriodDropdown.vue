<template>
  <div>
    <select id="period" name="period" @change="onChange">
      <option value="last30Days" selected>Last 30 Days</option>
      <option value="lastMonth">Last Month</option>
      <option value="pastYear">Past Year</option>
    </select>
    <p>
      <small>{{ last30Days }} ➜ {{ todayDate }}</small>
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
      last30Days: 0,
    }
  },
  mounted() {
    const today = new Date()
    const priorDate = new Date().setDate(today.getDate() - 30)
    this.last30Days = new Date(priorDate).toLocaleString('en-GB', {
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
