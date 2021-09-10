<template>
	<view class="my-dv bc-e">
		<view class="my-top">
			<view class="p-10 f-a-c">
				<view class="user">
					<image src="/static/user/touxiang.png" class="wbfb hbfb"></image>
				</view>
				<view class="m-l10 f-c-w" v-if="user">
					{{user.username}}
				</view>
				<view class="p-10 f-c-w" v-else @click="goto('/pages/login/login')">
					登录/注册
				</view>
			</view>
		</view>
		<view class="b-b p-10 f-j-b  bc-w">
			<view class="">
				我的订单
			</view>
			<view @click="checkLogin('/pages/userorders/userorders?index=0')">
				全部订单
				<cc-icon type='arrowright' size='20'></cc-icon>
			</view>
		</view>
		<view class="f-j-a p-10  bc-w">
			<view v-for="(item,index) in arr" :key="index">
				<view @click="checkLogin(item.url)">
					<view class="f-j-c">
						<image :src="item.icon" class="img"></image>
					</view>
					<view class="">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="m-t10 bc-w p-10" v-for="(item,index) in arr1" :key="index">
			<view class="f-j-b" v-for="(item1,index1) in item" :key="index1">
				<view class="">
					<image class="img" :src="item1.icon"></image>
				</view>
				<view @click="checkLogin(item1.url)" class="f-j-b wbfb m-l10 p-tb10"
					:class="{'b-b':index1<item.length-1}">
					<view class="">
						{{item1.name}}
					</view>
					<cc-icon type='arrowright' size='20'></cc-icon>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		arr,
		arr1
	} from '../../types/index.js'
	export default {
		components: {},
		props: {},
		data() {
			return {
				user: null,
				arr: arr,
				arr1: arr1
			}
		},
		methods: {
			//跳转页面
			goto(url) {
				if (url) {
					uni.navigateTo({
						url: url
					})
				}else {
				  uni.setStorageSync('userInfo',null)
				  uni.switchTab({
				  	url:'/pages/index/index'
				  })
				}
			},
			checkLogin(url) {
				this.$utils.checkLogin({
					key: 'userInfo',
					next: this.goto,
					item: url
				})
			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			this.user = uni.getStorageSync('userInfo')
		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.my-dv {
		.my-top {
			background: url('https://m.mi.com/static/img/bg.63c8e19851.png') center 0 #f37d0f;
			background-size: 100% 100%;
			/* #ifdef MP-WEIXIN */
			padding-top: 40rpx;

			/* #endif */
			.user {
				width: 80rpx;
				height: 80rpx;
			}
		}

		.img {
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>
