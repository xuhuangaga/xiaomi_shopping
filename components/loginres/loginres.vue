<template>
	<view class="logres-dv">
		<view v-if="!isPhoneLogin || !isLogin">
			<view class="m-t10 ipt-dv br-10 f-a-c" :class="[{'active':isUserNameFocus},{'err':!isUserNameVerOk}]">
				<input type="text" placeholder="请输入用户名" v-model.trim="userName" class="p-l-r10 wbfb" @blur="blur(3)"
					@click="focus(3)" />
			</view>
			<view class="errMsg m-t5" v-if="!isUserNameVerOk">{{errUserNameMsg}}</view>
		</view>
		<view v-if="!isLogin ||isPhoneLogin">
			<view class="m-t10 ipt-dv br-10 f-a-c" :class="[{'active':isFocus},{'err':!isVerOk}]">
				<input type="text" placeholder="请输入手机号码" v-model.trim="phone" class="p-l-r10 wbfb" @blur="blur(1)"
					@click="focus(1)" />
			</view>
			<view class="errMsg m-t5" v-if="!isVerOk">{{errMsg}}</view>
		</view>
		<view v-if="(isPhoneVerOk && isPhoneLogin) || !isLogin">
			<view class="m-t10 ipt-dv br-10 f-j-b" :class="[{'active':isCodeFocus},{'err':!isCodeVerOk}]">
				<input type="text" placeholder="短信验证码" v-model.trim="code" class="p-l-r10" @blur="(4)"
					@click="focus(4)" />
				<view class="m-r10" @click="senCode">
					{{time}}
				</view>
			</view>
			<view class="errMsg m-t5" v-if="!isCodeVerOk">{{errCodeMsg}}</view>
		</view>
		<view v-if="!isPhoneLogin || !isLogin">
			<view class="m-t10 ipt-dv br-10 f-a-c" :class="[{'active':isPsdFocus},{'err':!isPsdVerOk}]">
				<input type="password" placeholder="请输入密码" v-model.trim="password" class="p-l-r10 wbfb" @blur="blur(2)"
					@click="focus(2)" />
			</view>
			<view class="errMsg m-t5" v-if="!isPsdVerOk">{{errPsdMsg}}</view>
		</view>
		<view class="m-t20">
			<cc-button round type="primary" block :disabled="isMounted" @click="submit">{{btnText}}</cc-button>
		</view>
	</view>
</template>

<script>
	import {
		createNamespacedHelpers
	} from 'vuex'
	let userModule = createNamespacedHelpers('users')
	let {
		mapActions: userActions,
		mapState: userState
	} = userModule
	export default {
		components: {},
		props: {
			//按钮显示文字
			btnText: {
				type: String
			},
			//是否手机登录 获取 是否注册  目的是显示验证码
			isPhoneLogin: {
				type: Boolean
			},
			//是否是登录
			isLogin: {
				type: Boolean
			}
		},
		data() {
			return {
				//用户名
				userName: '',
				//短信验证码
				code: '',
				// 手机号码
				phone: '',
				//密码
				password: '',
				isFocus: false,
				isPsdFocus: false,
				isCodeFocus: false,
				isUserNameFocus: false,
				errMsg: '请输入手机号',
				errCodeMsg: '请输入验证码',
				//是否验证成功
				isVerOk: true,
				isPsdVerOk: true,
				isCodeVerOk: true,
				isUserNameVerOk: true,
				isMounted: true,
				errPsdMsg: '请输入密码',
				errUserNameMsg: '请输入用户名',
				//手机号是否验证通过
				isPhoneVerOk: false,
				time: '获取验证码'
			}
		},
		methods: {
			temp() {
				//登录
				if (this.isLogin) {
					if (!this.isPhoneLogin) {
						if (this.userName && this.password && this.verUserName(this
								.userName) && this.verPsd(this.password)) this.isMounted = false
						else this.isMounted = true
					} else {
						if (this.phone && this.code && this.verPhone(this.phone) && this.verCode(this
								.code)) this.isMounted = false
						else this.isMounted = true
					}
				} else {
					//注册
					if (this.phone && this.code && this.verPhone(this.phone) && this.verCode(this
							.code) && this.userName && this.password && this.code && this.verCode(this.code) && this
						.verUserName(this
							.userName) && this.verPsd(this.password)) this.isMounted = false
					else this.isMounted = true
				}
			},
			//登录 或者 注册
			submit() {
				if (this.isLogin) {
					if (this.isPhoneLogin) {
						//手机号登录
						this.mobileLogin({
							mobile: this.phone,
							code: this.code
						})
					} else {
						//用户名登录
						this.userLogin({
							username: this.userName,
							password: this.password
						})
					}
				} else {
					this.register({
						mobile: this.phone,
						code: this.code,
						username: this.userName,
						password: this.password
					})
				}
			},
			//获取焦点时
			//index:1 手机号码 2：密码 3：用户名 4：验证码
			focus(index) {
				this.temp()
				if (index === 1) this.isFocus = true
				else if (index === 2) this.isPsdFocus = true
				else if (index === 3) this.isUserNameFocus = true
				else this.isCodeFocus = true
			},
			//失去焦点时
			//index:1 手机号码 2：密码 3：用户名 4：验证码
			blur(index) {
				if (index === 1) this.verPhone(this.phone)
				else if (index === 2) this.verPsd(this.password)
				else if (index === 3) this.verUserName(this.userName)
				else this.verCode(this.code)
				this.temp()
			},
			//验证手机号
			verPhone(val) {
				this.isFocus = false
				let reg =
					/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
				let flag = true
				if (val) flag = reg.test(val)
				else flag = false
				if (!flag) {
					this.isVerOk = false
					this.isMounted = true
					this.isPhoneVerOk = false
					this.errMsg = val ? '请输入正确的手机号码' : '请输入手机号码'
				} else {
					this.isVerOk = true
					this.isPhoneVerOk = true
					this.isMounted = false
				}
				return flag
			},
			//验证用户名
			verUserName(val) {
				this.isUserNameFocus = false
				if (!val) {
					this.isUserNameVerOk = false
					this.isMounted = true
					this.errUserNameMsg = '请输入用户名'
					return false
				} else {
					this.isUserNameVerOk = true
					this.isMounted = false
					return true
				}
			},
			//验证验证码
			verCode(val) {
				this.isCodeFocus = false
				if (!val) {
					this.isCodeVerOk = false
					this.isMounted = true
					this.errCodeMsg = '请输入验证码'
					return false
				} else {
					this.isCodeVerOk = true
					this.isMounted = false
					return true
				}
			},
			//验证密码
			verPsd(val) {
				this.isPsdFocus = false
				let flag = true
				if (val) flag = val.length >= 6 && val.length <= 10
				else flag = false
				if (!flag) {
					this.isPsdVerOk = false
					this.isMounted = true
					this.errPsdMsg = val ? '密码长度为6-10个字符' : '请输入密码'
				} else {
					this.isPsdVerOk = true
					this.isMounted = false
				}
				return flag
			},
			//点击发送验证码
			senCode() {
				if (this.verPhone(this.phone))
					//发送验证码
					this.getCode({
						mobile: this.phone
					})
			},
			setTime() {
				let t = 120
				this.time = ""
				let timer = setInterval(() => {
					t--
					if (t === 0) {
						clearInterval(timer)
						this.time = '获取验证码'
					} else
						this.time = `重新发送 ${t}s`
				}, 1000)
			},
			...userActions(['getCode', 'register', 'userLogin', 'mobileLogin'])
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {

		},
		filters: {},
		computed: {
			...userState(['send'])
		},
		watch: {
			isLogin() {
				this.isMounted = true
			},
			isPhoneLogin() {
				this.isMounted = true
			},
			//监听手机号码
			phone(val) {
				if (this.isLogin) {
					if (this.isPhoneLogin) {
						if (this.verPhone(val)) {
							//发送验证码
							this.getCode({
								mobile: val
							})
							if (this.code && this.verCode(this.code)) this.isMounted = false
							else this.isMounted = true
						}
					}
				} else {
					if (this.verPhone(val)) {
						//发送验证码
						this.getCode({
							mobile: val
						})
						if (this.code && this.verCode(this.code) && this.userName && this.verUserName(this.userName) &&
							this.password && this.verPsd(this.password)) this.isMounted = false
						else this.isMounted = true
					}
				}
			},
			//监听密码
			password(val) {
				//登录
				if (this.isLogin) {
					if (this.verPsd(val)) {
						if (this.userName && this.verUserName(this.userName)) this.isMounted = false
						else this.isMounted = true
					} else this.isMounted = true
				} else {
					if (this.verPsd(val)) {
						//注册
						if (this.code && this.verCode(this.code) && this.userName && this.verUserName(this.userName) &&
							this.phone && this.verPhone(this.phone)) this.isMounted = false
						else this.isMounted = true
					}
				}
			},
			//监听验证码
			code(val) {
				if (this.isLogin) {
					if (this.isPhoneLogin) {
						if (this.verCode(val)) {
							if (this.phone && this.verPhone(this.phone)) this.isMounted = false
							else this.isMounted = true
						} else this.isMounted = true
					}
				} else {
					if (this.verCode(val)) {
						if (this.password && this.verPsd(this.password) && this.userName && this.verUserName(this.userName) &&
							this
							.phone && this.verPhone(this.phone)) this.isMounted = false
						else this.isMounted = true
					}
				}
			},
			//监听用户名
			userName(val) {
				//登录
				if (this.isLogin) {
					if (this.verUserName(val)) {
						if (this.password && this.verPsd(this.password)) this.isMounted = false
						else this.isMounted = true
					} else this.isMounted = true
				} else {
					//注册
					if (this.verUserName(val)) {
						if (this.password && this.verPsd(this.password) && this.code && this.verCode(this.code) &&
							this
							.phone && this.verPhone(this.phone)) this.isMounted = false
						else this.isMounted = true
					}
				}
			},
			//监听发送验证码的结果
			send(val) {
				if (val) {
					this.setTime()
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.logres-dv {
		.ipt-dv {
			background: #F0F0F0;
			height: 100rpx;
			border: 4rpx solid #F0F0F0;
		}

		.errMsg {
			color: red;
		}

		.active {
			border: 4rpx solid #0b84ff;
		}

		.err {
			border: 4rpx solid red;
		}
	}
</style>
