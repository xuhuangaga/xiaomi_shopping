<template>
	<view @click="goto" class="p-f z">
		<!-- #ifdef MP-WEIXIN -->
		<view class="swx-dv bc-w">
			<cc-search round disabled :showAction="false">
			</cc-search>
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
			<view class="sh-dv">
				<cc-search round disabled>
					<template #action>
						<view>搜索</view>
					</template>
				</cc-search>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {}
		},
		methods: {
			//跳转到搜索
			goto() {
				uni.navigateTo({
					url: '/pages/search/search'
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
	.swx-dv {
		padding-top: 28rpx;
		width: 750rpx;
	}
	.sh-dv {
		width: 750rpx;
	}
</style>
