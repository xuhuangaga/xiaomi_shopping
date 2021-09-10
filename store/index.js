import Vue from 'vue'
import Vuex from 'vuex'
import home from './home/index.js'
import category from './category/index.js'
import product from './product/index.js'
import users from './users/index.js'
import orders from './orders/index.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		user: uni.getStorageSync('user'),
		carNum:0
	},
	mutations: {
		//修改用户信息
		setUser(state, data) {
			state.user = data
		},
		//修改购物车数量
		setCarNum(state,data) {
			state.carNum=data
		}
	},
	actions:{},
	//模块化
	modules:{
		home,
		category,
		product,
		users,
		orders
	}
})
export default store
