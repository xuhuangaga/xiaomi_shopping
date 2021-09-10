<template>
	<cc-sticky >
		<view class="t-search f-a-c" :class="{'t-search-b':isHide}">
			<view class="bc-w ts-idv" v-show="!isHide">
				<image src="/static/logo.png" class="wbfb hbfb"></image>
			</view>
			<view class="wx-cc-search-dv">
				<cc-search round :value.sync="value" :showAction="false" placeholder='请输入商品名称' @focus="goto('/pages/search/search')">
				</cc-search>
			</view>
		</view>
	</cc-sticky>

</template>

<script>
	export default {
		components: {},
		props: {
			isHide:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				value:''
			}
		},
		methods: {
			//跳转页面
			goto(url) {
				url.includes('my') ?
					uni.switchTab({
						url: url
					}) :
					uni.navigateTo({
						url: url
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
	.t-search-b {
		background-color: #fff !important;
	}
	.t-search {
		background-color: #Ff5700;
		height: 116rpx;
		padding:24rpx 0rpx 0rpx 20rpx;

		.ts-idv {
			width: 30rpx;
			height: 30rpx;
			border-radius: 20rpx;
			padding:12rpx;
		}
	}
</style>
