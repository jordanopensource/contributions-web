<template>
  <div class="card-container">
    <div class="content-container">
      <img
        :class="imgSize"
        :src="require(`~/assets/images/stats/${image}`)"
        alt=""
        width="64"
        height="64"
        loading="lazy"
      />
      <h2 :class="color">{{ count }}</h2>
    </div>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    count: { type: Number, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    imgSize: { type: String, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.blue {
  font-family: 'IBM Sans';
  color: #0b97ac;
  @apply text-5xl;
}

.blue-green {
  font-family: 'IBM Sans';
  color: #00b199;
  @apply text-5xl;
}

.green {
  font-family: 'IBM Sans';
  color: #73bc86;
  @apply text-5xl;
}

.description {
  font-family: 'IBM Sans';
  @apply text-base px-6 pt-1 pb-6;
}

.card-container {
  @apply bg-white shadow my-5 mx-3 lg:w-2/4 lg:mx-5;
}

.content-container {
  @apply flex space-x-2 items-center px-6 pt-6;
}
</style>
