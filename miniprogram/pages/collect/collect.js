// miniprogram/pages/collect/collect.js

let app = getApp();
let currentPage = 0 // 当前第几页,0代表第一页 
let pageSize = 20 //每页显示多少数据 
const db = wx.cloud.database()
const _ = db.command
const col = "cypde"
const sql = {
  _id: _.neq(1)
} //获取所有记录
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // data_list:[],
    // dataList: [], //放置返回数据的数组  
    // loadMore: false, //"上拉加载"的变量，默认false，隐藏  
    // loadAll: true, //“没有数据”的变量，默认false，隐藏  
    isEndOfList: false,
    list: [],
    limit: 20 //每次拉取数量
  },
 
 
  onLoad: function () {
    
    this.getData()
    
   
   // 调用云函数
  //  wx.cloud.callFunction({
  //   name: 'login',
  //   data: {},
  //   success: res => {
  //     // console.log('[云函数] [login] user openid: ', res.result.userInfo.openId)
  //     this.setData({appid:res.result.userInfo.openId})
  //     // wx.navigateTo({
  //       // url: '../userConsole/userConsole',
  //     // })
  //     let thispagewyysql=this
  //     const myOpenID = this.data.appid
  //     // console.log('[', myOpenID)
  //     // console.log('dfsfs', thispagewyysql.data.appid)


  //     // wx.cloud.callFunction({
  //     //   name:"getList",
  //     //   data:{myOpenID},
  //     //   success:res=>{
  //     //     console.log(res.result) 
  //     //     this.setData({data_list:res.result})
  //     //   }
  //     // })

  //   //   const db = wx.cloud.database({});
  //   //    db.collection('cypde')
  //   //   .where({
  //   //   _openid: myOpenID,
  //   //   }).orderBy('due','desc').get({
  //   //   success:function(res){
  //   //       thispagewyysql.setData({"data_list":res.data})
  //   //     }
  //   // });

  //   // wx.cloud.callFunction({
  //   //   name:"getList",
  //   //   data:{myOpenID},
  //   //   success:res=>{
  //   //     console.log(res.result) 
  //   //     this.setData({data_list:res.result})
  //   //   }
  //   // })
  //   },
  //   fail: err => {
  //     console.error('[云函数] [login] 调用失败', err)
  //     wx.navigateTo({
  //       url: '../deployFunctions/deployFunctions',
  //     })
  //   }
  // })
  },
  getData: function() {
    db.collection('cypde')
      // .where(sql)
      .skip(this.data.list.length).orderBy('due','desc')
      .limit(this.data.limit)
      .get()
      .then(res => {
        this.setData({
          list: [...this.data.list, ...res.data], //合并数据
          isEndOfList: res.data.length < this.data.limit ? true : false, //判断是否结束
          loadAll: false, //是否加载完所有数据
          // loadMore: false //把"上拉加载"的变量设为false，显示
        })
      })
  },
  onReachBottom: function() {
    this.data.isEndOfList || this.getData()
  },

 //页面上拉触底事件的处理函数
//  onReachBottom: function() {
//   console.log("上拉触底事件")
//   let that = this
//   if (!that.data.loadMore) {
//     that.setData({
//       loadMore: true, //加载中  
//       loadAll: false //是否加载完所有数据
//     });

//     //加载更多，这里做下延时加载
//     setTimeout(function() {
//       that.getData()
//     }, 1000)
//   }
// },
//访问网络,请求数据  
// getData() {
//   let that = this;
//   //第一次加载数据
//   if (currentPage == 1) {
//     this.setData({
//       loadMore: true, //把"上拉加载"的变量设为true，显示  
//       loadAll: false //把“没有数据”设为false，隐藏  
//     })
//   }
//   //云数据的请求
//   var a =currentPage * pageSize
//   wx.cloud.database().collection("cypde").orderBy('due','desc')
//     .skip(a) //从第几个数据开始
//     .limit(pageSize)
//     .get({
//       success(res) {
//         if (res.data && res.data.length > 0) {
//           console.log("请求成功", res.data)
//           currentPage++
//           //把新请求到的数据添加到dataList里  
//           let list = that.data.dataList.concat(res.data)
//           that.setData({
//             dataList: list, //获取数据数组    
//             loadMore: false //把"上拉加载"的变量设为false，显示  
//           });
//           if (res.data.length < pageSize) {
//             that.setData({
//               loadMore: false, //隐藏加载中。。
//               loadAll: true //所有数据都加载完了
//             });
//           }
//         } else {
//           that.setData({
//             loadAll: true, //把“没有数据”设为true，显示  
//             loadMore: false //把"上拉加载"的变量设为false，隐藏  
//           });
//         }
//       },
//       fail(res) {
//         console.log("请求失败", res)
//         that.setData({
//           loadAll: false,
//           loadMore: false
//         });
//       }
//     })
  // },

  remove(event) {
    const db = wx.cloud.database()
    let index2=event.currentTarget.dataset.index2
    if(index2){
      db.collection('cypde').doc(index2).remove()
      wx.showToast({
        title: '删除成功',
      })
      // this.onLoad();
    }
  },
  // onPullDownRefresh:function()
  // {
  //   this.getData(), 
  //   wx.showNavigationBarLoading(), //在标题栏中显示加载
    
  //   wx.stopPullDownRefresh({
  //     success: (res) => {},
  //   })
  //   wx.hideNavigationBarLoading({
  //     success: (res) => {},
  //   })

  // },
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
})
