const jinrishici = require('jinrishici.js');

var util = require('../utils/utils.js');
let app = getApp();
Page({
  data: {
    navState: 0,//导航状态
    // data_list:[]
  },
  //监听滑块
  bindchange(e) {
    // console.log(e.detail.current)
    let index = e.detail.current;
    this.setData({
      navState:index
    })
  },
  //点击导航
  navSwitch: function(e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    this.setData({
      navState:index
    })
  },

// 自定义事件 用来接收子组件传递的数据的
handleItemChange(e) {
  // 接收传递过来的参数
  const { index } = e.detail;
  let { tabs } = this.data;
  tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
  this.setData({
    tabs
  })
},
onLoad: function () {
   // 调用云函数
   wx.cloud.callFunction({
    name: 'login',
    data: {},
    success: res => {
      // console.log('[云函数] [login] user openid: ', res.result.userInfo.openId)
      this.setData({"appid":res.result.userInfo.openId})
      // wx.navigateTo({
        // url: '../userConsole/userConsole',
      // })
    },
    fail: err => {
      console.error('[云函数] [login] 调用失败', err)
      wx.navigateTo({
        url: '../deployFunctions/deployFunctions',
      })
    }
  })
  jinrishici.load(result => {
    // 下面是处理逻辑示例
    this.setData({"jinrishici": result.data.content})
    this.setData({"jinrishicititle": result.data.origin.title})
    this.setData({"jinrishicidynasty": result.data.origin.dynasty})
    this.setData({"jinrishiciauthor": result.data.origin.author})
  })
  let thispagewyy=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=j',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagewyy.setData({"wyynr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagewyy.setData({"wyyzz":"匿名"})
      }else{
        thispagewyy.setData({"wyyzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispageyx=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=c',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageyx.setData({"yxnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageyx.setData({"yxzz":"匿名"})
      }else{
        thispageyx.setData({"yxzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispagewz=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=d',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagewz.setData({"wznr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagewz.setData({"wzzz":"匿名"})
      }else{
        thispagewz.setData({"wzzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispageyc=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=e',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageyc.setData({"ycnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageyc.setData({"yczz":"匿名"})
      }else{
        thispageyc.setData({"yczz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispageys=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=h',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageys.setData({"ysnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageys.setData({"yszz":"匿名"})
      }else{
        thispageys.setData({"yszz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispagedh=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=a',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagedh.setData({"dhnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagedh.setData({"dhzz":"匿名"})
      }else{
        thispagedh.setData({"dhzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
  let thispagezx=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=k',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagezx.setData({"zxnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagezx.setData({"zxzz":"匿名"})
      }else{
        thispagezx.setData({"zxzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
shici:function(){
  jinrishici.load(result => {
    // 下面是处理逻辑示例
    this.setData({"jinrishici": result.data.content})
    this.setData({"jinrishicititle": result.data.origin.title})
    this.setData({"jinrishicidynasty": result.data.origin.dynasty})
    this.setData({"jinrishiciauthor": result.data.origin.author})
    // this.setData({"matchTag0": result.data.matchTags[0]})
    // this.setData({"matchTag1": result.data.matchTags[1]})
  })
},
shicicollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date());
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.jinrishici,
    description2: this.data.jinrishiciauthor,
     due: time,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
wangyiyun:function(){
 
let thispagewyy=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=j',
    method: "GET",
    // header :{"content-Type":"application/json"},
    success:function(res){
      thispagewyy.setData({"wyynr":res.data.hitokoto})
      // wx.setStorageSync('w',res.data.hitokoto)
      // var b =wx.getStorageSync('w')
      // thispagewyy.setData({"b":b})

      if(res.data.from_who==null){
        thispagewyy.setData({"wyyzz":"匿名"})
      }else{
        thispagewyy.setData({"wyyzz":res.data.from_who})
      }
      wx.hideToast() 
    },
  }) 
},
wangyiyuncollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date());
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.wyynr,
    description2: this.data.wyyzz,
    due:time,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},

youxi:function(){
  let thispageyx=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=c',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageyx.setData({"yxnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageyx.setData({"yxzz":"匿名"})
      }else{
        thispageyx.setData({"yxzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
youxicollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date()); 
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.yxnr,
    description2: this.data.yxzz,
    due: time ,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
     
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
wenzi:function(){
  let thispagewz=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=d',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagewz.setData({"wznr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagewz.setData({"wzzz":"匿名"})
      }else{
        thispagewz.setData({"wzzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
wenzicollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date());  
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.wznr,
    description2: this.data.wzzz,
    due: time,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
      
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
yuanchuang:function(){
  let thispageyc=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=e',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageyc.setData({"ycnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageyc.setData({"yczz":"匿名"})
      }else{
        thispageyc.setData({"yczz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
yuanchuangcollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date()); 
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.ycnr,
    description2: this.data.yczz,
    due: time,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
     
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
yinshi:function(){
  let thispageys=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=h',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispageys.setData({"ysnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispageys.setData({"yszz":"匿名"})
      }else{
        thispageys.setData({"yszz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
yinshicollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date()); 
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.ysnr,
    description2: this.data.yszz,
    due: time ,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
      
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
donghua:function(){
  let thispagedh=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=a',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagedh.setData({"dhnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagedh.setData({"dhzz":"匿名"})
      }else{
        thispagedh.setData({"dhzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
donghuacollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  var time = util.formatTime(new Date()); 
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  table.add({
  data: {
    description: this.data.dhnr,
    description2: this.data.dhzz,
    due: time ,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
     
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
},
zhexue:function(){
  let thispagezx=this
  wx.request({
    url: 'https://v1.hitokoto.cn?encode=json&c=k',
    method: "GET",
    header :{"content-Type":"application/json"},
    success:function(res){
      thispagezx.setData({"zxnr":res.data.hitokoto})
      if(res.data.from_who==null){
        thispagezx.setData({"zxzz":"匿名"})
      }else{
        thispagezx.setData({"zxzz":res.data.from_who})
      }
      wx.hideToast()
    }
  })
},
zhexuecollect:function(){
  wx.showLoading({
    title: '收藏中',
  })
  const db = wx.cloud.database({});
  const table = db.collection('cypde');
  var time = util.formatTime(new Date()); 
  table.add({
  data: {
    description: this.data.zxnr,
    description2: this.data.zxzz,
    due: time,
  },
  success: function(res) {
    wx.showToast({
      title: '收藏成功',
      }) 
     
  },
  fail:function(res){
    wx.showToast({
      title: '收藏失败',
      })
      wx.hideToast({
        success: (res) => {},
      })
  }
});
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
    /*** 滑动切换tab***/
bindChange: function (e) {
  var that = this;
  that.setData({ currentTab: e.detail.current });
},
/*** 点击tab切换***/
swichNav: function (e) {
  var that = this;
  that.setData({
    currentTab: e.target.dataset.current
  });
}
})