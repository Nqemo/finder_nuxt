export const state = () => ({
  // images
  images: [],

  // tags
  tagToSearch: '',
})

export const mutations = {
  ADD_IMAGE(state, payload) {
    state.images.push(payload)
  },
  SET_IMAGES(state, payload) {
    state.images = payload
  },
}

export const actions = {
  setImages({ commit }, payload) {
    commit('SET_IMAGES', payload)
  },
}

export const getters = {
  // get images
  getImages: (state) => state.images,

  // get tags
  getTagToSearch: (state) => state.tagToSearch,
}
