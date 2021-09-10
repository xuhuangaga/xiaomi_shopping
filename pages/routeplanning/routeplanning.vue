<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="小米之家"></Head>
		<view class="xm-content p-10">
			<view class="wbfb m-t10 wbfb hbfb" id="container">
			</view>
			<view class="m-t20 wbfb">
				<view class="lh25 b-b p-tb10">
					{{policy}}
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						起点:
					</view>
					<view class="m-l10" style="width:600rpx">
						{{start}}
					</view>
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						终点:
					</view>
					<view class="m-l10" style="width:600rpx">
						{{end}}
					</view>
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						距离:
					</view>
					<view class="m-l10" style="width:600rpx">
						{{distance}}公里
					</view>
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						过路费:
					</view>
					<view class="m-l10">
						￥{{tolls}}元
					</view>
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						预计时间:
					</view>
					<view class="m-l10">
						{{time}}小时
					</view>
				</view>
				<view class="f-a-c lh25 b-b p-tb10">
					<view class="">
						距离收费站预计还有:
					</view>
					<view class="m-l10">
						{{tolls_distance}}公里
					</view>
				</view>
				<view class="m-t-b10">
					驾车路线
				</view>
				<view class="p-10 b-b" v-for="(item,index) in steps">
					{{item.instruction}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				//起点
				start:'',
				//终点
				end:'',
				//距离
				distance:0,
				//描述
				policy:'',
				//预计时间
				time:0,
				//过路费
				tolls:0,
				//路线
				steps:[],
				//距离收费站的公里数
				tolls_distance:0
			}
		},
		methods: {},
		mounted() {
			let store = uni.getStorageSync('storeItem')
			let position=null
			if (store) {
				// console.log(store);
				//终点
				this.end=store.address
				this.$utils.getLocation(store)
				.then(res=>{
					position=res.data.position
					//起点
					this.start=res.data.formattedAddress
					// console.log(res);
					//获取路线
					this.$utils.getLocation(store,position)
					.then(r=>{
						//获取公里数
						this.distance=Math.round(r.route.routes[0].distance/1000)
						this.policy=r.route.routes[0].policy
						this.time=(r.route.routes[0].time/3600).toFixed(2)
						this.tolls=r.route.routes[0].tolls
						this.steps=r.route.routes[0].steps
						this.tolls_distance=Math.round(r.route.routes[0].tolls_distance/1000)
					})
				})
			}
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
	.xm-content {
		/* #ifndef MP-WEIXIN */
		padding-top: 90rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 250rpx;
		/* #endif */
	}
#container {
		height: 500rpx;
	}
</style>
