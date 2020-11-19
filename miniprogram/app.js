//app.js
App({
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
        path: '/pages/index/index'
      }
    },
    onLaunch:function(){
      wx.cloud.init({
      env: 'cypde-9ghiqu9vb04f9232',
      traceUser:true
    })
     // 展示本地存储能力
     var logs = wx.getStorageSync('logs') || []
     logs.unshift(Date.now())
     wx.setStorageSync('logs', logs)
 
     // 登录
     wx.login({
       success: res => {
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
       }
     }),
     // 获取用户信息
     wx.getSetting({
       success: res => {
         if (res.authSetting['scope.userInfo']) {
           // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
           wx.getUserInfo({
             success: res => {
               // 可以将 res 发送给后台解码出 unionId
               this.globalData.userInfo = res.userInfo
 
               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
               // 所以此处加入 callback 以防止这种情况
               if (this.userInfoReadyCallback) {
                 this.userInfoReadyCallback(res)
               }
             }
           })
         }
       }
     })
    },
    globalData: {
      userInfo: null,
    }
    
})
