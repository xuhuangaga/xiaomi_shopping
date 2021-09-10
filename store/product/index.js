import api from "../../http/api.js"
import Vue from 'vue'
// import cloneDeep from 'lodash/cloneDeep'


export default {
	// 命名空间
	namespaced: true,
	state: {
		//搜索热词
		hot: [],
		//获取所有的搜索数据
		searchListAll: [],
		//分页获取搜索数据
		searchList: [],
		//搜索数据的总条数
		searchTotal: 0,
		//商品信息 【商品详情】
		goods:null,
		//为你推荐数据 【商品详情】
		recommendForYou:[],
		//爆款推荐数据 【商品详情】
		recommendPopular:[],
		//购物车信息
		carList:[],
		//删除购物车是否成功
		isDelete:false,
		//秒杀数据
		seckillList:[]
		
	},
	mutations: {
		setHot(state, data) {
			state.hot = data
		},
		setSearchAll(state, data) {
			state.searchListAll = data
		},
		setSearch(state, data) {
			state.searchList = data
		},
		setTotal(state, data) {
			state.searchTotal = data
		},
		setGoods(state, data) {
			state.goods = data
		},
		setRecommendForYou(state, data) {
			state.recommendForYou = data
		},
		setRecommendPopular(state, data) {
			state.recommendPopular = data
		},
		setCarList(state, data) {
			state.carList = data
		},
		setIsDelete(state,data) {
			state.isDelete=data
		},
		setSeckillList(state,data) {
			state.seckillList=data
		}
	},
	// 发异步请求的
	actions: {
		// async await
		// 异步操作同步化: 用一个变量接收请求的结果
		// 每个action的方法有且仅有两个参数 第一个参数是store对象 第二个参数是请求的参数
		//获取搜索热词
		async getHot({
			commit
		}) {
			try {
				let res = await api.getSearchWords()
				if (res.code === 200) {
					commit('setHot', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取所有搜索数据
		async getSearchAll({
			commit
		}, {
			query
		}) {
			try {
				let res = await api.search({
					current:1,
					pageSize:10000,
					query
				})
				if (res.code === 200) {
					commit('setSearchAll', res.data)
				}
			} catch (err) {
				wechatLogin(err)
			}
		},
		//分页获取搜索数据
		async getSearch({
			commit
		}, {
			current,
			pageSize,
			query
		}) {
			try {
				let res = await api.search({
					current,
					pageSize,
					query
				})
				if (res.code === 200) {
					commit('setSearch', res.data)
					commit('setTotal', res.total)
				}
			} catch (err) {
				wechatLogin(err)
			}
		},
		//获取商品详情
		async getGoods({
			commit
		},id) {
			try {
				let res = await api.goodsDetail(id)
				if (res.code === 200) {
					commit('setGoods', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取为你推荐
		async getRecommendForYou({
			commit
		}) {
			try {
				let res = await api.getRecommend()
				if (res.code === 200) {
					commit('setRecommendForYou', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取爆款推荐
		async getRecommendPopular({
			commit
		}) {
			try {
				let res = await api.getHot()
				if (res.code === 200) {
					commit('setRecommendPopular', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//加入购物车
		async addCart({
			commit
		},item) {
			try {
				let res = await api.addCart(item)
				if (res.code === 200) {
					uni.showToast({
						title:'成功加入购物车'
					})
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取购物车
		async getCart({
			commit
		},item) {
			try {
				let res = await api.getCart(item)
				if (res.code === 200) {
					res.data.map(item=>{
						Vue.set(item,'isChecked',false)
						Vue.set(item,'isDelete',false)
					})
					// commit('setCarList', cloneDeep(res.data))
					commit('setCarList', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//修改购物车
		async updateCart({
			commit
		},item) {
			try {
				let res = await api.updateCart(item)
			} catch (err) {
				console.log(err)
			}
		},
		//删除购物车
		async delCart({
			commit
		},item) {
			try {
				let res = await api.delCart(item)
				commit('setIsDelete',res.code===200)
			} catch (err) {
				console.log(err)
			}
		},
		//获取秒杀数据
		//获取爆款推荐
		async getSeckill({
			commit
		}) {
			try {
				let res = await api.getSeckill()
				if (res.code === 200) {
					commit('setSeckillList', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
	}
}
