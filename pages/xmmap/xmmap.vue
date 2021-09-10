<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="小米之家"></Head>
		<view class="xm-content">
			<view class="wbfb" id="container">
			
			</view>
			<view class="p-10 home-dv" v-if="storeList && storeList[0]">
				<view class="p-10 br-10 home-item m-b10" @click="goto(item)" v-for="(item,index) in storeList[0].store_list" :key="index">
					<view class="lh25 sl-one">
						{{item.store_name}}
					</view>
					<view class="lh25 m-t-b10 f-s12 f-c-9">
						{{item.shop_time}}
					</view>
					<view class="lh25 f-s12 f-c-9">
						{{item.address}}
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let homeModule = createNamespacedHelpers('home')
	let {
		mapActions: homeActions,
		mapState: homeState
	} = homeModule
	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {}
		},
		methods: {
			...homeActions(['getStoreHome']),
			//跳转到详情
			goto(item) {
				uni.setStorageSync('storeItem',item)
				uni.navigateTo({
					url:'/pages/homedetails/homedetails'
				})
			}
		},
		mounted() {

		},
		onLoad(item) {
			this.getStoreHome({
				area_name: item.name,
				area_id: item.id
			})
		},
		onShow() {

		},
		filters: {},
		computed: {
			...homeState(['storeList'])
		},
		watch: {
			storeList(val) {
				if (val && val[0]) {
					this.$utils.getLocation(val[0].store_list[0])
				}
			}
		},
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

	.home-dv {
		height: 1000rpx;
		overflow-y: scroll;

		.home-item {
			border: 1px solid #eee
		}
	}
</style>
