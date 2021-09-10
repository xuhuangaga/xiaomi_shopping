<template>
	<view v-if="hot.length" class="p-10">
		<view class="">
			搜索发现
		</view>
		<view class="f-j-b f-w m-t-b10">
			<view v-for="(item,index) in hot" :key="index" class="t-a-c h-item p-10" @click="change(item.name)">
				{{item.name}}
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			hot: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//点击热词
			change(item) {
				uni.navigateTo({
					url:`/pages/productlist/productlist?keyword=${item}`
				})
			}
		},
		mounted() {
		},
		onLoad() {

		},
		onShow() {
		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
.h-item {
	width: 40%;
}
</style>
