<template>
	<div class="ArtArea" ref="artArea">
		<ul>
			<li v-for="n in filterMsg">
				<div class="imgBox"><img :src="n.bigImage[0]" alt="n.abstract"></div>
				<div class="titleBox">
					<p class="newsTitle">{{n.chlname}}</p>
					<p class="newsArticle">{{n.title}}</p>
				</div>
			</li>
		</ul>
		<div class="AddMore" @click="loadMore">点击加载更多</div>
		<div id="loadingToast" v-show="isLoadMore">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
	data() {
		return {
			newsList: [],
			scrollTopSize: 0
			//isLoadMore: false
		}
	},
	methods: {
		loadMore() {
			this.$store.dispatch('toSetFilterMsg')
			//this.isLoadMore = true;
		}
	},
	computed: {
		// ...mapGetters({
		// 	filterMsg: 'getFilterMsg'
		// })
		filterMsg(){
			//let data = this.$store.getters.getFilterMsg;
			//this.newsList = data;
			//this.$store.dispatch('toSetNewsList',this.newsList);
			let data = this.$store.getters.getNewsList;

			return data;
		},
		isLoadMore(){
			return this.$store.state.isLoad;
		}
	},

	mounted() {
		var self = this;
		this.loadMore();
		//console.log(this.$refs.artArea)
		this.$refs.artArea.onscroll = function(){
			self.scrollTopSize = this.scrollTop;
			//console.log(this.scrollHeight,this.clientHeight,this.scrollTop)
			if(this.scrollTop >= this.scrollHeight - this.clientHeight - 100){
				//console.log(11)
				self.loadMore();
				
				
			}
			//console.log(self.filterMsg.length)
		}
		//artArea
		// vmCommuty.$on('returnList', function(data) {
		// 	self.filterMsg = data;
		// })
		
	},
	activated () {
		let position = sessionStorage.getItem('indexScrollPosition');
		//console.log(position)
		this.$refs.artArea.scrollTop = JSON.parse(position).y || 0;
	},
	watch:{
		'$route'(to,from){
			
			if(from.name === 'index' && to.name !== 'index'){
				console.log(this.scrollTopSize)
				let positionStore = {
					x: 0,
					y: this.scrollTopSize
				};
				sessionStorage.setItem('indexScrollPosition',JSON.stringify(positionStore));
			}
		}
	}
}
</script>

