// pages/user/user.js
const app = getApp()
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
  aboutus: function (event) {
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    });
  },
  helpinfo: function (event) {
    wx.navigateTo({
      url: '/pages/helpinfo/helpinfo',
    });
  },
  opensetting: function (event) {
    wx.openSetting({

    })
  },
  //登录按钮函数
  dologin:function(event)
  {
    wx.login({
      success: res => {
        console.log(res);
        if (res.errMsg =='login:ok')
        {
          console.log(res);
          docode2session(res.code);
        }
        else
        {
          wx.showToast(
            {
              title:res.errMsg
            } 
          );
        }
      }
    })
  }
})
function docode2session(code)
{
   // wx.showToast(
  //   {
  //     title: code
  //   }
  // );
  console.log(app.globalData.host + 'index.php/Home/Service/code2session/code/' + code);
 
  wx.request({

    url: app.globalData.host+'index.php/Home/Service/code2session/code/'+code,
    success: res => {
      login2(res.data);
    }
  })
}
function login2(data)
{
  
  console.log(data);
  if (data.hasOwnProperty("openid"))
  {
    console.log(data.openid);
  }
  else
  {
    console.log(data.errmsg);
  }
}