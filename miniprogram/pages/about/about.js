//about.js
//获取应用实例
const app = getApp()

Page({
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
        path: '/pages/index/index'
      }
    }
})
