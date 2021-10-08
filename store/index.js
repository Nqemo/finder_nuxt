export const state = () => ({
  // images
  images: [
    {
      id: '',
      name: '',
      url: '',
    },
  ],

  // tags
  tagToSearch: '',
})

export const mutations = {}

export const actions = {}

export const getters = {
  // get images
  getImages: (state) => state.images,

  // get tags
  getTagToSearch: (state) => state.tagToSearch,
}
