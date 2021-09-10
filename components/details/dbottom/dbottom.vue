<template>
	<view class="p-f d-bottom bc-w" style="z-index: 998;">
		<cc-goods-action :options="options" :buttons="buttons" @click="goto" @clickButton="checkLogin">
		</cc-goods-action>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			data: {
				type: Object
			},
			carList: {
				type: Array
			}
		},
		data() {
			return {
				options: [{
						text: '首页',
						icon: 'home'
					},{
						text: '客服',
						icon: 'chat'
					},
					{
						text: '购物车',
						icon: 'cart',
						info: this.carNum,
						infoColor: '#Ff6c18'
					}
				],
				buttons: [{
						text: '加入购物车'
					},
					{
						text: '立即购买'
					}
				],
			}
		},
		methods: {
			//点击底部文字跳转页面
			goto(item) {
				if (item.index===2) {
					uni.switchTab({
						url: '/pages/carts/carts'
					})
				}else if(item.index===1) {
					uni.navigateTo({
						url: '/pages/cservice/cservice'
					})
				}
				else {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			},
			//点击按钮触发
			clickButton(item) {
				if (item.index) {
					let arr=[{
						goods:this.data,
						spec:this.spec,
						count:1,
						_id:this.data._id
					}]
					uni.setStorageSync('toBePay', arr)
				uni.setStorageSync('defaultAddress',null)
					uni.navigateTo({
						url: "/pages/orders/orders"
					})
				} else {
					this.$emit('addCarts')
				}
			},
			//检查是否登录
			checkLogin(index) {
				this.$utils.checkLogin({
					key: 'userInfo',
					next: this.clickButton,
					item: index
				})
				uni.setStorageSync('isCar', '1')
			}
		},
		mounted() {},
		onLoad() {

		},
		onShow() {},
		filters: {},
		computed: {
			carNum() {
				let val=this.$store.state.carNum
				this.options[2].info=val
				return val
			}
		},
		watch: {
			carNum(val) {
				this.options[2].info = val
			}
		},
	}
</script>

<style scoped lang="scss">
	.d-bottom {
		left: 0;
		right: 0;
		bottom: -1px;
	}
</style>
