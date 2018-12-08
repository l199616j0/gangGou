// pages/chat/chat.js

const app = getApp()


Page({



  /**
  * 页面的初始数据
  */

  data: {

    newslist: [3],

    userInfo: {},

    scrollTop: 0,

    // increase: false,//图片添加区域隐藏

    aniStyle: false,//动画效果

    message: "",

    previewImgList: [3],
    pics: [],
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isShow: true,
    item1:[]
  },
  onLoad :function () {
//     let that = this;
//     if (app.globalData.userInfo) {
//     this.setData({
//       userInfo: app.globalData.userInfos
//   })
// }
},

  //监听input值的改变

  bindChange(res) {
    var _this= this;
    this.setData({
      message: res.detail.value,

    })

  },

  cleanInput() {

    //button会自动清空，所以不能再次清空而是应该给他设置目前的input值

    this.setData({

      message: this.data.message

    })

  },


  //点击空白隐藏message下选框

  outbtn() {

    this.setData({

      increase: false,

      aniStyle: true

    })

  },

  //图片预览

  previewImg(e) {

    var that = this

    //必须给对应的wxml的image标签设置data-set=“图片路径”，否则接收不到

    var res = e.target.dataset.src

    var list = this.data.previewImgList //页面的图片集合数组

    //判断res在数组中是否存在，不存在则push到数组中, -1表示res不存在

    if (list.indexOf(res) == -1) {

      this.data.previewImgList.push(res)

    }

    wx.previewImage({

      current: res, // 当前显示图片的http链接

      urls: that.data.previewImgList // 需要预览的图片http链接列表

    })

  },
  chooseImage: function () {
    var _this = this,
      pics = this.data.pics;
    wx.chooseImage({
      count: 9 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // or
      // iginal 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var imgSrc = res.tempFilePaths;
        pics = pics.concat(imgSrc);
        // 控制触发添加图片的最多时隐藏
        if (pics.length >= 9) {
          _this.setData({
            isShow : (!_this.data.isShow)
          })
        }else {
          _this.setData({
            isShow: (_this.data.isShow)
          })
        }
        _this.setData({
          pics: pics
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  onGotUserInfo:function(e){
   
    this.setData({
      userInfo: e.detail.userInfo
    });
    //   this.setData({
    //     'item1.nickName': e.detail.userInfo.nickName,
    //     'item1.images': this.data.userInfo.avatarUrl,
    //     'item1.content': this.data.message
    // });
    this.setData({
      'item1.nickName': 'sixian',
      'item1.images': '/ images/b1.jpg',
      'item1.content': "nihao"
    });
    console.log(this.data.item1);
  },

  send: function (e) {
    console.log(e.detail.userInfo);
    // this.setData({
    //   'item1.nickName': e.detail.userInfo.nickName,
    //   'item1.images': e.detail.userInfo.avatarUrl,
    //   'item1.content': this.data.message
    // });
  },

  //聊天消息始终显示最底端

  bottom: function () {

    var query = wx.createSelectorQuery()

    query.select('#flag').boundingClientRect()

    query.selectViewport().scrollOffset()

    query.exec(function (res) {

      wx.pageScrollTo({

        scrollTop: res[0].bottom // #the-id节点的下边界坐标

      })

      res[1].scrollTop // 显示区域的竖直滚动位置

    })

  },

})
