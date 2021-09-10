import api from "../../http/api.js"
export default {
	// 命名空间
	namespaced: true,
	state: {
		//轮播图数据
		banner: [],
		//导航数据
		nav: [],
		//人气上新数据
		news: [],
		//推荐导航数据
		recommendNav:[],
		//推荐导航商品数据
		navGoods:[],
		//通知
		notice:[],
		//城市列表
		areaList:[],
		//搜索的城市列表
		searchAreaList:[],
		//小米之家数据
		storeList:[],
		//店铺详情
		storeDetail:{}
	},
	mutations: {
		setStoreDetail(state, data) {
			state.storeDetail = data
		},
		setStoreList(state, data) {
			state.storeList = data
		},
		setAreaList(state, data) {
			state.areaList = data
		},
		setSearchAreaList(state, data) {
			state.searchAreaList = data.data.area_list
		},
		setBanner(state, data) {
			state.banner = data
		},
		setNav(state, data) {
			state.nav = data
		},
		setNews(state, data) {
			state.news = data
		},
		setRecommendNav(state, data) {
			state.recommendNav = data
		},
		setNavGoods(state, data) {
			state.navGoods = data
		},
		setNotice(state,data) {
			state.notice=data
		}
	},
	// 发异步请求的
	actions: {
		// async await
		// 异步操作同步化: 用一个变量接收请求的结果
		// 每个action的方法有且仅有两个参数 第一个参数是store对象 第二个参数是请求的参数
		//获取轮播图
		async getBanner({
			commit
		}) {
			try {
				let res = await api.getBanner()
				if (res.code === 200) {
					res.data=res.data.filter(item => {
						return item.isShow
					})
					res.data.map(item => {
						item.image = item.url
					})
					commit('setBanner', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取人气上新产品
		async getNews({
			commit
		}) {
			try {
				let res = await api.getNew()
				if (res.code === 200) {
					res.data=res.data.slice(0,3)
					commit('setNews', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取导航
		async getNav({
			commit
		}) {
			try {
				let res = await api.getNav()
				if (res.code === 200) {
					commit('setNav', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//获取推荐导航
		async getRecommendNav({
			commit
		}) {
			try {
				let res = await api.getRecommendNav()
				if (res.code === 200) {
					res.data=res.data.filter(item=>{return item.isShow})
					commit('setRecommendNav', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//获取推荐导航商品数据
		async getNavGoods({
			commit,
		},id) {
			try {
				let res = await api.getNavGoods({id})
				if (res.code === 200) {
					commit('setNavGoods', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//获取通知
		async getNotice({
			commit,
		}) {
			try {
				let res = await api.getNotice()
				if (res.code === 200) {
					commit('setNotice', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//获取区域列表
		async getAllAreaList({
			commit,
		}) {
			try {
				let res = await api.getAreaList()
				if (res.code === 200) {
					commit('setAreaList', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//搜索获取区域列表
		async getSearchAreaList({
			commit,
		},item) {
			try {
				let res = await api.searchAreaList(item)
				if (res.code === 200) {
					commit('setSearchAreaList', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//小米之家
		async getStoreHome({
			commit,
		},item) {
			try {
				let res = await api.getStoreHome(item)
				if (res.code === 200) {
					 commit('setStoreList', res.data.data.store_type_list)
				}	
			} catch(err) {
				console.log(err)
			}
		},
		//获取小米之家详情
		async getStoreDetail({
			commit,
		},item) {
			try {
				let res = await api.getStoreDetail(item)
				if (res.code === 200) {
					 commit('setStoreDetail', res.data)
				}	
			} catch(err) {
				console.log(err)
			}
		}
	},
}
