<template>
	<cc-sticky :offsetTop="-2" z-index="1000">
		<view class="p-10 f-j-b i-top">
			<image src="/static/logo.png"></image>
			<view class="f-3 m-l5 t-header-cc-search">
				<cc-search :value.sync="value" placeholder='请输入商品名称' @focus="goto('/pages/search/search')">
					<template #action>
						<image src="/static/icon-user.png" class="m-l10" @click="goto('/pages/my/my')"></image>
					</template>
				</cc-search>
			</view>
		</view>
	</cc-sticky>
</template>

<script>
	export default {
		components: {},
		props: {},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			//跳转页面
			goto(url) {
				url.includes('my') ?
					uni.switchTab({
						url: url
					}) :
					uni.navigateTo({
						url: url
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
	.i-top {
		background-color: #F3f4f5;
		image {
			width: 25px;
			height: 25px;
		}
	}
</style>
