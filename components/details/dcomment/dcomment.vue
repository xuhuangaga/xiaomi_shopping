<template>
	<view class="p-10 m-t10 bc-w tab2">
		<view v-if="data.comment && data.comment.length">
			<view class="">
				全部评价
			</view>
			<scroll-view scroll-x class="w-s-n m-t10">
				<view class="c-item br-10 p-10 " v-for="(item,index) in data.comment" :key="index">
					<view class="f-a-c">
						<image src="/static/user/touxiang.png"></image>
						<view class="m-l10">
							<view class="">
								{{item.user.username}}
							</view>
							<view class="f-c-9 m-t10">
								{{item.comment_time}}
							</view>
						</view>
					</view>
					<view class="f-c-9 lh25">
						{{item.content}}
					</view>
					<view class="f-a-c m-t10">
						<image :src="item1" class="img m-r5" v-for="(item1,index1) in item.pic" :key="index1"></image>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="" v-else>
			暂无评论
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	export default {
		components: {},
		props: {
			data: {
				type: Object
			}
		},
		data() {
			return {}
		},
		methods: {
			getData() {
				if (this.data.comment.length) {
					this.data.comment.map(item => {
						item.comment_time = dayjs(item.comment_time).format('YYYY-MM-DD HH:mm:ss')
						console.log(item.comment_time);
					})
				}
			}
		},
		mounted() {
			this.getData()
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {},
	}
</script>

<style scoped lang="scss">
	.c-item {
		border: 1px solid #eee;
		display: inline-block;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 100%;
		}

		.img {
			width: 100rpx;
			height: 100rpx;
			border-radius: 0 !important;
		}
	}
</style>
