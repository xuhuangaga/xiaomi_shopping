import api from "../../http/api.js"
import Vue from 'vue'
import dayjs from 'dayjs'

export default {
	// 命名空间
	namespaced: true,
	state: {
		//优惠券数据
		couponList:[],
		//订单数据
		orderList:[]
	},
	mutations: {
		setCouponList(state,data) {
			state.couponList=data
		},
		setOrderList(state,data) {
			state.orderList=data
		}
	},
	// 发异步请求的
	actions: {
		// async await
		// 异步操作同步化: 用一个变量接收请求的结果
		// 每个action的方法有且仅有两个参数 第一个参数是store对象 第二个参数是请求的参数
		//提交订单
		async addOrders({
			commit
		}, item) {
			try {
				let res = await api.addOrder(item)
				if(res.code === 200) {
					uni.showToast({
						title: `成功结算${item.price}元`,
						icon: 'none'
					})
					setTimeout(()=>{
						//删除本地的用于结算的信息 
						//删除本地存储的默认地址
						uni.setStorageSync('toBePay',null)
						uni.setStorageSync('defaultAddress',null)
						uni.switchTab({
							url:'/pages/index/index'
						})
					},1000)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取优惠券
		async getCoupons({
			commit
		},item) {
			try {
				let res = await api.getCoupon()
				if (res.code === 200) {
					res.data.map(item=>{
						Vue.set(item,'condition',`使用门槛${item.threshold}元`)
						Vue.set(item,'id',item._id)
						Vue.set(item,'reason','')
						Vue.set(item,'unitDesc','元') 
						Vue.set(item,'available',1)
						Vue.set(item,'valueDesc',item.amount+'')
						Vue.set(item,'value',Number(item.amount)*100)
						Vue.set(item,'startAt',dayjs(item.start_time).valueOf())
						Vue.set(item,'endAt',dayjs(item.end_time).valueOf())
						Vue.set(item,'description',`满${item.threshold}元可用`)
					})
					commit('setCouponList',res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取订单
		async getOrders({
			commit
		},item) {
			try {
				let res = await api.getAppOrder(item)
				if (res.code === 200) {
					commit('setOrderList', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//删除订单
		async delOrders({
			commit,
			dispatch
		},item) {
			try {
				let res = await api.delOrder(item)
				if (res.code === 200) {
					uni.showToast({
						title:'删除成功',
						icon:'none'
					})
					dispatch('getOrders',item.user_id)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//添加评论
		async addComment({commit},item) {
			try {
				let res = await api.createComment(item)
				if(res.code===200) {
					uni.showToast({
						title:'提交成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/userorders/userorders'
						})
					},1000)
				}
			} catch (err) {
				console.log(err)
			}
		}
	}
}
