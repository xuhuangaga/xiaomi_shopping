<template>
	<view class="m-t10">
		<cc-sticky :offsetTop="offsetTop" style="z-index: 998;">
			<view class="f-j-a z  bc-w  p-tb10 f-s14">
				<view :class="{'active':active===index}" v-for="(item,index) in arr" :key="index"
					@click="change(index)">
					{{item.name}}
				</view>
			</view>
		</cc-sticky>
		<view v-if="data" class="m-t10">
			<!-- 显示规格参数 -->
			<view class="f-s0" v-show="active" v-html="data.detail">
			</view>
			<!-- 显示产品详情 -->
			<view class="f-s0" v-show="!active" v-html="data.specParams">
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			data: {
				type: Object
			}
		},
		data() {
			return {
				active: 0,
				offsetTop:88,
				arr: [{
					name: '商品介绍'
				}, {
					name: '规格参数'
				}]
			}
		},
		methods: {
			//切换tab
			change(index) {
				this.active = index
			}
		},
		mounted() {
			// #ifdef MP-WEIXIN
			this.offsetTop=120
			// #endif
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
	.active {
		color: #Ff6c18;
	}
</style>
