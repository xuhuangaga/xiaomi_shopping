<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" :title="title" :isCenter="true">
			<template #right>
				<!-- #ifndef MP-WEIXIN -->
				<cc-icon type='search' size='20' @click="goto('/pages/search/search')"></cc-icon>
				<!-- #endif -->
			</template>
		</Head>
		<view class="orders-con">
			<cc-tabs @change="change" :current="current" :list="tab" lineColor="#Ff6c18" activeColor="#Ff6c18">
			</cc-tabs>
			<!-- 显示订单信息 -->
			<view class="m-t10 p-10 bc-e">
				<view v-if="orderList&&orderList.length">
					<view class="br-10 order-item p-10 m-b10 bc-w" v-for="(item,index) in orderList" :key="index">
						<view class="f-j-b">
							<view class="">
								{{item.pay_time}}
							</view>
							<view @click="del(item.id)">
								<cc-icon type='trash-filled' size='20'></cc-icon>
							</view>
						</view>
						<view class="f-j-b m-tb10 p-tb10 b-b" v-for="(item1,index1) in item.goods_list" :key="index1">
							<view class="br-10" @click="goto('/pages/details/details?id='+item1.goods._id)">
								<image :src="item1.goods.cover" class="o-img"></image>
							</view>
							<view class="wbfb m-l10">
								<view class="f-j-b">
									<view>
										<view class="sl-one o-name" @click="goto('/pages/details/details?id='+item1.goods._id)">
											{{item1.goods.name}}
										</view>
									</view>
									<view class="">
										<view class="o-price">
											￥{{item1.goods.presentPrice}}
										</view>
									</view>
								</view>
								<view class="f-j-b m-t10">
									<view class="f-a-c sl-two lh25 o-spec">
										<view v-for="(item2,index2) in item1.spec" :key="index2">
											{{item2.checked}}
											<text v-if="index2<item1.spec.length-1">+</text>
										</view>
									</view>
									<view class="t-a-r m-t-b10">
										x{{item.count}}
									</view>
								</view>
								<view class="f-j-e">
									<view class="recommend f-c-9 f-s14" @click="goComment(item1.goods,item.id,item1._id)">
										去评价
									</view>
								</view>
							</view>
						</view>
						<view class="f-j-e m-t10">
							<view class="">
								<view class="t-a-r">
									收货地址: {{item.address.split(',').join('')}}
								</view>
								<view class="t-a-r m-t-b10">
									电话: {{item.mobile}}
								</view>
								<view class="o-price t-a-r">
									总价: ￥{{item.price}}
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else class="f-j-c p-20 m-t20">
					<view class="">
						<image src="https://s1.mi.com/m/images/m/empty.png" style="width:200rpx;height:200rpx"></image>
						<view class="t-a-c m-t10">
							暂无订单哦~
						</view>
					</view>
				</view>
			</view>
			<Recommend></Recommend>
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	import Head from '../../components/top/top.vue'
	import Recommend  from '../../components/recommend/recommend.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let ordersModule = createNamespacedHelpers('orders')
	let {
		mapActions: ordersActions,
		mapState: ordersState
	} = ordersModule
	export default {
		components: {
			Head,
			Recommend
		},
		props: {},
		data() {
			return {
				//顶部文字
				title: '',
				user: null,
				current: 0,
				tab: [{
					title: '全部'
				}, {
					title: '待付款'
				}, {
					title: '待收货'
				}]
			}
		},
		methods: {
			...ordersActions(['getOrders','delOrders']),
			//跳转页面
			goto(url) {
				uni.navigateTo({
					url: url
				})
			},
			//切换tab
			change(index) {
				// console.log(index);
			},
			//删除订单
			del(id) {
				uni.showModal({
					title:'确定删除该条订单?',
					success: (res) => {
						if(res.confirm){
							this.delOrders({
								orderId:id,
								user_id:this.user._id
							})
						}else {
					// Toast('您取消了操作')
						}
					}
				})
			},
			//点击去评价
			goComment(item,id,proId) {
				console.log(id,proId);
				uni.setStorageSync('proInfo',item)
				uni.navigateTo({
					url:`/pages/comment/comment?orderId=${id}&proId=${proId}`
				})
			}
		},
		mounted() {

		},
		onLoad(item) {
			let index = Number(item.index)
			this.current = index
			if (index === 0) this.title = '全部订单'
			else if (index === 1) this.title = '待付款'
			else this.title = '待收货'
		},
		onShow() {
			this.user = uni.getStorageSync('userInfo')
			if (this.user)
				this.getOrders(this.user._id)
		},
		filters: {},
		computed: {
			...ordersState(['orderList'])
		},
		watch: {
			orderList(val) {
				if (val) {
					val.map(item => {
						item.pay_time = dayjs(item.pay_time).format('YYYY-MM-DD HH:mm:ss')
					})
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.orders-con {
		/* #ifndef MP-WEIXIN */
		padding-top: 120rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 150rpx;

		/* #endif */
		.order-item {
			border: 1px solid #eee;

			.o-img {
				width: 200rpx;
				height: 200rpx;
				border-radius: 20rpx;
			}

			.o-price {
				color: #Ff6c18;
			}

			.o-spec {
				width: 400rpx;
			}

			.recommend {
				border: 1px solid #Ff6c18;
				width: fit-content;
				padding: 6rpx;
			}
		}
	}
</style>
