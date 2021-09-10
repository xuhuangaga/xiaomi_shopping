<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="小米之家"></Head>
		<view class="xm-content p-10" v-if="store">
			<view class="wbfb m-t10" id="container">
			</view>
			<view class="b-b f-a-c p-tb10 m-t20">
				<cc-icon type='home' size='20'></cc-icon>
				<view class="m-l10">
					{{store.store_name}}
				</view>
			</view>
			<view class="b-b f-a-c p-tb10">
				<cc-icon type='spinner-cycle' size='20'></cc-icon>
				<view class="m-l10">
					<view class="">
						营业时间
					</view>
					<view class="f-s12 f-c-9 m-t10">
						{{store.shop_time}}
					</view>
				</view>
			</view>
			<view class="b-b f-a-c p-tb10">
				<cc-icon type='location' size='20'></cc-icon>
				<view class="m-l10 f-j-b wbfb">
					<view class="">
						<view class="">
							地址
						</view>
						<view class="f-s12 f-c-9 m-t10">
							{{store.address}}
						</view>
					</view>
					<view style="color:green" @click="goto">
						去这儿
					</view>
				</view>
			</view>
			<view class="b-b f-a-c p-tb10">
				<cc-icon type='phone' size='20'></cc-icon>
				<view class="m-l10 f-j-b wbfb">
					<view class="">
						<view class="">
							电话
						</view>
						<view class="f-s12 f-c-9 m-t10">
							{{store.tel}}
						</view>
					</view>
					<a :tel="store.tel" style="color:green">
						打电话
					</a>
				</view>
			</view>
			<view class="b-b f-a-c p-tb10">
				<cc-icon type='heart' size='20'></cc-icon>
				<view class="m-l10">
					<view class="">
						支持服务
					</view>
					<view class="f-s12 f-c-9 m-t10">
						{{store.support_service.join('、')}}
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
			return {
				//店铺信息
				store: null
			}
		},
		methods: {
			goto() {
				uni.navigateTo({
					url:'/pages/routeplanning/routeplanning'
				})
			}
		},
		mounted() {
			this.store = uni.getStorageSync('storeItem')
			if (this.store) {
				this.$utils.getLocation(this.store)
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
