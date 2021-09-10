<template>
	<view class="bc-e">
		<Head :isBack="true" bgc="#F3f4f5" title="地址列表"></Head>
		<view class="ads-dv p-10">
			<cc-address-list @select="select" addButtonColor="#Ff6c18" tagColor="#Ff6c18" :value="chosenAddressId" :list="list" default-tag-text="默认" 
			@add="add" @edit="edit" v-if="list.length"></cc-address-list>
			<view v-if="!list.length">
				<cc-address-list addButtonColor="#Ff6c18" tagColor="#Ff6c18" :value="chosenAddressId" :list="list" default-tag-text="默认" @add="add" @edit="edit" ></cc-address-list>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import cloneDeep from 'lodash/cloneDeep'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let userModule = createNamespacedHelpers('users')
	let {
		mapActions: userActions,
		mapState: userState
	} = userModule
	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				//默认选中的地址id
				chosenAddressId: '',
				//地址列表
				list: []
			}
		},
		methods: {
			//切换地址时触发
			select(item) {
				if(uni.getStorageSync('isOrders')) {
					uni.setStorageSync('defaultAddress',item.item)
					uni.navigateTo({
						url:'/pages/orders/orders'
					})
				}
			},
			//点击新增地址
			add() {
				uni.navigateTo({
					url: '/pages/editAddress/editAddress'
				})
			},
			//点击编辑地址
			edit(item) {
				uni.navigateTo({
					url: `/pages/editAddress/editAddress?item=${JSON.stringify(item.item)}`
				})
			},
			...userActions(['getAddress'])
		},
		created(){
			this.getAddress(this.user._id)
		},
		mounted() {
		},
		onLoad() {
		},
		onShow() {
		},
		filters: {},
		computed: {
			user() {
				return uni.getStorageSync('userInfo')
			},
			...userState(['addressList'])
		},
		watch: {
			addressList(val) {
				if (val && val.length) {
					val.map(item => {
						if (item.isDefault) 
							this.chosenAddressId = item.id
						this.$set(item, 'id', item.id)
						this.$set(item, 'name', item.username)
						this.$set(item, 'tel', item.mobile)
						this.$set(item, 'isDefault', item.isDefault)
						this.$set(item, 'addressDetail', item.detailAddress)
						this.$set(item, 'address', item.address)
					})
					this.list = cloneDeep(val)
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.ads-dv {
		/* #ifdef MP-WEIXIN */
		padding-top: 120rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 100rpx;

		/* #endif */
	}
</style>
