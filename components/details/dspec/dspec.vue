<template>
	<view class="bc-w m-t10 p-10 d-spec">
		<view class="f-a-c" @click="show=true" v-if="!isCarts">
			<view class="m-r10">
				已选
			</view>
			<view class="f-j-b f-2 m-l10 b-b p-tb10">
				<view class="f-a-c  sl-one" style="width: 500rpx;">
					<view v-for="(item,index) in spec" :key="index">
						{{item.checked}}
						<text v-if="index < spec.length-1">,</text>
					</view>
				</view>
				<image src="/static/right.png" style="width:40rpx;height:40rpx;"></image>
			</view>
		</view>
		<view class="f-a-c p-tb10">
			<view class="m-r10">
				定位
			</view>
			<view class="m-l10">
				{{localtion}}
			</view>
		</view>
		<cc-popup :show.sync="show" mode="bottom" @clickMask="clickMask">
			<view class="p-10" style="height:1000rpx;overflow-y: auto;">
				<view class="f-a-c">
					<view class="bc-e img-dv p-10">
						<image :src="data.cover" style="width:120rpx;height: 120rpx;"></image>
					</view>
					<view class="m-l10">
						<view class="f-a-c">
							<view class="price f-s20">
								￥{{data.presentPrice}}
							</view>
							<view class="o-price f-c-9 m-l10 f-s12">
								￥{{data.originalPrice}}
							</view>
						</view>
						<view class="m-t10 f-a-c f-w" v-if="spec">
							<view class="" v-for="(item,index) in spec" :key="index">
								{{item.checked}}
								<text v-if="index < spec.length-1">,</text>
							</view>
						</view>
					</view>
				</view>
				<view class="m-t10">
					<view class="m-t10" v-for="(item,index) in data.spec" :key="index">
						<template v-if="item.checkList.length">
							<view class="">
								{{item.name}}
							</view>
							<view class="f-a-c f-w">
								<view class="m-t10 m-r10 spec-item br-20" v-for="(item1,index1) in item.checkList"
									:key="index1" :class="{'active':getIsHave(item._id,item1)}"
									@click="change(item._id,item1)">
									{{item1}}
								</view>
							</view>
						</template>
					</view>
				</view>
				<view class="f-j-b p-10" v-if="!isCarts">
					<view class="">
						购买数量
					</view>
					<view class="">
						<cc-stepper :value.sync="value" @minus="minus" @plus="plus"></cc-stepper>
					</view>
				</view>
			</view>
			<view class="p-10 f-c-w f-j-b z" v-if="!isCarts">
				<view class="add f-1 t-a-c p-10" @click="checkLogin(0)">
					加入购物车
				</view>
				<view class="buy f-1 t-a-c p-10" @click="checkLogin(1)">
					立即购买
				</view>
			</view>
			<view v-else @click="changeShow" class="p-10">
				<cc-button round type="warning" block>确定</cc-button>
			</view>
		</cc-popup>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			data: {
				type: Object
			},
			spec: {
				type: Array
			},
			value: {
				type: Number
			},
			//是否是购物车需要
			isCarts: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				//底部弹框是否显示
				show: false,
				//当前位置
				localtion: '定位中...'
			}
		},
		methods: {
			//查看是否包含规格
			getIsHave(id, name) {
				if (this.spec) {
					let arr = this.spec.filter(i => {
						return i._id === id
					})
					if (arr.length) {
						return arr[0].checked === name
					}
				}
				return false
			},
			minus() {
				this.$emit('setValue', this.value - 1)
			},
			plus() {
				this.$emit('setValue', this.value + 1)
			},
			//获取默认规格
			getDefaultSpec() {
				if (!this.spec.length) {
					let arr = []
					this.data.spec.map(item => {
						if (item.checkList.length) {
							arr.push({
								_id: item._id,
								name: item.name,
								checked: item.checkList[0]
							})
						}
					})
					this.$emit('setSpec', arr)
				}
			},
			//点击规格项
			// id 模型:id
			change(id, name) {
				let arr = this.spec
				arr.map(item => {
					if (item._id === id) {
						item.checked = name
					}
				})
				if (this.isCarts)
					this.$emit('setSpec', {
						arr: arr,
						data: this.data._id
					})
				else
					this.$emit('setSpec', arr)
			},
			//加入购物车
			add() {
				this.show = false
				this.$emit('addCarts')
			},
			//立即购买
			buy() {
				let arr = [{
					goods: this.data,
					spec: this.spec,
					count: this.value,
					_id: this.data._id
				}]
				uni.setStorageSync('toBePay', arr)
				uni.setStorageSync('defaultAddress', null)
				uni.navigateTo({
					url: "/pages/orders/orders"
				})
			},
			clickMask() {
				if (this.isCarts) {
					this.show = false
					this.$emit('carChangeShow')
				}
			},
			changeShow() {
				this.show = false
				this.$emit('carChangeShow')
			},
			//检查是否登录
			checkLogin(index) {
				this.$utils.checkLogin({
					key: 'userInfo',
					next: index ? this.buy : this.add,
				})
				uni.setStorageSync('isCar', '1')
			}
		},
		mounted() {
			if (this.isCarts) this.show = true
			this.getDefaultSpec()
			//获取定位
			this.$utils.getLocation()
				.then(res => {
					let temp = res.data.addressComponent
					if (temp) {
						this.localtion = temp.province + temp.city + temp.district + temp.street
					}
				})
		},
		onLoad() {

		},
		onShow() {},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.d-spec {
		.img-dv {
			border-radius: 6rpx;
		}

		.price {
			color: #Ff6c18;
		}

		.o-price {
			text-decoration: line-through;
		}

		.spec-item {
			padding: 16rpx 32rpx;
			background-color: #F3f4f5;
			border: 2rpx solid transparent;
		}

		.active {
			background-color: #fff2ef;
			border: 2rpx solid #ff5934;
		}

		.add {
			background-color: #fda200;
			border-top-left-radius: 40rpx;
			border-bottom-left-radius: 40rpx;
		}

		.buy {
			background-color: #fe4703;
			border-top-right-radius: 40rpx;
			border-bottom-right-radius: 40rpx;
		}
	}
</style>
