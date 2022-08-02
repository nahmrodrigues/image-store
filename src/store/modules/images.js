import { fetchImages, uploadImages } from '../../api/imgur';
import router from '../../router';

const state = () => ({
  images: []
})

const getters = {
  allImages: state => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

const actions = {
  fetchImages: async ({ rootState, commit }) => {
    const { token } = rootState.auth;

    if(token) {
      const images = await fetchImages(token);
      commit('setImages', images);
    }
  },
  uploadImages: async({ rootState }, images) => {
    const { token } = rootState.auth;
    await uploadImages(token, images);
    router.push('/');
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};