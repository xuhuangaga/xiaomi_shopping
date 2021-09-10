<template>
	<view>
		<Search></Search>
		<view class="c-dv f">
			<Left @change="change" :category="category" :oneActive="oneActive"></Left>
			<Right :list="list" @active="active" :twoActive="twoActive"></Right>
		</view>
	</view>
</template>

<script>
	import Left from '../../components/category/left/left.vue'
	import Search from '../../components/category/search/search.vue'
	import Right from '../../components/category/right/right.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let categoryModule = createNamespacedHelpers('category')
	let {
		mapActions: categoryActions,
		mapState: categoryState
	} = categoryModule
	export default {
		components: {
			Left,
			Right,
			Search
		},
		props: {},
		data() {
			return {
				//一级分类选中的下标
				oneActive: 0,
				//二级分类选中的下标
				twoActive: 0,
				//二级分类数据
				list: []
			}
		},
		methods: {
			//切换一级分类
			change(item) {
				// item.id
				this.oneActive = item.index
				this.twoActive=0
				this.list=this.category[item.index].list
			},
			//切换二级分类
			active(item) {
				// item.id
				this.twoActive = item.index
			},
			//获取分类数据
			getData() {

			},
			...categoryActions(['getCategory'])
		},
		mounted() {
			this.getData()
			this.getCategory()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...categoryState(['category'])
		},
		watch: {},
		watch: {
			category(val) {
				if (val) {
					this.list = val[0].list
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.c-dv {
		padding: 110rpx 20rpx 20rpx 0rpx;
	}
</style>
