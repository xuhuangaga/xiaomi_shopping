<template>
	<view class="tab1">
		<cc-swiper :list="list" height="700" mode="number">
		</cc-swiper>
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
				list: []
			}
		},
		methods: {},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {},
		watch: {
			data(val) {
				val.pic.map(item => {
					this.list.push({
						image: item
					})
				})
			}
		},
	}
</script>

<style scoped lang="scss">
</style>
