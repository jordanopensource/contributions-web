<template>
  <div :class="isOpen ? '' : 'hidden overflow-hidden lg:block'">
    <div class="sort-section has-border">
      <h6 class="text-xs font-bold pb-2">Sort by:</h6>
      <div class="flex lg:flex-col">
        <RadioButton
          class="lg:pb-1"
          :input-id="`Repos Count`"
          :input-name="`sortby`"
          :label-for="`Repos Count`"
          :label-text="`Repos Count`"
          :checked="true"
          :value="'repos_num'"
          @on-sort-by-changed="onSortByChanged"
        />
        <RadioButton
          class="pb-2 contributions-radio"
          :input-id="`Stars`"
          :input-name="`sortby`"
          :label-for="`Stars`"
          :label-text="`Stars`"
          :value="'repos_stars'"
          @on-sort-by-changed="onSortByChanged"
        />
        <RadioButton
          class="pb-2 contributions-radio"
          :input-id="`Members`"
          :input-name="`sortby`"
          :label-for="`Members`"
          :label-text="`Members`"
          :value="'org_members'"
          @on-sort-by-changed="onSortByChanged"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OrganizationsInput',
  props: {
    isOpen: { type: Boolean, required: true },
  },
  computed: {
    ...mapGetters({
      getCurrentPage: 'getCurrentPage',
    }),
  },
  methods: {
    async onSortByChanged(sortBy) {
      this.$store.commit('setOrgsSortBy', sortBy)
      const response = await this.$axios.get(
        `v1/orgs?sort_by=${sortBy}&page=${this.getCurrentPage}`
      )
      this.$store.commit('setOrgs', response.data.orgs)
    },
  },
}
</script>

<style lang="postcss" scoped>
.has-border {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.sort-section {
  @apply mx-8 pt-6 pb-4;
}

.contributions-radio {
  margin-left: 2.8rem;
  @apply lg:ml-0;
}
</style>
