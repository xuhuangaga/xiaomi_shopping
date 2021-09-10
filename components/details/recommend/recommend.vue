<template>
  <view class="f-j-b f-w">
    <view v-for="(item,index) in list" class="m-b10 recommend" :key="index" @click="goto(item._id)">
    	<view class="bc-e br-10 p-10 i-dv">
    		<image :src="item.cover" class="wbfb hbfb"></image>
    	</view>
    	<view class="sl-one lh25 name f-s12">
    		{{item.name}}
    	</view>
    	<view class="f-j-b">
    		<view class="price f-s14">
    			￥{{item.presentPrice}}
    		</view>
    		<view class="f-c-9 f-s12 or-price">
    			￥{{item.originalPrice}}
    		</view>
    	</view>
    </view>
  </view>

</template>

<script>
  export default {
    components: {},
    props: {
		list:{
			type:Array
		}
	},
    data() {
      return {}
    },
    methods: {
		//跳转到详情
		goto(id) {
			uni.navigateTo({
				url:`/pages/details/details?id=${id}`
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

.recommend {
	.name {
		width: 200rpx;
	}
	.i-dv {
		width: 190rpx;
		height: 190rpx;
		
	}
	.price {
		color: #Ff6c18;
	}
	.or-price {
		text-decoration: line-through;
	}
}
</style>
