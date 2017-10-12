import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import xqIndex from '../components/index.vue';
// import xqContainer from '../components/container.vue';
// import xqJunshi from '../src/components/junshi.vue';
// import xqHaiwai from '../src/components/haiwai.vue';
// import xqRedian from '../src/components/redian.vue';

var xqJunshi = require('../src/components/junshi.js');
var xqHaiwai = require('../src/components/haiwai.js');
var xqRedian = require('../src/components/redian.js');

// const routes = [{
// 	path: '/',
// 	component: xqIndex,
// 	children: [{
// 		path: 'index',
// 		component: xqContainer
// 	},{
// 		path : 'junshi',
// 		component : xqJunshi
// 	},{
// 		path : 'haiwai',
// 		component : xqHaiwai
// 	},{
// 		path : 'redian',
// 		component : xqRedian
// 	}],
// }];
const routes = [
	{
		path: '/',
		redirect: 'junshi'
	},
	{
		path: 'junshi',
		component: xqJunshi
	}, {
		path: 'haiwai',
		component: xqHaiwai
	}, {
		path: 'redian',
		component: xqRedian
	}
];
export default new VueRouter({
	routes
})