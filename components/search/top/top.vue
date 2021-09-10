<template>
	<view class="xm-search-top" >
		<cc-search :value.sync="value" round @focus="focus" @confirm="confirm">
			<template #action>
				<view @click="confirm">搜索</view>
			</template>
		</cc-search>
	</view>

</template>

<script>
	export default {
		components: {},
		props: {
			keyword: {
				type: String,
				default: ''
			},
			//是否需要触发输入框获取焦点事件
			isFocus: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			//点击确认按钮 点击confirm 
			confirm() {
				this.$emit('search', this.value)
				this.$emit('focus', false)
			},
			//输入框获取焦点时触发
			focus() {
				if (this.isFocus) this.$emit('focus', true)
			}
		},
		mounted() {
			if (this.keyword) this.value = this.keyword
		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {
			value(val) {
				this.$emit('input', this.value)
			}
		},
	}
</script>

<style scoped lang="scss">
.xm-search-top {
	/* #ifndef MP-WEIXIN */
	padding-top: 70rpx;
	/* #endif */
	/* #ifdef MP-WEIXIN */
	padding-top: 120rpx;
	/* #endif */
}
</style>
