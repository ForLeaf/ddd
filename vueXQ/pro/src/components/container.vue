<template>
	<div class="ArtArea">
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
export default {
	data() {
		return {
			newsList: [],
			filterMsg: [],
			isLoadMore: false
		}
	},
	methods: {
		loadMore() {
			var self = this;
			self.isLoadMore = true;
			$.ajax({
				type: 'GET',
				url: './src/static/data/qqnews.json',
				data: {},
				success(res) {
					self.newsList = self.newsList.concat(res.newslist);
					self.filterMsg = Object.assign(self.newsList);
					vmCommuty.$emit('newslist', self.filterMsg);
					self.isLoadMore = false;
				}
			})
		}
	},
	mounted() {
		var self = this;
		this.loadMore();
		vmCommuty.$on('returnList', function(data) {
			self.filterMsg = data;
		})
	}
}
</script>

