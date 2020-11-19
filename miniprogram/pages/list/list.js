// miniprogram/pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareTimeline(res){
    console.log(res)
    return {
      title: '洛理一言小程序分享至朋友圈',
      path: '/pages/index/index',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594374964481&di=3ceba827e91e126012c43de3887a58c7&imgtype=0&src=http%3A%2F%2Fdmimg.5054399.com%2Fallimg%2Fpkm%2Fpk%2F13.jpg'
    }
  },
    onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '洛理一言小程序',
        path: '/pages/index/index',
      }
    },

  go1:function(){
    wx.navigateToMiniProgram({
   appId: 'wx5a525df209c26653',//要打开的小程序 appId
   path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
   extraData: {
     foo: 'bar'//需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据
   },
   envVersion: 'release',//要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
   success(res) {
     // 打开成功
   }
 })
},

go2:function(){
    wx.navigateToMiniProgram({
    appId: 'wxa9d2f9daab759fbc',//要打开的小程序 appId
    path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
    extraData: {},
    envVersion: 'release',
    success(res) {
    }
  })
},

go3:function(){
  wx.navigateToMiniProgram({
  appId: 'wx6bc3582034a1d7a4',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go4:function(){
  wx.navigateToMiniProgram({
  appId: 'wxa72346ee4eaa95e6',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go5:function(){
  wx.navigateToMiniProgram({
  appId: 'wx6dda80acfd900852',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go6:function(){
  wx.navigateToMiniProgram({
  appId: 'wxf976a9e8c25dedf2',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go7:function(){
  wx.navigateToMiniProgram({
  appId: 'wx60001e99e6f99e70',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go8:function(){
  wx.navigateToMiniProgram({
  appId: 'wx2f7fda52d8d031ee',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},

go9:function(){
  wx.navigateToMiniProgram({
  appId: 'wx2f9b06c1de1ccfca',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},
go10:function(){
  wx.navigateToMiniProgram({
  appId: 'wxbfd59de8796261a6',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},
go11:function(){
  wx.navigateToMiniProgram({
  appId: 'wx68c7dd3634272f71',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
},
go12:function(){
  wx.navigateToMiniProgram({
  appId: 'wxca5dabf7fb3ae088',//要打开的小程序 appId
  path: 'pages/index/index',//打开的页面路径，如果为空则打开首页
  extraData: {},
  envVersion: 'release',
  success(res) {
  }
})
}
})