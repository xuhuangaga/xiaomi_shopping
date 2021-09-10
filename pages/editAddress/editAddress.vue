<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="确认收货地址"></Head>
		<view class="edit-ads-dv p-10">
			<cc-address-edit v-if="addressInfo" :addressInfo="addressInfo" :showPostal="false" @save="edit"
				@delete="del" saveButtonColor="#Ff6c18"></cc-address-edit>
			<cc-address-edit v-else :showPostal="false" :showDelete="false" @save="add" saveButtonColor="#Ff6c18">
			</cc-address-edit>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
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
				addressInfo: null,
				id:''
			}
		},
		methods: {
			//编辑地址
			edit(addressInfo) {
				this.updateAddress({
					id:this.id,
					// 用户id
					user_id: this.user._id,
					// 用户名
					username: addressInfo.name,
					// 用户电话
					mobile: addressInfo.tel,
					// 用户省市区地址
					address: `${addressInfo.province},${addressInfo.city},${addressInfo.county},${addressInfo.addressDetail}`,
					// 用户详细地址
					detailAddress: addressInfo.addressDetail,
					// 是否是默认地址
					isDefault: addressInfo.isDefault,
					areaCode:addressInfo.areaCode
				})
			},
			//新增地址
			add(addressInfo) {
				this.addAddress({
					// 用户id
					user_id: this.user._id,
					// 用户名
					username: addressInfo.name,
					// 用户电话
					mobile: addressInfo.tel,
					// 用户省市区地址
					address: `${addressInfo.province},${addressInfo.city},${addressInfo.county},${addressInfo.addressDetail}`,
					// 用户详细地址
					detailAddress: addressInfo.addressDetail,
					// 是否是默认地址
					isDefault: addressInfo.isDefault,
					areaCode:addressInfo.areaCode
				})
			},
			//删除地址
			del() {
				this.delAddress({
					// 地址id
					addressId: this.id,
					// 用户id
					user_id: this.user._id
				})
			},
			...userActions(['addAddress', 'delAddress', 'updateAddress'])
		},
		mounted() {},
		onLoad(item) {
			if (Object.keys(item).length > 0) {
				uni.setNavigationBarTitle({
					title: '编辑地址'
				})
				item=JSON.parse(item.item)
				let arr=item.address.split(',')
				this.id=item.id
				this.addressInfo = 
				{
					id:item.id,
					name:item.username,
					tel:item.mobile,
					isDefault:item.isDefault,
					addressDetail:item.detailAddress,
					address:item.address,
					areaCode:item.areaCode
				}
				if(arr.length>0) {
					this.addressInfo.province=arr[0]
					this.addressInfo.city=arr[1]
					this.addressInfo.county=arr[2]
				}
			} else
				uni.setNavigationBarTitle({
					title: '新增地址'
				})
		},
		onShow() {

		},
		filters: {},
		computed: {
			user() {
				return uni.getStorageSync('userInfo')
			}
		},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.edit-ads-dv {
		/* #ifdef MP-WEIXIN */
		padding-top: 120rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		padding-top: 100rpx;

		/* #endif */
	}
</style>
