<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5"></Head>
		<Top @search="search" @input="input"></Top>
		<view v-show="!value">
			<History :list="historyList" @clear="clear" @change="change" class="m-t10"></History>
			<Hot :hot="hot"></Hot>
		</view>
		<view v-show="value">
			<List @search="search" v-if="searchListAll" :searchListAll="searchListAll"></List>
		</view>
	</view>

</template>

<script>
	import Top from '../../components/search/top/top.vue'
	import Head from '../../components/top/top.vue'
	import History from '../../components/search/history/history.vue'
	import Hot from '../../components/search/hot/hot.vue'
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
			History,
			Hot,
			List,
			Head
		},
		props: {},
		data() {
			return {
				//历史记录
				historyList: [],
				//输入框的值
				value: ''
			}
		},
		methods: {
			//输入框输入时触发
			input(val) {
				this.value = val
				this.getSearchAll({
					query: val
				})
			},
			//获取历史记录
			getHistory() {
				let data = this.$utils.getHistory('search')
				if (data) this.historyList = data
			},
			//清空历史记录
			clear() {
				this.$utils.removeHistory('search')
				this.historyList = []
			},
			//点击搜索 子组件top分发事件
			search(val) {
				if (val) {
					//添加本地历史记录
					this.$utils.saveHistory({
						key: 'search',
						data: val
					})
					this.getHistory()
					uni.navigateTo({
						url:`/pages/productlist/productlist?keyword=${val}`
					})
				}
			},
			//点击历史记录 子组件分发事件
			change(item) {
				this.keyword = item
				uni.navigateTo({
					url:`/pages/productlist/productlist?keyword=${item}`
				})
			},
			...productActions(['getHot','getSearchAll'])
		},
		mounted() {
			//获取历史记录
			this.getHistory()
			this.getHot()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...productState(['hot','searchListAll'])
		},
		watch: {},
	}
</script>

<style scoped lang="scss">

</style>
