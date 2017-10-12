import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import vHeader from '../components/header/header.vue';

const routes = [{
	path: '/header',
	name: 'header',
	component: vHeader
}];

const router = new VueRouter({
	
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default router

