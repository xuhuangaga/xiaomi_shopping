<template>
	<view class="bc-w br-10 p-10" v-if="nav">
		<view class="f-w f-j-b nav-dv">
			<view v-for="(item,index) in nav" :key='index'>
				<view class="img-dv" @click="goto(index)">
					<image :src="item.url" class="wbfb hbfb"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			nav:{
				type:Array
			}
		},
		data() {
			return {}
		},
		methods: {
			//跳转到秒杀
			goto(index) {
				if(!index) 
				uni.navigateTo({
					url:'/pages/seckill/seckill'
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
	.nav-dv {
		.img-dv {
			width: 130rpx;
			height: 130rpx;
		}
	}
</style>
