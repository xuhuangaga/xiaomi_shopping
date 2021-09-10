<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="购物车"></Head>
		<view class="f-j-c" style="padding-top: 100rpx;" v-if="!user || !data.length">
			<view style="padding-top: 300rpx;">
				<view v-if="!user">
					<view class="f-j-c">
						<image src="/static/no-login.png" style="width:200rpx;height:200rpx"></image>
					</view>
					<view class="f-s20 m-t-b10">
						您还没有登录哦~
					</view>
					<view class="f-c-w p-10 f-j-c">
						<cc-button color="#Ff6c18" block @click="goto('/pages/login/login',0)">立即登录</cc-button>
					</view>
				</view>
				<view class="" v-else>
					<view class="" v-if="!data.length">
						<view class="f-j-c">
							<image src="/static/no-car.png" style="width:200rpx;height:200rpx"></image>
						</view>
						<view class="f-s20 m-t-b10">
							购物车还是空的哦~
						</view>
						<view class="f-c-w p-10 f-j-c">
							<cc-button color="#Ff6c18" block @click="goto('/pages/index/index',1)">去购物</cc-button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="" v-if="data.length" style="padding-top: 88rpx;">
			<Car :data="data" @setData="setData" :user="user" @delCarts="delCarts" @editCart="editCart"></Car>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import Car from '../../components/carts/carts.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let productModule = createNamespacedHelpers('product')
	let {
		mapActions: productActions,
		mapState: productState
	} = productModule

	export default {
		components: {
			Head,
			Car
		},
		props: {},
		data() {
			return {
				//购物车数据
				data: [],
				//用户信息
				user: null,
				//需要删除的购物车数量
				count: 0
			}
		},
		methods: {
			//跳转页面
			// index 0:一般组件  1：tabbar组件
			goto(url, index) {
				if (index) {
					uni.switchTab({
						url: url
					})
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			//删除购物车
			delCarts(arr) {
				this.count = arr.length
				arr.map(item => {
					this.delCart({
						user_id: this.user._id,
						id: item._id
					})
				})
			},
			//修改购物车
			editCart(item) {
				this.updateCart({
					id:item._id,
					user_id:this.user._id,
					count:item.count
				})
			},
			setData(val) {
				this.data=val
			},
			...productActions(['getCart', 'delCart','updateCart'])
		},
		mounted() {
		},
		onLoad() {

		},
		onShow() {
			this.user = uni.getStorageSync('userInfo')
			if (this.user)
				this.getCart(this.user._id)
		},
		filters: {},
		computed: {
			...productState(['carList', 'isDelete'])
		},
		watch: {
			carList(val) {
				if (val)
					this.data = val
			},
			isDelete(val) {
				if (val) {
					// this.count--
					// if (!this.count) {
						
					// }
					uni.showToast({
						title: '删除成功',
						icon: 'none'
					})
					setTimeout(() => {
						this.data = this.data.filter(item => {
							return !item.isDelete
						})
					}, 1000)
				}
			}
		},
	}
</script>

<style scoped lang="scss">

</style>
