import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';

import ImagesList from '../components/ImageList.vue'
import UploadForm from '../components/UploadForm.vue'
import AuthHandler from '../components/AuthHandler.vue'
import NotAuthenticated from '../components/NotAuthenticated.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: () => {
      if(store.getters['isLoggedIn']) return 'images'
      return 'login'
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: NotAuthenticated
      },
      {
        path: '/images',
        name: 'images',
        component: ImagesList
      },
      {
        path: '/upload',
        name: 'upload',
        component: UploadForm
      },
      {
        path: '/oauth2/callback',
        component: AuthHandler
      }
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});