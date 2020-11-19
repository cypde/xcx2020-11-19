// miniprogram/pages/index2/index2.js

const app = getApp()
Page({
  openid:'',
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad:function(){
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  gotoPage0: function()
  { wx.navigateTo({ 
    url: '/pages/caidan/caidan',
   }) 
  },
  gotoPage1: function()
  { wx.navigateTo({ 
    url: '/pages/list/list',
   }) 
  },
  gotoPage2: function()
  { wx.navigateTo({ 
    url: '/pages/about/about',
   }) 
  },
  gotoPage3: function()
  { wx.navigateTo({ 
    url: '/pages/collect/collect',
   }) 
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
    onLuanch:function(){
     
        // this.setData({"b":wx.getStorageSync('k')})
        // this.setData({"b":res.data.description})

    },
    getUserInfo: function(e) {
      console.log(e)
        const db = wx.cloud.database({});
        const table = db.collection('cypde');
        var myDate = new Date(); 
        table.add({
        data: {
          user:e.detail.rawData,
        },
      });
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
   
})