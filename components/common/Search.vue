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
export default {
  data() {
    return {
      tag: '',
    }
  },
  methods: {
    searchTag() {
      // activate isLoading
      this.$store.dispatch('toggle_loading')

      // update store
      this.$store
        .dispatch('setImages', this.tag)
        .catch((error) => console.log('Problem setImages ', error))
        // deactivate isLoading
        .finally(() => this.$store.dispatch('toggle_loading'))
    },
  },
}
</script>
