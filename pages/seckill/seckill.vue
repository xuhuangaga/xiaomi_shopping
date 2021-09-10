<template>
	<view class="seckill bc-e">
		<Head :isBack="true" bgc="#F3f4f5" title="小米秒杀"></Head>
		<view class="f-j-a seckill-dv p-10 bc-w">
			<view :class="{'b-b':current===index}" @click="change(index)" class="p-b10 b" v-for="(item,index) in site"
				:key="index">
				<view class="t-a-c">
					{{item.title}}
				</view>
				<view class="t-a-c m-t5">
					{{item.desc}}
				</view>
			</view>
		</view>
		<view class="p-10" v-if="listNew.length">
			<view v-for="(item,index) in listNew" :key="index" @click="goto(item.goods._id)">
				<view class="f-a-c br-10 bc-w item p-10 m-b10">
					<view class="p-10 img-dv">
						<image :src="item.goods.cover" class="wbfb hbfb "></image>
					</view>
					<view class="m-l10">
						<view class="sl-one name">
							{{item.goods.name}}
						</view>
						<view class="f-j-b">
							<view class="f-a-c m-t10 m-r20">
								<view class="price f-s16 f-w-b">
									￥{{item.price}}
								</view>
								<view class="or-price f-c-9 f-s12 m-l10">
									￥{{item.goods.presentPrice}}
								</view>
							</view>
							<view class="p-10 f-c-w br-10 m-t10 m-l10"
								:class="[{'btn':item.text==='已开始'},{'btn1':item.text!=='已开始'}]">
								<view class="t-a-c">
									{{item.text}}
								</view>
								<view v-if="item.text==='已开始'">
									<cc-progress :percentage="item.percentage"></cc-progress>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="p-20 t-a-c" v-else>
			暂无秒杀商品
		</view>
	</view>

</template>

<script>
	import dayjs from 'dayjs'
	import Head from '../../components/top/top.vue'
	import {
		seckill_site
	} from '../../types/index.js'
	import {
		createNamespacedHelpers
	} from 'vuex'
	let productModule = createNamespacedHelpers('product')
	let {
		mapActions: productActions,
		mapState: productState
	} = productModule

	export default {
		components: {
			Head
		},
		props: {},
		data() {
			return {
				//场次
				site: null,
				timer: null,
				//选中的场次下标
				current: 0,
				//秒杀商品 所有
				list: [],
				//秒杀商品 过滤后
				listNew: [],
				isChange: false
			}
		},
		methods: {
			...productActions(['getSeckill']),
			//（当前时间-开始时间:算分钟）/(120分钟)   =*100 已过的百分比   
			// 1-（当前时间-开始时间:算分钟）/(120分钟) = *100 剩下的百分比
			//获取相应场次的秒杀产品
			getData() {
				let temp = this.site[this.current]
				this.listNew = this.list.filter((item, index) => {
					item.start_time = dayjs(item.start_time).format('YYYY-MM-DD HH:mm:ss')
					item.end_time = dayjs(item.end_time).format('YYYY-MM-DD HH:mm:ss')
					let percentage = (dayjs().valueOf() - dayjs(item.start_time).valueOf()) / (60 * 1000) / 120
					this.$set(item, 'percentage', parseInt(percentage * 100))

					if (temp.desc === '抢购中') this.$set(item, 'text', '已开始')
					else
						this.$set(item, 'text', temp.desc)

					//必须是当天
					//商品开始的小时数-场次开始的小时数 < 场次结束的小时数-场次开始的小时数
					//并且商品结束的小时数-场次开始的小时数 >=0
					return dayjs(item.start_time).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD') 
						&& dayjs(item.start_time).hour() - temp.startHours < (temp.endHours - temp.startHours) 
						&& dayjs(item.end_time).hour() - temp.startHours >= 0
				})
			},
			//切换场次
			change(index) {
				this.current = index
				this.getData()
				this.isChange = true
			},
			//跳转到商品详情
			goto(id) {
				uni.navigateTo({
					url: '/pages/details/details?id=' + id
				})
			}
		},
		mounted() {
			//获取秒杀数据
			this.getSeckill()
			this.site = seckill_site
		},
		onLoad() {

		},
		onShow() {

		},
		destroyed() {
			clearInterval(this.timer)
		},
		filters: {},
		computed: {
			...productState(['seckillList'])
		},
		watch: {
			site(val) {
				this.timer = setInterval(() => {
					//如果是凌晨 让场次回归到原始状态
					if (dayjs().hour() === 0) {
						this.site = seckill_site
					}
					if (!this.isChange) {
						//默认选中当前时间 小时的场次
						let now_h = new Date().getHours()
						this.site.map((item, index) => {
							if (now_h >= item.startHours && now_h < item.endHours)
								this.current = index
						})
					}
					val.map((item, index) => {
						if (dayjs(item.startTime).format('YYYY-MM-DD') === dayjs().format(
								'YYYY-MM-DD')) {
							//开始时间的小时
							let h = dayjs(item.startTime).hour()
							if (dayjs().valueOf() >= dayjs(item.startTime).valueOf() &&
								dayjs(item.endTime).valueOf() > dayjs().valueOf()) {
								item.desc = '抢购中'
							} else if (dayjs(item.endTime).valueOf() < dayjs().valueOf()) {
								item.desc = "已结束"
								this.isChange = false
								if (item.endHours < 24) {
									this.site.splice(index, 1)
									let obj = this.site[this.site.length - 1]
									let now = dayjs()
									let date = now.format('YYYY-MM-DD')
									this.site.push({
										title: `${obj.endHours}:00`,
										startTime: date + ` ${obj.endHours}:00:00`,
										endTime: date + ` ${obj.endHours+2}:00:00`,
										desc: '',
										startHours: obj.endHours,
										endHours: obj.endHours + 2,
									})
								}
							} else item.desc = "暂未开始"
						} else item.desc = '暂未开始'
					})
					this.getData()
				}, 1000)
			},
			seckillList(val) {
				if (val) {
					this.list = val
					this.getData()
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.seckill {
		.seckill-dv {
			/* #ifdef MP-WEIXIN */
			padding-top: 160rpx;
			/* #endif */
			/* #ifndef MP-WEIXIN */
			padding-top: 120rpx;

			/* #endif */
			.b-b {
				border-bottom: 4rpx solid #Ff6c18 !important;
			}

			.b {
				border-bottom: 4rpx solid transparent;
			}
		}

		.item {
			.img-dv {
				width: 120rpx;
				height: 120rpx;
			}

			.price {
				color: #Ff6c18;
			}

			.or-price {
				text-decoration: line-through;
			}

			.name {
				width: 400rpx;
			}

			.btn {
				background: #Ff6c18;
				width: 200rpx;
			}

			.btn1 {
				background: #ccc;
				width: 200rpx;
			}

			border: 1px solid #eee;
		}
	}
</style>
