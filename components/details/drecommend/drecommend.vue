<template>
	<view class="bc-w p-10 m-t10">
		<cc-tabs @change="change" :current="current" :list="tab" lineColor="#Ff6c18" activeColor="#Ff6c18" :circular="true">
			<view class="hbfb m-t10" v-if="list">
				<swiper :autoplay="true" style="height: 660rpx;" :indicator-dots="true">
					<swiper-item>
						<Recommend :list="list.slice(0,6)"></Recommend>
					</swiper-item>
					<swiper-item>
						<Recommend :list="list.slice(6,12)"></Recommend>
					</swiper-item>
					<swiper-item>
						<Recommend :list="list.slice(12,18)"></Recommend>
					</swiper-item>
				</swiper>
			</view>
		</cc-tabs>
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
				current: 0,
				tab: [{
						title: '为你推荐'
					},
					{
						title: '爆款推荐'
					}
				],
				//为你推荐数据列表
				listO: [],
				//爆款推荐数据列表
				listOT: [],
				list:[]
			}
		},
		methods: {
			//切换tab
			change(e) {
				this.current = e
				this.list = this.current ? this.listO : this.listT
			},
			...productActions(['getRecommendPopular', 'getRecommendForYou'])
		},
		mounted() {
			this.getRecommendPopular()
			this.getRecommendForYou()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...productState(['recommendForYou', 'recommendPopular'])
		},
		watch: {
			recommendForYou(val) {
				if(val) {
					this.list=this.listO=val
				}
			},
			recommendPopular(val) {
				if(val) this.listT=val
			}
		},
	}
</script>

<style scoped lang="scss">
</style>
