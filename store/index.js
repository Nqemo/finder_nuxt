export const state = () => ({
  // images
  images: [],

  // tags
  tagToSearch: '',
  isLoading: false,
})

export const mutations = {
  ADD_IMAGE(state, payload) {
    state.images.push(payload)
  },
  TOGGLE_LOADING(state) {
    state.isLoading = !state.isLoading
  },
}

export const actions = {
  setImages({ commit }, payload) {
    payload.items.forEach((element) => {
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
}
