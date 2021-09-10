<template>
	<view class="p-20 reg-dv">
		<image src="/static/back1.png" style="width:100rpx;height: 100rpx;" @click="goto"></image>
		<view class="f-s20 f-w-b">
			注册小米账号
		</view>
		<view class="f-s14 m-t10" style="color: #007AFF;">
			系统会根据您选择的国家/地区的法律法规存储您的个人信息
		</view>
		<LogRes btnText="注册" :isLogin="false" :isPhoneLogin="true" @getValues="getValues"></LogRes>
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
			}
		},
		methods: {
			//跳转到登录
			goto() {
				uni.navigateTo({
					url:'/pages/login/login'
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
		computed: {
		},
		watch: {
		},
	}
</script>

<style scoped lang="scss">
</style>
