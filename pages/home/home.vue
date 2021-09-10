<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="小米之家"></Head>
		<view class="">
			<view class="search-dv p-f z bc-w wbfb">
				<cc-search @confirm="confirm" :value.sync="value" :show-action="false" placeholder="请输入城市名称或拼音查询">
				</cc-search>
			</view>
			<view class="search-con" v-if="!show">
				<view v-if="searchAreaList.length">
					<view class="p-10" v-for="(item,index) in searchAreaList" :key="index" @click="goto(item)">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="p-10 search-con" v-else>
				<cc-index-bar v-if="areaList.length" :indexList="indexList">
					<view v-for="(item, index) in areaList" :key="index">
						<cc-index-anchor :index="item.py_head"></cc-index-anchor>
						<view class="list-item p-10" :key="index1" v-for="(item1,index1) in item.name_list" @click="goto(item1)">{{item1.name}}</view>
					</view>
				</cc-index-bar>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let homeModule = createNamespacedHelpers('home')
	let {
		mapActions: homeActions,
		mapState: homeState
	} = homeModule
	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				show: true,
				//搜索内容
				value: '',
				indexList: []
			}
		},
		methods: {
			...homeActions(['getAllAreaList', 'getSearchAreaList']),
			confirm() {
				this.getSearchAreaList(this.value)
			},
			//跳转到小米之家地图
			goto(item) {
				uni.navigateTo({
					url:`/pages/xmmap/xmmap?name=${item.name}&id=${item.id}`
				})
			}
		},
		mounted() {
			this.getAllAreaList()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...homeState(['areaList', 'searchAreaList'])
		},
		watch: {
			value(val) {
				if (val) {
					this.show = false
					this.getSearchAreaList(val)
				} else this.show = true
			},
			areaList(val) {
				if (val) {
					val.map(item => {
						this.indexList.push(item.py_head)
					})
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.search-dv {
		/* #ifdef MP-WEIXIN */
		top: 129rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		top: 88rpx;
		/* #endif */
	}

	.search-con {
		/* #ifndef MP-WEIXIN */
		padding-top: 200rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 250rpx;
		/* #endif */
	}
</style>
