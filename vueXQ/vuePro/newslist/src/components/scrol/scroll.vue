<template>
	<div style="height:100%">
		<ul class="navlist" style="padding:40px 0; background-color:#efefef;">
			<li v-for="n in nav">
				<router-link :to="n.link">{{n.title}}</router-link>
			</li>
		</ul>
		<div style="padding-top:140px; height:100%;box-sizing:border-box;">
			<div style="height:100%;overflow-x:hidden;overflow-y:auto;">
				<router-view></router-view>
			</div>
		</div>
	</div>

</template>

<script>


export default {
	data(){
		return {
			nav: [{
				title: '页面01',
				link: {name: 'scroll01'}
			},{
				title: '页面02',
				link: {name: 'scroll02'}
			},{
				title: '页面03',
				link: {name: 'scroll03'}
			},{
				title: '页面04',
				link: {name: 'scroll04'}
			}]
		}
	},
	
}
</script>

<style>
	.navlist{
		width: 100%;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
	}
	.navlist>li{
		float: left;
		width:25%;
		font-size: .8rem;
	}
</style>
