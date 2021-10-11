<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg max-w-1/3">
    <img
      :src="url"
      :alt="name"
      class="sm:rounded-t-xl h-60 w-full object-cover"
    />
    <h2 class="text-base leading-7 font-semibold p-6">
      {{ name }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default:
        'https:\\live.staticflickr.com/65535/51564419531_b02f943156_m.jpg',
    },
    name: {
      type: String,
      default: 'no name',
    },
  },
}
</script>

<style></style>
