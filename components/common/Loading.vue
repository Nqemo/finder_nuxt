<template>
  <div
    v-if="active"
    wire:loading
    class="
      fixed
      top-0
      left-0
      right-0
      bottom-0
      w-full
      h-screen
      z-50
      overflow-hidden
      bg-white
      opacity-75
      flex flex-col
      items-center
      justify-center
    "
  >
    <div
      class="
        loader
        ease-linear
        rounded-full
        border-4 border-t-4 border-white
        h-12
        w-12
        mb-4
      "
    ></div>
    <h2 class="text-center text-indigo-600 text-xl font-semibold">
      Loading...
    </h2>
    <p class="w-1/3 text-center text-indigo-800">
      This may take a few seconds, please be patient.
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // get state of var
      active: ['isLoading'],
    }),
  },
}
</script>
<style scoped>
.loader {
  border-top-color: #599b03;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
