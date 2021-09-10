<template>
	<view class="f-a-c bc-w p-f d-top p-10 wbfb z">
		<view class="yd back f-j-c" @click="goBack">
			<image src="/static/back.png" style="width: 40rpx;height: 40rpx;"></image>
		</view>
		<view class="f-j-c wbfb" v-show="isShow" style="margin-left: -100rpx;">
			<view class="f-a-c f-s14">
				<view class="p-l-r10 item" :class="{'active':active===index}" v-for="(item,index) in arr" :key="index" :id="'tab'+(index+1)" @click="change(index)">
					<view>
						{{item.name}}
					</view>
					<view class="f-j-c">
						<view class="hx" :class="{'hx-active':active===index}">
						</view>
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
			isShow: {
				type: Boolean,
				default: false
			},
			active:{
				type:Number
			}
		},
		data() {
			return {
				arr: [{
						name: '商品'
					},
					{
						name: '评价'
					},
					{
						name: '详情'
					},
					{
						name: '推荐'
					},
				]
			}
		},
		methods: {
			//切换顶部的tab
			change(index,id){
				this.$emit('change',index)
			},
			//返回上一页
			goBack(){
				uni.navigateBack()
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
	.d-top {
		.back {
			width: 30rpx;
			height: 30rpx;
			border: 1px solid #eee;
			padding: 10rpx;
		}
		.active {
			font-weight: bold;
			color: #Ff6c18;
		}
		.hx {
			width: 36rpx;
			height: 6rpx;
			background-color: #fff;
			margin-top: 4rpx;
			border-radius: 4rpx;
		}
		.hx-active {
			background-color: #Ff6c18 !important;
		}
		padding-top: 60rpx;
	}
</style>
