<template>
	<view class="login-dv">
		<view class="top wbfb f-j-c">
			<view style="margin-top: -50rpx;">
				<view class="t-a-c">
					<image src="/static/login.png" style="width: 80rpx;height: 80rpx;"></image>
				</view>
				<view class="t-a-c m-t10">
					让每个人都能享受科技的乐趣
				</view>
			</view>
		</view>
		<view class="p-20">
			<view class="f-s20 f-w-b">
				{{isPhoneLogin?'小米手机号登录':'小米账号登录'}}
			</view>
			<LogRes btnText="登录" :isLogin="true" :isPhoneLogin="isPhoneLogin" @getValues="getValues"></LogRes>
			<view class="f-j-c m-t10">
				<view class="f-a-c f-c-9 f-s12">
					<view @click="isPhoneLogin=true" v-show="!isPhoneLogin">
						手机号登录
					</view>
					<view @click="isPhoneLogin=false" v-show="isPhoneLogin">
						用户名登录
					</view>
					<view class="m-lr10">
						|
					</view>
					<view @click="gogo('/pages/register/register',0)">
						立即注册
					</view>
					<view class="m-lr10">
						|
					</view>
					<view @click="gogo('/pages/index/index',1)">
						首页
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import LogRes from '../../components/loginres/loginres.vue'
	export default {
		components: {
			LogRes
		},
		props: {},
		data() {
			return {
				//是否手机号登录
				isPhoneLogin: false
			}
		},
		methods: {
			//跳转到注册
			gogo(url, istabbar) {
				if (istabbar)
					uni.switchTab({
						url: url
					})
				else
					uni.navigateTo({
						url: url
					})
			},
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {

		},
		watch: {

		},
	}
</script>

<style scoped lang="scss">
	.login-dv {
		.top {
			/* #ifdef MP-WEIXIN */
			height: 550rpx;
			background-size: 100% 700rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			height: 340rpx;
			background-image: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/background.d3d7d2dd.png');
			background-size: 100% 500rpx;
			/* #endif */
		}
	}
</style>
