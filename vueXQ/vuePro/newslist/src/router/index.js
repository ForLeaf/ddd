import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import xqJunshi from '../components/junshi.vue'
import xqHaiwai from '../components/haiwai.vue'
import xqRedian from '../components/redian.vue'
import xqIndex from '../components/index.vue'
import xqContainer from '../components/container.vue'

import xqScroll01 from '../components/scrol/scrol01.vue'
import xqScroll02 from '../components/scrol/scrol02.vue'
import xqScroll03 from '../components/scrol/scrol03.vue'
import xqScroll04 from '../components/scrol/scrol04.vue'
import xqScroll from '../components/scrol/scroll.vue'

Vue.use(Router)


const routes = [{
  path: '/',
  component: xqIndex,
  children: [{
	path: 'index',
	name: 'index',
    component: xqContainer
  }, {
	path: 'junshi',
	name:'junshi',
	component: xqJunshi,
	meta:{
		title:'junshi',
		keepAlive:true
	}
  }, {
	path: 'haiwai',
	name:'haiwai',
    component: xqHaiwai
  }, {
	path: 'redian',
	name:'redian',
    component: xqRedian
  }],
},{
	path: '/scroll',
	component: xqScroll,
	//redirect: 'scroll01',
	children: [
		{
			path:'scroll01',
			name: 'scroll01',
			component: xqScroll01,
		},{
			path:'scroll02',
			name: 'scroll02',
			component: xqScroll02,
		},{
			path:'scroll03',
			name: 'scroll03',
			component: xqScroll03,
		},{
			path:'scroll04',
			name: 'scroll04',
			component: xqScroll04,
		}
	]
}];

const scrollBehavior = (to, from, savedPosition) => {
	
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    //console.log(savedPosition)
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}




const router = new Router({
  mode: 'history',
  routes,
  //scrollBehavior
})
router.beforeEach((to, from, next)=>{
	if(from.meta.keepAlive){
		console.log(from.component)
	}
	next()
})
export default router;
