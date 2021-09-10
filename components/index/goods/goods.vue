<template>
	<scroll-view scroll-y class="hbfb">
		<!-- lazy-load -->
		<view class="f-j-b p-10 f-w">
			<view class="p-r t-p-item m-b10 bc-w br-10 p-10" v-for="(item,index) in navGoods" :key="index" @click="goto(item._id)">
				<image @click="del(index)" src="/static/del.png" class="t-p-del bc-w yd"></image>
				<image :src="item.cover" lazy-load="true" class="wbfb"></image>
				<view class="t-p-name sl-two lh25">{{item.name}}</view>
				<view class="f-w-b f-s16 t-p-price m-t-b10">
					￥{{item.presentPrice}}
				</view>
				<view class="f-s12 f-c-9 o-price">
					￥{{item.originalPrice}}
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		components: {},
		props: {
			navGoods: {
				type: Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//点击关闭产品
			del(index) {
				this.$emit('del',index)
			},
			//跳转页面
			goto(id) {
				uni.navigateTo({
					url:`/pages/details/details?id=${id}`
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
	.t-p-item {
		image {
			height: 400rpx;
		}

		width: 43%;

		.t-p-del {
			width: 30rpx;
			height: 30rpx;
			position: absolute;
			right: 10rpx;
			top:10rpx;
			z-index: 3;
		}

		.t-p-price {
			color: #Ff6c18;
		}

		.o-price {
			text-decoration: line-through;
		}
	}
</style>
