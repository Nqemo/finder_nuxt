import GetImg from '../plugins/flickrapi'

export const state = () => ({
  // images
  images: [],

  // tags
  tagToSearch: '',
  isLoading: false,
})

export const mutations = {
  CLEAN_IMAGES(state) {
    state.images = []
  },
  ADD_IMAGE(state, payload) {
    state.images.push(payload)
  },
  TOGGLE_LOADING(state) {
    state.isLoading = !state.isLoading
  },
}

export const actions = {
  async setImages({ commit }, tag) {
    // ask for the images and wait
    const imag = await GetImg(tag)
    commit('CLEAN_IMAGES')
    imag.items.forEach((element) => {
      commit('ADD_IMAGE', element)
    })
  },
  toggle_loading({ commit }) {
    commit('TOGGLE_LOADING')
  },
}

export const getters = {
  // get images
  getImages: (state) => state.images,

  // get tags
  getTagToSearch: (state) => state.tagToSearch,

  // get isLoading
  isLoading: (state) => state.isLoading,
}
