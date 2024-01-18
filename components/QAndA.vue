<template>
  <div class="card">
    <div class="question-section">
      <button class="expand" @click="toggle()">
        <span v-if="closed" class="align-text-top">&plus;</span>
        <span v-else class="align-text-top">&minus;</span>
      </button>
      <h3>
        {{ question }}
      </h3>
    </div>
    <div v-if="!closed" class="answer-section" v-html="answer"></div>
  </div>
</template>

<script>
export default {
  name: 'QAndA',
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      closed: !this.isExpanded,
    }
  },
  methods: {
    toggle() {
      if (this.closed) {
        this.closed = false
      } else {
        this.closed = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white shadow-lg lg:w-5/12 p-8 my-5;
}

.question-section {
  font-family: 'IBM Mono';
  @apply flex text-xl font-normal items-center text-gray-700;
}

.answer-section {
  font-family: 'IBM Sans';
  @apply text-base pl-10 pt-4 pb-6 leading-8;
}

.expand {
  color: #00b199;
  @apply font-bold text-4xl mr-5;
}
</style>
