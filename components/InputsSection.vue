<template>
  <div :class="isOpen ? '' : 'hidden overflow-hidden lg:block'">
    <div class="sort-section has-border">
      <h6 class="text-xs font-bold pb-2">Sort by:</h6>
      <div class="flex">
        <RadioButton
          :input-id="`score`"
          :input-name="`sortby`"
          :label-for="`score`"
          :label-text="`Score`"
          :checked="true"
        />
        <RadioButton
          class="pb-2 contributions-radio"
          :input-id="`contributions`"
          :input-name="`sortby`"
          :label-for="`contributions`"
          :label-text="`Contributions`"
        />
      </div>
    </div>
    <div class="sort-section has-border">
      <h6 class="text-xs font-bold pb-2">Show:</h6>
      <div class="flex">
        <RadioButton
          :input-id="`all`"
          :input-name="`show`"
          :label-for="`all`"
          :label-text="`All`"
          :checked="true"
        />
        <RadioButton
          class="pb-2 ml-16"
          :input-id="`only`"
          :input-name="`show`"
          :label-for="`only`"
          :label-text="`Only JOSA members`"
        />
      </div>
    </div>
    <div class="sort-section">
      <h6 class="text-xs font-bold pb-2">Count:</h6>
      <div class="flex">
        <CheckBox
          :input-id="`commits`"
          :input-name="`count`"
          :label-for="`commits`"
          :label-text="`Commits`"
          :checked="true"
        />
        <CheckBox
          class="pb-2 ml-6"
          :input-id="`contribution`"
          :input-name="`count`"
          :label-for="`contribution`"
          :label-text="`Contributions`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from './RadioButton.vue'
import CheckBox from './CheckBox.vue'
export default {
  name: 'InputsSection',
  components: {
    RadioButton,
    CheckBox,
  },
  props: {
    isOpen: { type: Boolean, required: true },
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
}
</style>