App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.getLocation({
      success: res=> {
        this.globalData.longitude = res.longitude
        this.globalData.latitude = res.latitude
      },
    })
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo=res.userInfo;
      }
    })
  },
  globalData: {
    userInfo: null,
    longitude:null,
    latitude:null,
    host:'https://ganggou.e-notice.cn/'
  }
})