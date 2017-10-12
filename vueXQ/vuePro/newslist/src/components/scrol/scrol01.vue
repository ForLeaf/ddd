<template>
	<div style="width:100%;">
		这是01页面
		<ul>
			<li class="getli" v-lengthfor="arrlength">11</li>
		</ul>
	</div>

</template>

<script>
import Vue from 'vue';

Vue.directive('lengthfor',{
	bind(el,bind){

		console.log(el,el.parentNode)
		// for(var i = 0; i < bind.value; i++){
		// 	el.parentNode.insertBefore(el.cloneNode(true),el)		
		// }
	},
	inserted(el,bind){

		console.log(el,el.parentNode)
		for(var i = 0; i < bind.value; i++){
			el.parentNode.insertBefore(el.cloneNode(true),el)		
		}
	},
	update(el,bind){

		console.log(el,el.parentNode)
		// for(var i = 0; i < bind.value; i++){
		// 	el.parentNode.insertBefore(el.cloneNode(true),el)		
		// }
	}
})
export default {
	data(){
		return {
			arrlength: 20
		}
	},
}
</script>
