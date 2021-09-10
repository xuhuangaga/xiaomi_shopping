<template>
	<view>
		<view class="p-r z">
			<Head :isBack="true" bgc="#F3f4f5"></Head>
			<Top @search="search" @input="input" :keyword="value" @focus="focus" :isFocus="true"></Top>
		</view>
		<view v-show="isShow" class="z p-f bc-w wbfb">
			<List @search="search" v-if="searchListAll" :searchListAll="searchListAll"></List>
		</view>
		<view class="p-10" style="z-index: -1;">
			<scroll-view scroll-y class="h-vh" @scrolltolower="scrolltolower">
				<view class="f-a-c b-b" @click="goto(item._id)" v-for="(item,index) in list" :key="index">
					<view class="p-10">
						<image :src="item.cover" style="width:200rpx;height:200rpx"></image>
					</view>
					<view class="m-l">
						<view class="">
							{{item.name}}
						</view>
						<view class="f-c-9 f-s12 sl-two m-t-b5">
							{{item.introduction}}
						</view>
						<view class="f-a-c">
							<view class="price">
								￥{{item.presentPrice}}
							</view>
							<view class="f-c-9 o-price f-s12 m-l10">
								￥{{item.originalPrice}}
							</view>
						</view>
					</view>
				</view>
				<cc-load-more :loading="loading" :text="text"></cc-load-more>
			</scroll-view>
		</view>
		<view>
			<cc-mask :show.sync="isShow" :zIndex="1"></cc-mask>
		</view>
	</view>
</template>

<script>
	import Top from '../../components/search/top/top.vue'
	import Head from '../../components/top/top.vue'
	import List from '../../components/search/datalist/datalist.vue'
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
			Top,
			Head,
			List
		},
		props: {},
		data() {
			return {
				//输入框的值
				value: '',
				//是否显示搜索内容
				isShow: false,
				current: 1,
				pageSize: 20,
				loading: false,
				text: '上拉加载更多',
				total: 0,
				//数据列表
				list: []
			}
		},
		methods: {
			//下拉触底加载更多
			scrolltolower() {
				if (this.list.length != this.total) {
					this.text = '加载中'
					this.loading = true
					this.current += 1
					this.getSearch({
						current: this.current,
						pageSize: this.pageSize,
						query: this.value
					})
				}
			},
			//跳转到详情
			goto(id) {
				uni.navigateTo({
					url: `/pages/details/details?id=${id}`
				})
			},
			//输入框获取焦点时触发
			focus(val) {
				this.isShow = val
			},
			//输入框输入时触发
			input(val) {
				this.value = val
				this.getSearchAll({
					query: val
				})
				this.getSearch({
					current: this.current,
					pageSize: this.pageSize,
					query: val
				})
			},
			//点击搜索 子组件top分发事件
			search(val) {
				if (val) {
					this.value = val
					//添加本地历史记录
					this.$utils.saveHistory({
						key: 'search',
						data: val
					})
					this.getSearch({
						current: this.current,
						pageSize: this.pageSize,
						query: val
					})
				}
			},
			...productActions(['getHot', 'getSearch', 'getSearchAll'])
		},
		mounted() {},
		onLoad(item) {
			//接收路由参数【搜索关键字】
			this.value = item.keyword
			this.getSearch({
				current: this.current,
				pageSize: this.pageSize,
				query: item.keyword
			})
		},
		onShow() {

		},
		filters: {},
		computed: {
			...productState(['hot', 'searchList', 'searchListAll', 'searchTotal'])
		},
		watch: {
			searchTotal(val) {
				if (val) this.total = val
			},
			searchList(val) {
				if (this.current === 1) this.list = val
				else this.list = this.list.concat(val)
				if (this.list.length === this.total) {
					this.text = "没有更多了"
					this.loading = false
				} else this.text = "上拉加载更多"
			}
		},
	}
</script>

<style scoped lang="scss">
	.price {
		color: #Ff6c18;
	}

	.o-price {
		text-decoration: line-through;
	}
</style>
