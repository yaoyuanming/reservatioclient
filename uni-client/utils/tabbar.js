// 普通用户tabbar
const userTab = [{
		"pagePath": "/pages/Home/Home",
		iconPath: "home",
		selectedIconPath: "home-fill",
		"text": "首页",
	},
	{
		"pagePath": "/pages/Reservate/Reservate",
		iconPath: "calendar",
		selectedIconPath: "calendar-fill",
		"text": "预约",
	},
	{
		"pagePath": "/pages/Lesson/Lesson",
		iconPath: "grid",
		selectedIconPath: "grid-fill",
		"text": "课程",
	},
	{
		iconPath: "account",
		"pagePath": "/pages/My/My",
		selectedIconPath: "account-fill",
		"text": "我的",
	}
]
// 店员Tab
const clerkTab = [{
		"pagePath": "/pages/Home/Home",
		"iconPath": "static/images/home.png",
		selectedIconPath: "home-fill",
		"text": "首页",
		"count": 0,
	},
	{
		"pagePath": "/pages/Reservate/Reservate",
		"iconPath": "/static/images/reservate.png",
		"selectedIconPath": "static/images/reservate-select.png",
		"text": "预约"
	},
	{
		"pagePath": "/pages/Reservate/Reservate",
		"iconPath": "/static/images/reservate.png",
		"selectedIconPath": "static/images/reservate-select.png",
		"text": "预约"
	},
	{
		iconPath: "account",
		"pagePath": "/pages/My/My",
		selectedIconPath: "account-fill",
		"text": "我的"
	}
]
// 管理员用户tabbar
const adminTab = [{
		"pagePath": "/pages/Home/Home",
		"iconPath": "static/images/home.png",
		selectedIconPath: "home-fill",
		"text": "首页"
	},
	{
		"pagePath": "/pages/Reservate/Reservate",
		"iconPath": "/static/images/reservate.png",
		"selectedIconPath": "static/images/reservate-select.png",
		"text": "预约"
	},
	{
		"pagePath": "/pages/Reservate/Reservate",
		"iconPath": "static/images/reservate.png",
		"selectedIconPath": "static/images/reservate-select.png",
		"text": "管理"
	},
	{
		iconPath: "account",
		"pagePath": "/pages/My/My",
		selectedIconPath: "account-fill",
		"text": "我的"
	}
]
export default {
	userTab,
	clerkTab,
	adminTab
}