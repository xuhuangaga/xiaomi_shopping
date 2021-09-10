<template>
	<view class="m-l10 m-r20 p-f left">
		<scroll-view scroll-y class="h-vh w-s-n p-r10">
			<view class="f-c-6">
				<view class="p-tb20 f-a-c" @click="change(index,item._id)" v-for="(item,index) in category"
					:key="index">
					<view :class="{'o-active':oneActive===index}" class="b-l">
					</view>
					<view class="m-l10">
						{{item.name}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: {
			category:{
				type:Array
			},
			oneActive:{
				type:Number
			}
		},
		data() {
			return {}
		},
		methods: {
			//切换一级分类
			change(index, id) {
				this.$emit('change', {
					index,
					id
				})
			},
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
	.left {
		width: 200rpx;
	}
	.b-l {
		width: 4rpx;
		height: 40rpx;
		border-left: 6rpx solid #fff;
	}

	.o-active {
		border-left: 6rpx solid #Ff6c18;
	}
</style>
