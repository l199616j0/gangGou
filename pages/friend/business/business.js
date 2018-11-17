// pages/business/business.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
    onload: function () {
      this.setData({
        text1: "商圈" 
      });
    },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  region: function (event) {
    wx.navigateTo({
      url: '/pages/friend/region/region',
    });
  },
  industry: function (event) {
    // wx.navigateTo({
    //   url: '/pages/industry/industry',
    // });
  }, 
  recommend: function (event) {
    // wx.navigateTo({
    //   url: '/pages/recommend/recommend',
    // });
  },
  information: function (event) {
    // wx.navigateTo({
    //   url: '/pages/information/information',
    // });
  },


})
