<template>
	<view class="bc-e">
		<cc-notice-bar volume closeable @clickRight="clickRight" class="z p-f wbfb notice" v-if="show">
		{{notices.join(' ')}}
		</cc-notice-bar>
		<!-- #ifdef MP-WEIXIN -->
		<topWX :isHide="isHide"></topWX>
		<BannerWX :banner="banner"></BannerWX>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<Top></Top>
		<!-- #endif -->
		<Banner :banner="banner"></Banner>
		<view class="p-l-r10 i-nav-dv">
			<Nav :nav="nav"></Nav>
		</view>
		<News :news="news"></News>
		<Tabs :recommendNav="recommendNav" @change="change"></Tabs>
		<Goods :navGoods="navGoods" @del="del"></Goods>
	</view>
</template>

<script>
	import Top from '../../components/index/top/top.vue'
	import TopWX from '../../components/index/topWX/topWX.vue'
	import Banner from '../../components/index/banner/banner.vue'
	import Nav from '../../components/index/nav/nav.vue'
	import News from '../../components/index/new/new.vue'
	import Tabs from '../../components/index/tabs/tabs.vue'
	import Goods from '../../components/index/goods/goods.vue'
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
			Top,
			TopWX,
			Banner,
			Nav,
			News,
			Tabs,
			Goods
		},
		data() {
			return {
				//顶部是否隐藏logo
				isHide: false,
				show: true,
				//通知内容
				notices:[]
			}
		},
		onLoad() {
			this.getBanner()
			this.getNav()
			this.getNews()
			this.getRecommendNav()
			this.getNotice()
		},
		// 路由组件监听滚动
		onPageScroll(e) {
			// #ifdef MP-WEIXIN
			this.isHide = e.scrollTop >= 15
			// #endif
		},
		methods: {
			clickRight() {
				this.show = false
			},
			//删除选中的产品
			del(index) {
				this.navGoods.splice(index, 1)
			},
			//切换tab
			change(id) {
				this.getNavGoods(id)
			},
			...homeActions(['getBanner', 'getNav', 'getNews', 'getRecommendNav', 'getNavGoods', 'getNotice'])
		},
		computed: {
			...homeState(['news', 'banner', 'nav', 'recommendNav', 'navGoods', 'notice'])
		},
		watch: {
			recommendNav(val) {
				if (val && val.length) {
					this.getNavGoods(val[0]._id)
				}
			},
			notice(val) {
				if(val) {
					val.map(item=>{
						this.notices.push(item.content)
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.i-nav-dv {
		/* #ifndef MP-WEIXIN */
		margin-top: 10px;
		/* #endif */
	}
	.notice {
		top: 70px;
		/* #ifndef MP-WEIXIN */
		width: 93% !important;
		/* #endif */
	}
</style>
