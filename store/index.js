export const state = () => ({
  orgsCount: 0,
  usersCount: 0,
  commitsLastMonth: 0,
  users: [],
  pageCount: 0,
  currentPage: 1,
})

export const getters = {
  getPageCount: (state) => state.pageCount,
  getCurrentPage: (state) => state.currentPage,
}

export const mutations = {
  setOrgsCount(state, orgsCount) {
    state.orgsCount = orgsCount
  },
  setUsers(state, users) {
    state.users = users
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
}
