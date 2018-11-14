// pages/indexT.js
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = []; 
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },                 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'PPwVGvHTtc0NkihLZwWVD1fYYhQWfp6u'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log("latitude:" + wxMarkerData[0].latitude);
      console.log("longitude:" + wxMarkerData[0].longitude);
      console.log("地址:" + wxMarkerData[0].address);
      console.log(data);
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success
    });
  },

/*
项目信息
*/
  project: function (event) {
    wx.navigateTo({
      url: '/pages/project/project',
    });
  },
  
/*
技术文章
*/
  technicalArticle: function (event) {
    wx.navigateTo({
      url: '/pages/technicalArticle/technicalArticle',
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

  }
})