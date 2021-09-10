<template>
	<view class="p-t10 p-r10 p-r c-r-dv right">
		<view class="bc-w">
			<scroll-view scroll-x show-scrollbar="true" class="w-s-n sv w-vw p-f z " style="width: 530rpx;">

				<view class="c-r w-f-c" @click="active(index,item._id)" :class="{'t-active':twoActive===index}"
					v-for="(item,index) in list" :key="index">
					{{item.name}}

				</view>
			</scroll-view>
		</view>
		<view class="c-p-dv">
			<scroll-view scroll-y class="h-vh" :scroll-into-view="'a'+id">
				<view v-for="(item,index) in list" class="p-10 p-t0" :key="index">
					<view class="f-s20" :id="'a'+item._id">
						{{item.name}}
					</view>
					<view v-for="(item1,index1) in item.list" :key="index1" class="m-t10 c-p-item">
						<view class="f-a-c m-b10 br-10 c-p-i-dv p-10" v-for="(item2,index2) in item1[item.name]"
							@click="goto(item2._id)" :key="index2">
							<view class="">
								<image :src="item2.cover" class="c-r-img"></image>
							</view>
							<view class="m-l10">
								<view class="sl-one c-p-name f-s16">
									{{item2.name}}
								</view>
								<view class="f-a-c m-t10">
									<view class="">￥</view>
									<view class="f-s16">
										{{item2.presentPrice}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			list: {
				type: Array
			},
			twoActive: {
				type: Number
			}
		},
		data() {
			return {
				id: ''
			}
		},
		methods: {
			//切换二级分类
			active(index, id) {
				this.$emit('active', {
					index,
					id
				})
				this.id = id
			},
			//跳转到详情
			goto(id) {
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
	.right {
		width: 550rpx;
	}

	.c-r-dv {
		left: 234rpx;

		.sv {
			/* #ifdef MP-WEIXIN */
			height: 70rpx;
			margin-top: -16rpx;
			padding-top: 30rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			height: 90rpx;
			margin-top: -40rpx;
			padding-top: 50rpx;
			/* #endif */
			background: #fff;

			.t-active {
				background-color: #F3f4f5;
				border-radius: 10rpx;
			}

			.c-r {
				padding: 8rpx 20rpx;
				display: inline-block;
				width: fit-content;
			}
		}

		.c-r-img {
			width: 120rpx;
			height: 120rpx;
		}

		.c-p-dv {
			margin-top: 100rpx;
		}

		.c-p-item {
			width: 440rpx;

			.c-p-name {
				width: 280rpx;
			}

			.c-p-i-dv {
				background-color: #F3f4f5;
			}
		}
	}
</style>
