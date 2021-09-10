<template>
	<view class="comment-dv">
		<Head :isBack="true" bgc="#F3f4f5" title="评论商品"></Head>
		<view class="p-10 goods" v-if="goods">
			<view class="f-a-c">
				<view class="">
					<image :src="goods.cover" style="width: 200rpx;height: 200rpx;"></image>
				</view>
				<view class="m-l10">
					<view class="">
						{{goods.name}}
					</view>
					<view class="price m-t10">
						￥{{goods.presentPrice}}
					</view>
				</view>
			</view>
			<view class="f-a-c m-t10">
				<view class="">
					评分:
				</view>
				<view class="m-l10">
					<cc-rate @change="change" :value.sync="value"></cc-rate>
				</view>
			</view>
			<view class="m-t10">
				内容:
			</view>
			<view class="">
				<cc-field :maxlength="200" show-word-limit :value.sync="content" type="textarea" rows="5"></cc-field>
			</view>
			<view class="m-t20">
				<cc-upload @delete="delPic" :action="action" :header="header" @uplpadSuccess="uplpadSuccess"></cc-upload>
			</view>
			<view class="">
				是否匿名
			</view>
			<view class="m-t10">
				<cc-switch :value.sync="checked" @change='onChange'></cc-switch>
			</view>
			<view class="m-t10">
				<cc-button type="primary" block @click="submit">提交评价</cc-button>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let ordersModule = createNamespacedHelpers('orders')
	let {
		mapActions: ordersActions,
		mapState: ordersState
	} = ordersModule

	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				//商品信息
				goods: null,
				//评分
				value: 5,
				//评论内容
				content: '',
				action: 'http://localhost:7001/app/upload',
				//是否匿名
				checked: false,
				pic: [],
				header: {
					Authorization: uni.getStorageSync('token')
				},
				user:null,
				//订单id
				orderId:'',
				//商品id
				proId:''
			}
		},
		methods: {
			...ordersActions(['addComment']),
			//删除预览图触发
			delPic(item, index) {
				this.pic.splice(index,1)
			},
			// 评分变化时
			change(val) {
				this.value = val
			},
			//图片上传成功调用
			uplpadSuccess(data) {
				this.pic.push(data.data.data)
			},
			//切换开关时触发
			onChange(val) {
				this.checked = val
			},
			//提交评价
			submit() {
				this.addComment({
					// 用户id
					user_id:this.user._id,
					// 商品id
					goods_id:this.proId,
					// 订单id
					order_id:this.orderId,
					// 评分
					rate:this.value,
					// 评价内容
					content:this.content,
					// 评论图片
					pic:this.pic,
					// 是否匿名
					isAnonymous:this.checked,
					// 评论时间
					comment_time:new Date()
				})
			}
		},
		mounted() {
			this.goods = uni.getStorageSync('proInfo')
		},
		onLoad(item) {
			this.orderId=item.orderId
			this.proId=item.proId
		},
		onShow() {
			this.user=uni.getStorageSync('userInfo')
		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.comment-dv {
		.price {
			color: #Ff6c18;
		}

		.goods {
			/* #ifndef MP-WEIXIN */
			padding-top: 100rpx;
			/* #endif */
			/* #ifdef MP-WEIXIN */
			padding-top: 150rpx;
			/* #endif */
		}
	}
</style>
