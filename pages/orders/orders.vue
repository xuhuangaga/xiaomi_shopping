<template>
	<view class="bc-e ">
		<Head :isBack="true" bgc="#F3f4f5" title="确认订单"></Head>
		<view class="address-dv p-10">
			<view v-if="defaultAddress" class="br-10 bc-w f-j-b p-10" @click="goto">
				<view class="">
					<view class="f-a-c">
						<view class="">
							{{defaultAddress.username}}
						</view>
						<view class="m-l10">
							{{defaultAddress.mobile}}
						</view>
					</view>
					<view class="m-t10">
						{{defaultAddress.address}}
					</view>
				</view>
				<view class="">
					<image src="/static/right.png" style="width:50rpx;height:50rpx"></image>
				</view>
			</view>
			<view v-else class="f-j-c br-10 bc-w p-10" @click="goto">
				<view class="">
					请选择收货地址>>
				</view>
			</view>
			<view style="margin-top: -30rpx;">
				<image src="/static/caitiao.jpg" style="height: 6rpx;" class="wbfb"></image>
			</view>
			<Orders @setDisCount='setDisCount' @setBottomShow="setBottomShow" :carList="carList"
				:totalMoney="totalMoney" :discount="discount"></Orders>
		</view>
		<view class="p-f order-bottom p-tb10 bc-w" :class="{'z':bottomShow}">
			<cc-submit-bar @submit="show=true" :price="totalMoney*100" buttonText="去付款" buttonColor="#Ff6c18">
				<text>共 {{carList.length}} 件</text>
			</cc-submit-bar>
		</view>
		<cc-password-input
		  :value.sync="show"
		  @complete="handleComplete"
		  @change="handleChange"
		  @backspace="handleBackspace"
		>
		</cc-password-input>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import Orders from '../../components/orders/orders.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let userModule = createNamespacedHelpers('users')
	let {
		mapActions: userActions,
		mapState: userState
	} = userModule
	let ordersModule = createNamespacedHelpers('orders')
	let {
		mapActions: ordersActions,
		mapState: ordersState
	} = ordersModule
	export default {
		components: {
			Head,
			Orders
		},
		props: {},
		data() {
			return {
				//收货地址列表
				list: null,
				//默认收货地址
				defaultAddress: null,
				//优惠金额
				discount: 0,
				//底部是否显示
				bottomShow: false,
				//数字键盘是否显示
				show: false,
				//输入的密码
				value: ''
			}
		},
		methods: {
			// 输入完成
			handleComplete(val) {
				if(val==='123456')  {
					this.submit()
					this.show=false
				}
				else {
					uni.showToast({
						title:'密码输入有误，请重新输入',
						icon:'none'
					})
					this.show=true
				}
			},
			// 输入框值变化
			handleChange(val) {
				console.log('change', val)
			},
			// 点击退格键
			handleBackspace(val) {
				console.log('backspace', val)
			},
			//更改底部是否显示
			setBottomShow(val) {
				this.bottomShow = val
			},
			//更改优惠金额 用于选择优惠券
			setDisCount(val) {
				this.discount = val
			},
			//跳转到地址列表
			goto() {
				uni.setStorageSync('isOrders', 1)
				uni.navigateTo({
					url: '/pages/address/address'
				})
			},
			//点击提交订单
			submit() {
				if (this.defaultAddress) {
					this.addOrders({
						// 用户id
						user_id: this.user._id,
						// 订单总价
						price: this.totalMoney,
						// 用户地址
						address: this.defaultAddress.address,
						// 订单商品数量
						count: this.carList.length,
						// 支付时间
						pay_time: new Date(),
						// 商品列表
						goods_list: this.carList,
						// 用户电话
						mobile: this.defaultAddress.mobile,
					})
				} else {
					uni.showToast({
						title: '请选择收货地址',
						icon: 'none'
					})
				}
			},
			...userActions(['getAddress']),
			...ordersActions(['addOrders', 'getCoupons'])
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			if (this.user)
				this.getAddress(this.user._id)
		},
		filters: {},
		computed: {
			carList() {
				return uni.getStorageSync('toBePay')
			},
			user() {
				return uni.getStorageSync('userInfo')
			},
			totalMoney() {
				let total = 0
				let arr = this.carList
				arr.map(item => {
					total += Number(item.count) * item.goods.presentPrice
				})
				return total - this.discount
			},
			...userState(['addressList'])
		},
		watch: {
			addressList(val) {
				if (val && val.length) {
					this.list = val
					let arr = this.list.filter(item => {
						return item.isDefault
					})
					if (arr.length) this.defaultAddress = arr[0]
					else this.defaultAddress = uni.getStorageSync('defaultAddress')
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.address-dv {
		min-height: 1000rpx;
		/* #ifdef MP-WEIXIN */
		padding-top: 120rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 100rpx;
		/* #endif */
		padding-bottom: 200rpx;
	}

	.order-bottom {
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
