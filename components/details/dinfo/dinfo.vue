<template>
	<view v-if="data" class="info-dv bc-w">
		<view class="p-10">
			<view class="p-dv f price">
				<view class="">
					￥
				</view>
				<view class=" f-s20">
					{{data.presentPrice}}
				</view>
			</view>
			<view class="m-t-b10">
				{{data.name}}
			</view>
			<view class="lh25 f-a-c" v-for="(item,index) in data.sellDesc[0].split('\n')" :key="index">
				<view v-if="item" class="f-s14 f-a-c">
					<view class="yd f-j-c">
						<view>
							{{index+1}}
						</view>
					</view>
					<view class="m-l10 sl-one params">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view class="b-b k-dv">
		</view>
		<view class="p-10">
			<scroll-view scroll-x class="w-s-n">
				<view class="item" v-for="(item,index) in data.params" :key="index">
					<view class="f-s12">
						<view class="t-a-c">
							<image :src="item.url"></image>
						</view>
						<view class="sl-one name t-a-c n-t">
							{{item.name}}
						</view>
						<view class="sl-one name t-a-c">
							{{item.desc}}
						</view>
					</view>
				</view>
			</scroll-view>
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
			return {}
		},
		methods: {},
		mounted() {},
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
	.info-dv {
		.price {
			color: #Ff6c18;
		}

		.yd {
			border: 1px solid black;
			width: 30rpx;
			height: 30rpx;
		}

		.k-dv {
			height: 2rpx;
		}
		.item {
			display: inline-block;
			image {
				width: 60rpx;
				height: 60rpx;
			}
			.name {
				width: 200rpx;
			}
			.n-t {
				margin:6rpx 0rpx
			}
		}
		.params {
			width: 650rpx;
		}
	}
</style>
