<template>
	<div id="jrtt">
		<div class="top">
			<p>今日头条</p>
			<i class="searchIcon iconfont icon-search" @click="searchShow = !searchShow"></i>
		</div>
		<div class="container">
			<xq-search :searchShow="searchShow" v-on:openSearch="search"></xq-search>
			<xq-nav :navArr="navArr"></xq-nav>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import router from '../router/';


Vue.component('xq-nav', {
	template: `
			<div class="nav">
				<ul>
					<li v-for="n in navArr">
						<router-link :to="n.link">
							<i class="iconfont" :class="[n.icon]"></i>
							<p>{{n.title}}</p>
						</router-link>
					</li>
				</ul>
			</div>
			`,
	props: ['navArr']
})
Vue.component('xq-search', {
	template: `
			<div class="search" v-show="searchShow">
				<input type="text" v-model="searchMsg">
				<button @click="search">搜索</button>
			</div>
			`,
	props: ['searchShow'],
	data() {
		return {
			searchMsg: '',
		};
	},
	methods: {
		search() {
			var self = this;
			this.$emit('openSearch', self.searchMsg);
		},
	},
})


export default {
	data() {
		return {
			navArr: [{
				title: '新闻要点',
				icon: 'icon-xinwen',
				link: 'index'
			}, {
				title: '今日热点',
				icon: 'icon-comiisredian',
				link: 'redian'
			}, {
				title: '海外咨询',
				icon: 'icon-ifast-',
				link: 'haiwai'
			}, {
				title: '军事浏览',
				icon: 'icon-junshi',
				link: 'junshi'
			}],
			newsList: [],
			filterMsg: [],
			searchShow: false,
			searchMsg: '',
		};
	},
	methods: {
		search(data) {
			//console.log('data',data)
			var self = this;
			self.searchMsg = data;
			//console.log(self.searchMsg, self.newsList)
			self.filterMsg = self.newsList.filter(function(item) {
				return item.chlname.indexOf(self.searchMsg) != -1 || item.title.indexOf(self.searchMsg) != -1;

			})
			vmCommuty.$emit('returnList', self.filterMsg);
		}
	},
	mounted() {
		var self = this;
		this.$nextTick(function() {
			//console.log('updated')
			vmCommuty.$on('newslist', function(data) {
				console.log('data', data)
				self.newsList = data;
				self.filterMsg = data;
			})
		})
	},
	router
}
</script>

