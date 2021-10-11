<template>
  <div
    class="
      relative
      flex
      items-center
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div class="flex flex-wrap m-1 justify-between">
      <!-- loop imgcar -->
      <ImgCard
        v-for="(imag, index) in images"
        :key="index"
        :url="imag.media.m"
        :name="imag.title"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // get images of store
      images: ['getImages'],
    }),
  },
}
</script>

<style></style>
