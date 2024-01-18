<template>
  <div>
    <article class="section-container">
      <div class="header-title">
        <div class="divider"></div>
        <h2>Top Organizations in Jordan</h2>
      </div>
      <div class="filter-component">
        <OrganizationsFilter class="lg:mt-0 lg:order-2" />
        <Organizations :organizations="organizations" class="lg:grow" />
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrganizationsFilter from './OrganizationsFilter.vue'
import Organizations from './Organizations.vue'
export default {
  name: 'TopOrganizations',
  components: {
    OrganizationsFilter,
    Organizations,
  },
  async fetch() {
    const response = await this.$axios.get(
      `/v1/orgs?sort_by=${this.orgs_sortBy}`,
    )
    this.$store.commit('setOrgs', response.data.orgs)
    this.$store.commit('setPageCount', response.data.totalPages)
  },
  computed: {
    ...mapState({
      organizations: 'orgs',
      orgs_sortBy: 'orgs_sortBy',
    }),
  },
}
</script>

<style lang="postcss" scoped>
* {
  background-color: #edeeef;
}
.divider {
  @apply w-10 lg:w-14 border-t-2 border-black pb-4;
}
.header-title {
  font-family: 'IBM Mono';
  font-size: 1.7rem;
  @apply font-normal pt-16 lg:pt-24  lg:text-4xl lg:font-light;
}

.filter-component {
  @apply lg:flex mt-10 lg:mt-20;
}
</style>
