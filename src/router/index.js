import { createRouter, createWebHashHistory } from 'vue-router';
import AuthHandler from '../components/AuthHandler.vue';

const routes = [
  {
    path: '/oauth2/callback',
    component: AuthHandler
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});