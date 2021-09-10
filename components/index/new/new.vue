<template>
	<view class="bc-w p-10 m-t10">
		<view class="f-w-b f-s16 f-c-6">
			人气上新
		</view>
		<view class="f-j-a m-t10">
			<view v-for="(item,index) in news" :key="index" :class="[
				index===0?'f-2':'f-1',index===1?'middle':'']" @click="goto(item._id)">
				<view class="bc-e p-10 img">
					<image :src="item.cover" class="wbfb hbfb"></image>
				</view>
				<view class="f-j-c">
					<view class="m-t10 sl-one n-name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			news:{
				type:Array
			}
		},
		data() {
			return {
			}
		},
		methods: {
			//跳转到详情
			goto(id) {
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
				})
			}
		},
		mounted() {},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
		},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.img {
		height: 200rpx;
		border-radius: 10rpx;
	}

	.n-name {
		width: 200rpx;
	}

	.n-name1 {
		width: 200rpx;
	}

	.middle {
		margin: 0px 20rpx;
	}
</style>
