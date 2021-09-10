<template>
	<view>
		<Head :isBack="true" bgc="#F3f4f5" title="咨询客服"></Head>
		<view class="kf-content">
			<view class="content p-10 hbfb">
				<view v-for="(item,index) in list" :key="index"  :id="`chatItem-${index}`">
					<!-- 客服消息块 -->
					<view v-if="item.from" class="f-a-c m-b10">
						<view>
							{{item.userName}}
						</view>
						<view class="bc br-10 p-10 bc-w kf m-l5">
							{{item.msg}}
						</view>
					</view>
					<!-- 客户消息块 -->
					<view class="f-j-e m-b10" v-else>
						<view class="bc br-10 p-10 my f-c-w">
							{{item.msg}}
						</view>
						<view class="m-l5">
							{{item.userName}}
						</view>
					</view>
				</view>
			</view>
			<view class="kf-bottom bc-e p-f">
				<view class="f-j-b">
					<view style="border: 1px solid #eee;" class="f-2">
						<cc-field :value.sync="value" :border="false" placeholder="请输入需要咨询的问题"></cc-field>
					</view>
					<view class="m-l10">
						<cc-button type="primary" @click="send">发送</cc-button>
					</view>
					<image @click="show=!show" class="m-l5" src="/static/emoji.png" style="width:50rpx;height:50rpx">
					</image>
				</view>
				<view class="emoji-dv f-j-b m-t10 f-w" v-if="show">
					<view class="emoji-item m-b10 t-a-c" v-for="(item,index) in emoji" @click="change(item)"
						:key="index">
						{{item}}
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Head from '../../components/top/top.vue'
	import emoji from '../../lib/emoji.js'
	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				//输入的内容
				value: '',
				//表情弹框是否显示
				show: false,
				//表情
				emoji: emoji,
				//输入的消息
				list: [],
				user: null
			}
		},
		methods: {
			//点击表情
			change(item) {
				this.value += item
			},
			//发送消息
			send() {
				this.$socket.emit('event', {
					userName: this.user ? this.user.username : '游客',
					msg: this.value,
					//0:自己发的消息  1:别人发的消息
					from: 0
				})
				this.value = ''
			}
		},
		mounted() {
			this.$socket.on('broadcast', (e) => {
				this.list.push(e)
			})
		},
		onLoad() {

		},
		onShow() {
			this.user = uni.getStorageSync('userInfo')
		},
		filters: {},
		computed: {},
		watch: {
			list: {
				handler(val) {
					this.$nextTick(() => {
						let top = 0
						let length = this.list.length
						if (length) {
							for (let i = 0; i < length; i++) {
								let chatItem = uni.createSelectorQuery().in(this).select(`#chatItem-${i}`)
									.boundingClientRect(res => {
										top += res.height
										uni.pageScrollTo({
											scrollTop: top,
											duration: 0
										})
									}).exec()
							}
						}

					})
				},
				deep: true
			}
		},
	}
</script>

<style scoped lang="scss">
	.kf-content {
		/* #ifndef MP-WEIXIN */
		padding-top: 90rpx;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		padding-top: 250rpx;
		/* #endif */
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		.content {
			background: #F3F4E9;
			overflow-y: scroll;
			padding-bottom: 200rpx;
			/* #ifdef MP-WEIXIN */
			margin-top:-121rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			margin-top: -2rpx;
			/* #endif */
		}

		.kf-bottom {
			padding: 40rpx 20rpx;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.kf {
			border: 1px solid #eee;
		}

		.my {
			background-color: #Ff6c18;
		}

		.emoji-item {
			width: 16.5%;
		}

		.emoji-dv {
			height: 600rpx;
			overflow-y: scroll;
		}
	}
</style>
