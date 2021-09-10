<template>
	<view class="p-10 bc-w head p-f z wbfb" 
	:class="[{'f-a-c':!isCenter},{'f-j-b':isCenter},{'t-w':isCenter}]"
	:style="{'background-color':bgc}">
		<view v-if="isBack" @click="goBack">
			<image src="/static/back.png" class="back"></image>
		</view>
		<view class="m-l10 title" :class="{'t-a-c':isCenter}">
			{{title}}
		</view>
		<slot name="right">
			
		</slot>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			//是否显示返回箭头
			isBack: {
				type: Boolean
			},
			//显示标题
			title: {
				type: String,
				default: '小米Lite'
			},
			//背景颜色
			bgc: {
				type: String,
				default: '#fff'
			},
			isCenter:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {}
		},
		methods: {
			//返回上一页
			goBack() {
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
	.head {
		/* #ifdef MP-WEIXIN */
		padding-top: 30px;
		/* #endif */
	}

	.back {
		width: 40rpx;
		height: 40rpx
	}

	.title {
		margin-top: -10rpx;
	}
	.t-w {
		width: 95%;
	}
</style>
