<template>
	<cc-sticky :offset-top="120" z-index="1000">
		<scroll-view scroll-x show-scrollbar="true">
			<view class="f t-dv m-t10 w-f-c">
				<view class="i-tabs f-a-c f-1">
					<view class="t-item m-r10" v-for="(item,index) in recommendNav" :key="index"
						:class="active===index?'active':''" @click="change(index,item._id)">
						<view class="f-s16 t-a-c t-name">
							{{item.name}}
						</view>
						<view class="m-t10 f-s12 f-c-9 t-a-c t-desc">
							{{item.desc}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</cc-sticky>
</template>

<script>
	export default {
		components: {},
		props: {
			recommendNav: {
				type: Array
			}
		},
		data() {
			return {
				//选中的tab下标
				active: 0
			}
		},
		methods: {
			//切换tabs
			change(index,id) {
				this.active = index
				this.$emit('change',id)
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
	.t-dv {
		/* #ifdef MP-WEIXIN */
		background-color: #fff;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		background-color: #F3f4f5;

		/* #endif */
		.i-tabs {
			padding: 20rpx 0rpx 40rpx 20rpx;

			.t-item {
				width: 150rpx;

				&:last-child {
					margin-right: 0 !important;
				}
			}

			.t-desc {
				padding: 6rpx 0rpx;
			}

			.active {
				.t-name {
					color: #Ff6c18;
				}

				.t-desc {
					background-color: #Ff6c18;
					color: #fff;
					border-radius: 40rpx;
				}
			}
		}
	}
</style>
