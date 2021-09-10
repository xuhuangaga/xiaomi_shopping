<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="bb"></view>
		<!-- #endif -->
		<view class="ban-dv p-r">
			<cc-swiper class="i-cc-swiper" @click="handleClick" :list="banner"></cc-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			banner: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//点击轮播图
			handleClick(e) {
				if (e.item.link) {
					// #ifdef MP-WEIXIN
					uni.setClipboardData({
						data: url,
						success: function() {}
					});
					// #endif
					// #ifndef MP-WEIXIN
					window.open(e.item.link, '_blank')
					// #endif
				}
			}
		},
		mounted() {},
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
	.ban-dv {
		/* #ifdef MP-WEIXIN */
		z-index:2;
		border-radius: 15px;
		padding: 10px
			/* #endif */
	}

	.bb {
		width: 100%;
		height: 140px;
		position: absolute;
		z-index: 1;
		overflow: hidden;
	}

	.bb::after {
		content: '';
		width: 120%;
		height: 100px;
		position: absolute;
		left: -10%;
		top: 0;
		z-index: -1;
		border-radius: 0 0 60% 60%;
		background: #ff4d00 !important;
	}
</style>
