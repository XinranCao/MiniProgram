export default defineAppConfig({
  pages: [
    'pages/homePage/index',
    'pages/orderPage/index',
    'pages/profilePage/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
    backgroundColor: '#efefef'
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#515151",
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/homePage/index',
        text: '首页',
        iconPath: 'img/icons/home.png',
        selectedIconPath: 'img/icons/home-active.png'
      },
      {
        pagePath: 'pages/orderPage/index',
        text: '接单',
        iconPath: 'img/icons/orders.png',
        selectedIconPath: 'img/icons/orders-active.png'
      },
      {
        pagePath: 'pages/profilePage/index',
        text: '个人中心',
        iconPath: 'img/icons/profile.png',
        selectedIconPath: 'img/icons/profile-active.png'
      }
    ]
  }
})
