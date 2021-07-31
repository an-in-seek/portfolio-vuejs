import Vue from 'vue';
import Router from 'vue-router';
import Home from './main/Home.vue';
import Board from './main/Board.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
        path: '/board',
        name: 'board',
        // lazy-loaded
        component: Board
      },
  ]
});