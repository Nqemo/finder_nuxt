<template>
  <div>
    <div class="text-base">
      <input
        v-model="tag"
        type="text"
        placeholder="type tag to search..."
        class="py-2 px-1 rounded-md mr-4"
        @keyup.enter="searchTag"
      />
      <button
        type="submit"
        class="
          bg-indigo-200
          hover:bg-indigo-900
          text-indigo-900
          hover:text-purple-50
          font-bold
          py-2
          px-5
          rounded-md
        "
        @click.prevent="searchTag"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import GetImg from '../../plugins/flickrapi'

export default {
  data() {
    return {
      tag: '',
    }
  },
  methods: {
    async searchTag() {
      // activate isLoading
      this.$store.dispatch('toggle_loading')
      // ask for the images and wait
      const imag = await GetImg(this.tag)
      // update store
      this.$store
        .dispatch('setImages', imag)
        .catch((error) => console.log('Problem setImages ', error))
        // deactivate isLoading
        .finally(() => this.$store.dispatch('toggle_loading'))
    },
  },
}
</script>
