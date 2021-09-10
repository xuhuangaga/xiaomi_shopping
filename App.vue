<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/styles/uni.scss";
	@import "/styles/common.scss";
	uni-page-body {
		height: 100%;
	}
	svg {
		width: 50rpx;
		height: 50rpx;
	}
	// 去除高德地图logo
	.amap-logo,
	.amap-copyright { display:none !important; }  
</style>
