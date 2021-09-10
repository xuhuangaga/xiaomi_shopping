<template>
	<view class="bc-e">
		<!-- #ifdef MP-WEIXIN -->
		<Top :isShow="isShow" :active="active" @change="change"></Top>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<Head :isBack="true" bgc="#F3f4f5" title="商品详情"></Head>
		<!-- #endif -->
		<view class="d-info-dv">
			<view class="tab1">
				<Banner :data="data"></Banner>
			</view>
			<Info v-if="data" :data="data"></Info>
			<Spec :spec="spec" :value="value" v-if="data" :data="data" @setValue="setValue" @setSpec="setSpec"
				@addCarts="addCarts"></Spec>
			<view class="tab2">
				<Comment v-if="data" :data="data"></Comment>
			</view>
			<view class="tab4">
				<Recommend></Recommend>
			</view>
			<view class="tab3">
				<Introduce v-if="data" :data="data"></Introduce>
			</view>
			<Bottom v-if="data" :data="data" @addCarts="addCarts"></Bottom>
		</view>
	</view>

</template>

<script>
	import Top from '../../components/details/dtop/dtop.vue'
	import Banner from '../../components/details/dbanner/dbanner.vue'
	import Info from '../../components/details/dinfo/dinfo.vue'
	import Spec from '../../components/details/dspec/dspec.vue'
	import Recommend from '../../components/details/drecommend/drecommend.vue'
	import Head from '../../components/top/top.vue'
	import Introduce from '../../components/details/dintroduce/dintroduce.vue'
	import Comment from '../../components/details/dcomment/dcomment.vue'
	import Bottom from '../../components/details/dbottom/dbottom.vue'
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
			Banner,
			Head,
			Info,
			Spec,
			Recommend,
			Introduce,
			Comment,
			Bottom
		},
		props: {},
		data() {
			return {
				//是否显示顶部的tab
				isShow: false,
				//tab选中的下标
				active: 0,
				pageTop: 0,
				//选中的规格
				spec: [],
				//购买的数量
				value: 1,
				data: null,
				user: null
			}
		},
		methods: {
			//修改购买数量
			setValue(val) {
				this.value = val
			},
			//修改选中的规格
			setSpec(val) {
				this.spec = val
			},
			//加入购物车
			addCarts() {
				this.addCart({
					count: this.value,
					goods: this.data,
					spec: this.spec,
					user_id: this.user._id
				})
				setTimeout(()=>{
					this.getCart(this.user._id)
				},1000)
			},
			//切换顶部的tab
			change(index) {
				this.active = index
				uni.createSelectorQuery().in(this).select(".tab" + (index + 1)).boundingClientRect(data => {
					uni.pageScrollTo({
						scrollTop: data.top + this.pageTop - 65,
						duration: 100
					})
				}).exec();
			},
			...productActions(['getGoods', 'addCart', 'getCart'])
		},
		mounted() {},
		created() {
			if (this.user)
				this.getCart(this.user._id)
		},
		onLoad(item) {
			this.getGoods(item.id)
		},
		onShow() {
			this.spec = []
			this.user = uni.getStorageSync('userInfo')
		},
		onPageScroll(e) {
			this.isShow = e.scrollTop >= 15
			this.pageTop = e.scrollTop
		},
		filters: {},
		computed: {
			...productState(['goods', 'carList'])
		},
		watch: {
			carList(val) {
				if (val) {
					this.$store.commit('setCarNum', val.length)
				}
			},
			goods(val) {
				if (val) this.data = val
			}
		},
	}
</script>

<style scoped lang="scss">
	.d-info-dv {
		/* #ifdef MP-WEIXIN */
		padding-top: 135rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 90rpx;
		/* #endif */
	}
</style>
