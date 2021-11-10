export const state = () => ({
  orgsCount: 0,
  usersCount: 0,
  commitsLastMonth: 0,
  users: [],
})

export const getters = {}

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
}
