import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  	state: {
		filterMsg: [],
		newsList: [],
		isLoad: false
	},
  	mutations: {
		setFilterMsg(state, data) {
			state.filterMsg = state.filterMsg.concat(data);
			state.newsList = state.newsList.concat(data);
		},
		setNewsList(state, data){
			state.newsList = state.filterMsg.filter(function(item) {
				return item.chlname.indexOf(data) != -1 || item.title.indexOf(data) != -1;
			})
			//state.newsList = data;
			console.log(state.newsList)
		}
	},
  	actions: {
		toSetFilterMsg({commit,state}) {
			state.isLoad = true;
			$.ajax({
				type: 'GET',
				url: '../src/assets/data/qqnews.json',
				data: {},
				success(res) {
					commit('setFilterMsg', res.newslist);
					setTimeout(function(){

						state.isLoad = false;
					},1000)
				}
			})
		},
		toSetNewsList({commit}, data){
			//console.log('data', data)
		
			commit('setNewsList', data)
		}
  	},
  	getters: {
		getFilterMsg(state) {
			return state.filterMsg;
		},
		getNewsList(state){
			//console.log(state)
			return state.newsList;
		}
	},
})
