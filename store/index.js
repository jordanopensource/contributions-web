export const state = () => ({
  orgsCount: 0,
  usersCount: 0,
  contributionsLastMonth: 0,
  users: [],
  orgs: [],
  pageCount: 0,
  currentPage: 1,
  sortBy: 'score',
  orgs_sortBy: 'repos_stars',
  period: 'last_30_days',
  chartPeriod: 'last_year',
  show: 'all',
  countType: 'all',
  orgSearchTerm: '',
  userSearchTerm: '',
})

export const getters = {
  getPageCount: (state) => state.pageCount,
  getCurrentPage: (state) => state.currentPage,
  getSortBy: (state) => state.sortBy,
  getOrgsSortBy: (state) => state.orgs_sortBy,
  getPeriod: (state) => state.period,
  getChartPeriod: (state) => state.chartPeriod,
  getShow: (state) => state.show,
  getCountType: (state) => state.countType,
  getOrgSearchTerm: (state) => state.orgSearchTerm,
  getUserSearchTerm: (state) => state.userSearchTerm,
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
  setContributionsLastMonth(state, contributionsLastMonth) {
    state.contributionsLastMonth = contributionsLastMonth
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
  setCountType(state, countType) {
    state.countType = countType
  },
  setOrgSearchTerm(state, searchTerm) {
    state.orgSearchTerm = searchTerm
  },
  setUserSearchTerm(state, searchTerm) {
    state.userSearchTerm = searchTerm
  },
}
