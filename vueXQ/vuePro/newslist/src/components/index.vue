<template>
	<div id="jrtt">
		<div class="top">
			<p>今日头条</p>
			<i class="searchIcon iconfont icon-search" @click="searchShow = !searchShow"></i>
		</div>
		<div class="container">
			<xqSearch :searchShow="searchShow" v-on:openSearch="search"></xqSearch>
			<xqNav :navArr="navArr"></xqNav>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import router from '../router/';
import {mapState,mapGetters} from 'vuex';

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
			//filterMsg: [],
			searchShow: false,
			searchMsg: '',
		};
	},
	components: {
		xqSearch: {
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
		},
		xqNav: {
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
		}
	},
	methods: {
		search(data) {
			//console.log('data',data)
			var self = this;
			self.searchMsg = data;
			//console.log(self.searchMsg, self.newsList)
			// self.filterMsg = self.newsList.filter(function(item) {
			// 	return item.chlname.indexOf(self.searchMsg) != -1 || item.title.indexOf(self.searchMsg) != -1;
			// })

			console.log('123',self.filterMsg,data)
			self.$store.dispatch('toSetNewsList',data);
			//vmCommuty.$emit('returnList', self.filterMsg);
		}
	},
	computed:{
		filterMsg(){
			this.newsList = this.$store.getters.getFilterMsg;
			return this.newsList;
		}
	},
	mounted() {
		var self = this;
		this.$nextTick(function() {
		
			// self.newsList = this.$store.getters.getFilterMsg;
			// console.log('index',self.newsList)
			// self.filterMsg = self.newsList;
		})
	},
	router
}
</script>

