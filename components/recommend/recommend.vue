<template>
	<view class="bc-w p-10 m-t10 recommend-dv">
		<view class="f-j-c">
			<image src="/static/tj.png" style="width: 600rpx; height: 120rpx;"></image>
		</view>
		<view class="f-j-b f-w wbfb">
			<view class="item" @click="goto(item._id)" :class="{'m-r10':index%2===0}" v-for="(item,index) in list" :key="index">
					<view class="p-10">
						<image :src="item.cover" class="img"></image>
					</view>
				<view class="sl-one m-b10  p-l-r10">
					{{item.name}}
				</view>
				<view class="f-j-b p-l-r10">
					<view class="price">
						￥{{item.presentPrice}}
					</view>
					<view class="or-price f-c-9 f-s12">
						￥{{item.originalPrice}}
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Recommend from '../recommend/recommend.vue'
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
			Recommend
		},
		props: {},
		data() {
			return {
				//为你推荐数据列表
				list: []
			}
		},
		methods: {
			...productActions(['getRecommendForYou']),
			//跳转到详情
			goto(id) {
				uni.navigateTo({
					url:'/pages/details/details?id='+id
				})
			}
		},
		mounted() {
			this.getRecommendForYou()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...productState(['recommendForYou'])
		},
		watch: {
			recommendForYou(val) {
				if (val) {
					this.list = val
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.recommend-dv {

		.price {
			color: #Ff6c18;
		}

		.or-price {
			text-decoration: line-through;
		}
		.item {
			width: 48%;
		}
		.img {
			width: 300rpx;
			height: 300rpx;
		}
	}
</style>
