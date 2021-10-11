<template>
  <div>
    <div class="text-base">
      <input
        v-model="tag"
        type="text"
        placeholder="type tag to search..."
        class="py-2 px-1 rounded-md mr-4"
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
      const imag = await GetImg(this.tag)
      this.$store
        .dispatch('setImages', imag)
        .then(() => console.log('OK'))
        .catch((error) => console.log('Problem setImages ', error))
    },
  },
}
</script>
