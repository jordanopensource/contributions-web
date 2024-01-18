<template>
  <div :class="isOpen ? '' : 'hidden overflow-hidden lg:block'">
    <div class="mx-8 pt-6">
      <SearchInput placeholder="Search Users..." @on-search="onSearch" />
    </div>
    <div class="sort-section">
      <label for="period" class="text-xs font-bold">Period:</label>
      <div class="flex lg:flex-col gap-1 pt-1">
        <PeriodDropdown name="period" />
      </div>
    </div>
    <div class="sort-section has-border">
      <span class="text-xs font-bold">Sort by:</span>
      <div class="flex lg:flex-col gap-1 pt-1">
        <RadioButton
          class="lg:pb-1"
          :input-id="`score`"
          :input-name="`sortby`"
          :label-for="`score`"
          :label-text="`Score`"
          :checked="true"
          :value="'score'"
          @on-sort-by-changed="onSortByChanged"
        />
        <RadioButton
          class="pb-2 contributions-radio"
          :input-id="`contributions`"
          :input-name="`sortby`"
          :label-for="`contributions`"
          :label-text="`Contributions`"
          :value="'contributions'"
          @on-sort-by-changed="onSortByChanged"
        />
      </div>
    </div>
    <div class="sort-section has-border">
      <span class="text-xs font-bold">Show:</span>
      <div class="flex lg:flex-col gap-1 pt-1">
        <RadioButton
          class="lg:pb-1"
          :input-id="`all`"
          :input-name="`show`"
          :label-for="`all`"
          :label-text="`All`"
          :checked="true"
          :value="'all'"
          @on-show-changed="onShowChanged"
        />
        <RadioButton
          class="pb-2 ml-16 lg:ml-0"
          :input-id="`only`"
          :input-name="`show`"
          :label-for="`only`"
          :label-text="`Only JOSA members`"
          :value="'members'"
          @on-show-changed="onShowChanged"
        />
      </div>
    </div>
    <div class="sort-section">
      <span class="text-xs font-bold">Count:</span>
      <div class="flex lg:flex-col gap-3 pt-1">
        <div class="flex">
          <RadioButton
            class="lg:pb-1"
            :input-id="`all contributions`"
            :input-name="`count`"
            :label-for="`all contributions`"
            :label-text="`All Contributions`"
            :checked="true"
            :value="'all'"
            @on-count-type-changed="onCountTypeChanged"
          />
          <div class="tooltip">
            <span class="text-sm font-bold cursor-pointer px-1 blue-green">
              &#9432;
            </span>
            <span class="tooltip-text">
              Commits, Issues, Pull Requests and Code Reviews.
            </span>
          </div>
        </div>
        <RadioButton
          class="lg:pb-1"
          :input-id="`commits`"
          :input-name="`count`"
          :label-for="`commits`"
          :label-text="`Commits`"
          :value="'commits'"
          @on-count-type-changed="onCountTypeChanged"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RadioButton from './RadioButton.vue'
import PeriodDropdown from './PeriodDropdown.vue'
export default {
  name: 'InputsSection',
  components: {
    RadioButton,
    PeriodDropdown,
  },
  props: {
    isOpen: { type: Boolean, required: true },
  },
  computed: {
    ...mapGetters({
      getCurrentPage: 'getCurrentPage',
      getPeriod: 'getPeriod',
      getShow: 'getShow',
      getSortBy: 'getSortBy',
      getUserSearchTerm: 'getUserSearchTerm',
      getCountType: 'getCountType',
    }),
  },
  methods: {
    async onSortByChanged(sortBy) {
      this.$store.commit('setCurrentPage', 1)
      this.$store.commit('setSortBy', sortBy)

      if (this.getUserSearchTerm) {
        const response = await this.$axios.get(
          `v1/users?sort_by=${sortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&search=${this.getUserSearchTerm}&type=${this.getCountType}`,
        )
        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `v1/users?sort_by=${sortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&type=${this.getCountType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      }
    },
    async onShowChanged(show) {
      this.$store.commit('setCurrentPage', 1)
      this.$store.commit('setShow', show)
      if (this.getUserSearchTerm) {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${show}&search=${this.getUserSearchTerm}&type=${this.getCountType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${show}&type=${this.getCountType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      }
    },
    async onSearch(searchTerm) {
      this.$store.commit('setCurrentPage', 1)
      if (searchTerm) {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&search=${searchTerm}&type=${this.getCountType}`,
        )
        this.$store.commit('setUserSearchTerm', searchTerm)
        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&type=${this.getCountType}`,
        )
        this.$store.commit('setUserSearchTerm', '')
        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      }
    },
    async onCountTypeChanged(countType) {
      this.$store.commit('setCurrentPage', 1)
      this.$store.commit('setCountType', countType)
      if (this.getUserSearchTerm) {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&search=${this.getUserSearchTerm}&type=${this.getCountType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      } else {
        const response = await this.$axios.get(
          `v1/users?sort_by=${this.getSortBy}&page=${this.getCurrentPage}&period=${this.getPeriod}&contributors=${this.getShow}&type=${this.getCountType}`,
        )

        this.$store.commit('setUsers', response.data.users)
        this.$store.commit('setPageCount', response.data.totalPages)
      }
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

/* Tooltip container */
.tooltip {
  @apply p-0;
}

/* Tooltip text */
.tooltip .tooltip-text {
  @apply w-32 bg-white text-black p-2 text-xs;
  visibility: hidden;
  text-align: center;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltip-text {
  visibility: visible;
}

.blue-green {
  color: #00b199;
}
</style>
