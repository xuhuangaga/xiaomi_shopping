
	import dayjs from 'dayjs'
export const arr = [{
		icon: '/static/user/daifukuan.png',
		name: '待付款',
		url: '/pages/userorders/userorders?index=1'
	},
	{
		icon: '/static/user/daishouhuo.png',
		name: '待收货',
		url: '/pages/userorders/userorders?index=2'
	},
	{
		icon: '/static/user/tuihuanxiu.png',
		name: '退换修',
		url: '/pages/userorders/userorders?index=3'
	}
]
export const arr1 = [
	[
		{
			icon: '/static/user/huiyuanzhongxin.png',
			name: '会员中心',
			url: '/pages/member/member'
		},
		{
			icon: '/static/user/youhui.png',
			name: '我的优惠',
			url: '/pages/coupon/coupon'
		},
	],
	[
		{
			icon: '/static/user/fuwuzhongxin.png',
			name: '服务中心',
			url: '/pages/member/member'
		},
		{
			icon: '/static/user/xiaomizhijia.png',
			name: '小米之家',
			url: '/pages/home/home'
		},
	],
	[
		{
			icon: '/static/user/fma.png',
			name: '我的F码',
			url: '/pages/code/code'
		},
		{
			icon: '/static/user/liwu.png',
			name: '礼物码兑换',
			url: '/pages/gift/gift'
		},
		{
			icon: '/static/user/liwu.png',
			name: '收货地址',
			url: '/pages/address/address'
		},
	],
	[
		{
			icon: '/static/user/shezhi.png',
			name: '退出登录',
			url: ''
		}
	]
]

//秒杀场次
let now = dayjs()
let date = now.format('YYYY-MM-DD')
export const seckill_site = [
	{
		title: '08:00',
		startTime: date + ` 08:00:00`,
		endTime: date + ` 10:00:00`,
		desc: '',
		startHours: 8,
		endHours: 10,
	}, {
		title: '10:00',
		startTime: date + ` 10:00:00`,
		endTime: date + ` 12:00:00`,
		desc: '',
		startHours: 10,
		endHours: 12,
		
	}, {
		title: '12:00',
		startTime: date + ` 12:00:00`,
		endTime: date + ` 14:00:00`,
		desc: '',
		startHours: 12,
		endHours: 14,
	}, {
		title: '14:00',
		startTime: date + ` 14:00:00`,
		endTime: date + ` 16:00:00`,
		desc: '',
		startHours: 14,
		endHours: 16,
	}
]