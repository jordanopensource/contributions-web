export const state = () => ({
  orgsCount: 0,
  usersCount: 0,
  commitsLastMonth: 0,
  users: [],
  orgs: [],
  pageCount: 0,
  currentPage: 1,
  sortBy: 'score',
  orgs_sortBy: 'repos_stars',
  period: 'last_30_days',
  chartPeriod: 'last_year',
  show: 'all',
})

export const getters = {
  getPageCount: (state) => state.pageCount,
  getCurrentPage: (state) => state.currentPage,
  getSortBy: (state) => state.sortBy,
  getOrgsSortBy: (state) => state.orgs_sortBy,
  getPeriod: (state) => state.period,
  getChartPeriod: (state) => state.chartPeriod,
  getShow: (state) => state.show,
}

export const mutations = {
  setOrgsCount(state, orgsCount) {
    state.orgsCount = orgsCount
  },
  setUsers(state, users) {
    state.users = users
  },
  setOrgs(state, orgs) {
    state.orgs = orgs
  },
  setUsersCount(state, usersCount) {
    state.usersCount = usersCount
  },
  setCommitsLastMonth(state, commitsLastMonth) {
    state.commitsLastMonth = commitsLastMonth
  },
  setPageCount(state, pageCount) {
    state.pageCount = pageCount
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  setSortBy(state, sortBy) {
    state.sortBy = sortBy
  },
  setOrgsSortBy(state, sortBy) {
    state.orgs_sortBy = sortBy
  },
  setPeriod(state, period) {
    state.period = period
  },
  setChartPeriod(state, chartPeriod) {
    state.chartPeriod = chartPeriod
  },
  setShow(state, show) {
    state.show = show
  },
}
