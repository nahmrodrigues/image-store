import { createRouter, createWebHistory } from 'vue-router';

import BaseLayout from '../layouts/BaseLayout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => BaseLayout,
    children: []
  },
  {
    path: '/images',
    name: 'images',
    component: () => import('../components/ImageList.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../components/UploadForm.vue')
  },
  {
    path: '/oauth2/callback',
    name: 'authCallback',
    component: () => import('../components/AuthHandler.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});