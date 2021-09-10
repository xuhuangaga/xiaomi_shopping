<template>
	<view v-if="list.length" class="history p-10">
		<view class="f-j-b">
			<view class="">
				搜索历史
			</view>
			<view @click="clear">
				<image src="/static/clear.png" style="width:40rpx;height:40rpx"></image>
			</view>
		</view>
		<view class="f-a-c f-w m-t-b10">
			<view @click="change(item)" v-for="(item,index) in list" :key="index" class="item m-r10 m-b10">
				{{item}}
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			list: {
				type: Array
			},
			value:{
				type:String
			}
		},
		data() {
			return {}
		},
		methods: {
			//清空历史记录
			clear(){
				this.$emit('clear')
			},
			//点击历史记录
			change(item){
				this.$emit('change',item)
				uni.navigateTo({
					url:`/pages/productlist/productlist?keyword=${item}`
				})
			}
		},
		mounted() {
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
.history {
	.item {
		padding: 10rpx 20rpx;
		border: 2rpx solid #F3f4f5;
		border-radius: 30rpx;
		background-color: #F3f4f5;
	}
}
</style>
