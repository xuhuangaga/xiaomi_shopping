<template>
	<view>
		<view class="br-10 m-t10 bc-w p-10">
			<view v-for="(item,index) in carList" :key="index" class="f-a-c m-b10 br-10">
				<view class="goods-img f-1">
					<image :src="item.goods.cover" class="goods-img br-10"></image>
				</view>
				<view class="f-j-b f-2 m-l10">
					<view class="">
						<view class="m-b10 lh25 sl-one order-p-name f-s14">
							{{item.goods.name}}
						</view>
						<view class="f-a-c sl-three f-s12">
							<view v-for="(item1,index1) in item.spec" :key="index1">
								{{item1.checked}}
								<text v-if="index1 < item.spec.length-1">,</text>
							</view>
						</view>
					</view>
				</view>
				<view class="">
					<view class="f-s14">
						￥{{item.goods.presentPrice}}
					</view>
					<view class="m-t10 t-a-c f-c-9 f-s12">
						x {{item.count}}
					</view>
				</view>
			</view>
		</view>
		<view class="br-10 bc-w p-10 f-c-9 m-t10">
			<view class="f-j-b p-b10">
				<view class="">
					商品总价
				</view>
				<view class="">
					￥{{totalMoney}}
				</view>
			</view>
			<view class="f-j-b m-t-b10">
				<view class="">
					运费
				</view>
				<view class="">
					包邮
				</view>
			</view>
			<view class="f-j-b p-t10">
				<view class="">
					优惠券
				</view>
				<view class="f-j-b">
					<view class="left-con" v-if="discount" @click="setBottomShow">
						-￥{{discount}}
					</view>
					<view class="left-con" v-else @click="setBottomShow">
						可用优惠券 {{coupons.length}} 张
					</view>
					<view class="m-l10">
						<image src="/static/right.png" style="width:50rpx;height:50rpx"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="br-10 bc-w p-10 f-c-9 m-t10">
			<view class="f-j-b">
				<view class="">
					发票
				</view>
				<view class="">
					电子普通发票-个人
				</view>
			</view>
		</view>
		<cc-popup height="1000" round :show.sync="show" mode="bottom" @close="close">
			<template class="" v-if='coupons.length || disabledCoupons.length'>
			<cc-coupon-list @change="change" :coupons="coupons" :disabled-coupons="disabledCoupons"></cc-coupon-list>
			</template>
		</cc-popup>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let ordersModule = createNamespacedHelpers('orders')
	let {
		mapActions: ordersActions,
		mapState: ordersState
	} = ordersModule
	export default {
		components: {},
		props: {
			carList: {
				type: Array
			},
			totalMoney: {
				type: Number
			},
			discount: {
				type: Number
			}
		},
		data() {
			return {
				show: false,
				//可用优惠券
				coupons: [],
				//不可以优惠券
				disabledCoupons: []
			}
		},
		methods: {
			...ordersActions(['getCoupons']),
			//切换优惠券触发
			change(item) {
				this.$emit('setDisCount', Number(item.item.valueDesc))
			},
			setBottomShow() {
				this.show=true
				this.$emit('setBottomShow',false)
			},
			close() {
				this.$emit('setBottomShow',true)
			}
		},
		mounted() {

		},
		created() {
			this.getCoupons()
		},
		onLoad() {},
		onShow() {

		},
		filters: {},
		computed: {
			...ordersState(['couponList'])
		},
		watch: {
			couponList(val) {
				this.disabledCoupons = []
				this.coupons = []
				if (val && val.length) {
					val.map(item => {
						//>=使用门槛 并且开始时间小于等于当前时间  并且结束时间大于当前时间
						//是可用优惠券 反之则是不可用优惠券
						if (this.totalMoney >= Number(item.threshold) &&
							dayjs(item.start_time).valueOf() <= dayjs().valueOf() &&
							dayjs(item.end_time).valueOf() > dayjs().valueOf()) {
							this.coupons.push(item)
						} else {
							let reason = ''
							//不可以原因
							if (this.totalMoney < Number(item.threshold)) reason = "未达到使用门槛"
							else if (dayjs(item.start_time).valueOf() > dayjs().valueOf())
								reason = "未开始"
							else reason = '已过期'
							item.reason = reason
							this.disabledCoupons.push(item)
						}
					})
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.goods-img {
		width: 180rpx;
		height: 180rpx;
	}

	.order-p-name {
		width: 300rpx;
	}

	.left-con {
		margin-top: -8rpx;
	}
</style>
