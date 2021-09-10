import api from "../../http/api.js"
export default {
	// 命名空间
	namespaced: true,
	state: {
		//短信验证码是否发送成功
		send: false,
		//收货地址
		addressList: [],
	},
	mutations: {
		setSend(state, data) {
			state.send = data
		},
		setAddress(state, data) {
			state.addressList = data
		}
	},
	// 发异步请求的
	actions: {
		// async await
		// 异步操作同步化: 用一个变量接收请求的结果
		// 每个action的方法有且仅有两个参数 第一个参数是store对象 第二个参数是请求的参数
		//获取分类
		async getCode({
			commit
		}, mobile) {
			try {
				let res = await api.getCode(mobile)
				commit('setSend', res.code === 200)
			} catch (err) {
				console.log(err)
			}
		},
		//手机号登录
		async mobileLogin({
			commit
		}, item) {
			try {
				let res = await api.mobileLogin(item)
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				if (res.code === 200) {
					//存储token 和用户信息
					uni.setStorageSync('userInfo', res.data)
					uni.setStorageSync('token', res.token)
					setTimeout(() => {
						let isCar = uni.getStorageSync('isCar')
						if (isCar) {
							uni.navigateBack()
							uni.setStorageSync('isCar',null)
						} else {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}
					}, 1000)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//用户名登录
		async userLogin({
			commit
		}, item) {
			try {
				let res = await api.userLogin(item)
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
				if (res.code === 200) {
					//存储token 和用户信息
					uni.setStorageSync('userInfo', res.data)
					uni.setStorageSync('token', res.token)
					setTimeout(() => {
						let isCar = uni.getStorageSync('isCar')
						if (isCar) {
							uni.navigateBack()
							uni.setStorageSync('isCar',null)
						} else {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}
					}, 1000)
				}
			} catch (err) {
				console.log(err)
			}
		},
		//注册
		async register({
			commit
		}, item) {
			try {
				let res = await api.register(item)
				if (res.code === 200) {
					uni.showToast({
						title: '注册成功',
						icon: 'none'
					})
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}, 1000)
				} else
					uni.showToast({
						title: '注册失败'
					})
			} catch (err) {
				console.log(err)
			}
		},
		// 获取收货地址
		async getAddress({
			commit
		}, item) {
			try {
				let res = await api.getAppAddress(item)
				if (res.code === 200) {
					commit('setAddress', res.data)
				}
			} catch (err) {
				console.log(err)
			}
		},
		// 新增收货地址
		async addAddress({
			commit
		}, item) {
			try {
				let res = await api.addAddress(item)
				if (res.code === 200) {
					uni.showToast({
						title:'新增成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/address/address'
						})
					},1000)
				}
			} catch (err) {
				console.log(err)
			}
		},
		// 删除收货地址
		async delAddress({
			commit
		}, item) {
			try {
				let res = await api.delAddress(item)
				if (res.code === 200) {
					uni.showToast({
						title:'删除成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/address/address'
						})
					},1000)
				}
			} catch (err) {
				console.log(err)
			}
		},
		// 修改收货地址
		async updateAddress({
			commit
		}, item) {
			try {
				let res = await api.updateAddress(item)
				if (res.code === 200) {
					uni.showToast({
						title:'编辑成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/address/address'
						})
					},1000)
				}
			} catch (err) {
				console.log(err)
			}
		}
	}
}
