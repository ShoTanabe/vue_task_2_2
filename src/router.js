import Vue from 'vue';
import Router from 'vue-router';
import Page01 from './views/page01.vue';
import Page02 from './views/page02.vue';
import Page03 from './views/page03.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {path: '/', component: Page01},
    {path: '/page02', component: Page02},
    {path: '/page03', component: Page03}
  ]
});