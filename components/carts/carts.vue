<template>
	<view class="p-10 bc-e c-data">
		<view class="f-j-e wbfb">
			<view class="" @click="edit">
				{{ isEdit?'完成':'编辑'}}
			</view>
		</view>
		<view class="f-j-b m-t10">
			<view class="">
				<view class="">
					<cc-checkbox :option="item1" @change="allChange" :checked.sync="allChecked"></cc-checkbox>
				</view>
			</view>
			<view class="f-c-9">
				已免运费
			</view>
		</view>
		<view class="bc-w m-t20 p-10  br-10" v-for="(item,index) in data" :key="index">
			<cc-swipe-cell>
				<view class="f-a-c">
					<view v-show="!isEdit">
						<cc-checkbox @change="checkChange(item,$event)" :checked.sync="item.isChecked" :option="item3">
						</cc-checkbox>
					</view>
					<view v-show="isEdit">
						<cc-checkbox @change="delChange(item,$event)" :checked.sync="item.isDelete" :option="item3">
						</cc-checkbox>
					</view>
					<view class="bc-e br-10 p-10 c-img m-lr10" @click="goto(item.goods._id)">
						<image :src="item.goods.cover" class="wbfb hbfb"></image>
					</view>

					<view>
						<view @click="goto(item.goods._id)">
							{{item.goods.name}}
						</view>
						<view class="bc-e f-c-9 p-5 br-5 m-t-b5 spec-dv" @click="changeShow(item.goods,item.spec)">
							<view class="f-a-c">
								<view class="sl-one">
									{{item.spec[0]&&item.spec[0].checked}}
								</view>
								<image class="m-l10" src="/static/xjt.png" style="width:40rpx;height:40rpx;"></image>
							</view>
						</view>
						<view class="f-j-b">
							<view class="price m-r20">
								￥{{item.goods.presentPrice}}
							</view>
							<view class="m-l10">
								<cc-stepper @minus="minus(item,$event)" @plus="plus(item,$event)"
									:value.sync="item.count">
								</cc-stepper>
							</view>
						</view>
					</view>
				</view>
				<template #right>
					<cc-button type="error" @click="delItem(item)">删除</cc-button>
				</template>
			</cc-swipe-cell>
		</view>
		<view class="p-f c-bottom bc-w f-j-b z">
			<view class="">
				<cc-checkbox :option="item2" @change="allChange" :checked.sync="allChecked"></cc-checkbox>
			</view>
			<view v-show="!isEdit" class="f-a-c">
				<view class="f-a-c">
					<view class="">
						合计:
					</view>
					<view class="m-l10 price">
						￥{{totalMoney}}
					</view>
				</view>
				<view class="m-l10">
					<cc-button type="warning" round size="small" @click="buy">
						结算{{checkedNum}}
					</cc-button>
				</view>
			</view>
			<view v-show="isEdit">
				<cc-button round size="small" @click="del">删除</cc-button>
			</view>
		</view>
		<Spec :spec="spec" @carChangeShow="carChangeShow" :data="goods" @setSpec="setSpec" v-if="show" :isCarts="true">
		</Spec>
	</view>
</template>

<script>
	import Spec from '../details/dspec/dspec.vue'
	export default {
		components: {
			Spec
		},
		props: {
			data: {
				type: Array
			},
			user: {
				type: Object
			}
		},
		data() {
			return {
				checkedNum: '',
				//是否编辑
				isEdit: false,
				item1: {
					label: '小米自营',
					checkedColor: '#Ff6c18'
				},
				item2: {
					label: '全选',
					checkedColor: '#Ff6c18'
				},
				item3: {
					checkedColor: '#Ff6c18'
				},
				allChecked: false,
				goods: null,
				spec: [],
				show: false
			}
		},
		methods: {
			carChangeShow() {
				this.show = false
			},
			//控制修改规格弹框是否显示
			changeShow(goods, spec) {
				this.show = true
				this.goods = goods,
					this.spec = spec
			},
			//跳转到详情
			goto(id) {
				uni.navigateTo({
					url: `/pages/details/details?id=${id}`
				})
			},
			//修改规格
			setSpec(item) {
				if (item.arr) {
					this.spec = item.arr
					this.data.map(i => {
						if (i.goods._id === item.data) {
							i.spec = item.arr
						}
					})

				} else {
					this.spec = item
					this.data.map(i => {
						if (i.goods._id === item._id) {
							i.spec = item
						}
					})
				}
				this.$emit('setData', this.data)
			},
			//点击删除
			del() {
				let arr = this.data.filter(item => {
					return item.isDelete
				})
				if (!arr.length) {
					uni.showToast({
						title: '请选择需要删除的商品',
						icon: 'none'
					})
				} else {
					uni.showModal({
						title: '确定删除该条数据?',
						success: (res) => {
							if (res.confirm) {
								this.$emit('delCarts', arr)

							} else {
								// Toast('您取消了操作')
							}
						}
					})
				}

			},
			//左滑删除
			delItem(item) {
				item.isDelete = true
				this.$emit('setData', this.data)
				uni.showModal({
					title: '确定删除该条数据?',
					success: (res) => {
						if (res.confirm) {
							this.$emit('delCarts', [item])
						} else {
							// Toast('您取消了操作')
						}
					}
				})
			},
			//点击结算
			buy() {
				let arr = this.data.filter(item => {
					return item.isChecked
				})
				if (!arr.length) {
					uni.showToast({
						title: '请选择需要结算的商品',
						icon: 'none'
					})
				} else {
					//将需要结算的商品信息存本地
					let arr = this.data.filter(item => {
						return item.isChecked
					})
					uni.setStorageSync('toBePay', arr)
					uni.navigateTo({
						url: "/pages/orders/orders"
					})
				}
			},
			allIsChecked() {
				this.allChecked = this.data.every(item => {
					return item.isChecked
				})
			},
			allIsDelete() {
				this.allChecked = this.data.every(item => {
					return item.isDelete
				})
			},
			//点击单选 单选
			checkChange(item, e) {
				item.isChecked = e
				this.$emit('setData', this.data)
				this.allIsChecked()
			},
			//点击单选 删除
			delChange(item, e) {
				item.isDelete = e
				this.$emit('setData', this.data)
				this.allIsDelete()
			},
			//点击全选
			allChange(e) {
				//修改ischecked
				if (!this.isEdit) {
					this.data.map(item => {
						item.isChecked = e
					})
					this.$emit('setData', this.data)
				} else {
					//修改isdelete
					this.data.map(item => {
						item.isDelete = e
					})
					this.$emit('setData', this.data)
				}
			},
			//减少数量
			minus(item, e) {
				item.count = e
				this.$emit('editCart', item)
			},
			//增加数量
			plus(item, e) {
				item.count = e
				this.$emit('editCart', item)
			},
			edit() {
				if (!this.isEdit) {
					this.data.map(item => {
						item.isDelete = false
					})
					this.$emit('setData', this.data)
				}
				this.isEdit = !this.isEdit
			}
		},
		mounted() {
		},
		onLoad() {

		},
		onShow() {
		},
		filters: {},
		computed: {
			totalMoney() {
				let total = 0
				this.data.map(item => {
					if (item.isChecked)
						total += Number(item.goods.presentPrice) * item.count
				})
				return total
			},
			// checkedNum() {
			// 	let arr = this.data.filter(item => {
			// 		return item.isChecked === true
			// 	})
			// 	if (arr.length) return `(${arr.length})`
			// 	else return ''
			// },
		},
		watch: {
			isEdit(val) {
				if (val) {
					this.allIsDelete()
				} else {
					this.allIsChecked()
				}
			},
			data: {
				handler(val) {
					this.allIsChecked()
					let arr = val.filter(item => {
						return item.isChecked === true
					})
					if (arr.length) this.checkedNum = `(${arr.length})`
					else this.checkedNum = ''
				},
				deep: true
			}
		},
	}
</script>

<style scoped lang="scss">
	.c-data {
		/* #ifdef MP-WEIXIN */
		margin-top: 40rpx;

		/* #endif */
		.c-img {
			width: 150rpx;
			height: 150rpx;
		}

		.price {
			color: #Ff6c18;
		}

		.spec-dv {
			width: 160rpx;
		}

		padding-bottom: 240rpx;
		// height: 776rpx;
	}

	.c-bottom {
		left: 0;
		right: 0;
		/* #ifdef MP-WEIXIN */
		bottom: 0;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		bottom: 100rpx;
		/* #endif */
		padding: 20rpx 10rpx;
	}
</style>
