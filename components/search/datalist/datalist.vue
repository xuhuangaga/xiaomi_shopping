<template>
	<view class="pro-list">
			<view class="b-b p-10" @click="save(item.name,item._id)" v-for="(item,index) in searchListAll" :key="index">
				{{item.name}}
			</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			searchListAll: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//点击名称 存记录到本地  跳转到详情
			save(val, id) {
				this.$emit('search', val)
				uni.navigateTo({
					url: `/pages/details/details?id=${id}`
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
.pro-list {
	height:1000rpx;
	overflow-y: scroll;
}
</style>
