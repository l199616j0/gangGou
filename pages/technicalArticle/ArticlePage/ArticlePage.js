// pages/technicalArticle/technicalArticle.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Articlelist: {},
    allArticle:[],
    ArticleDetail: {},
    Allleibie: {
      id: 0,
      name: '全部类别'
    },
    indexleibie: 0,
    nowleibie: '',
    //每页显示的行数：
    pagesize:4    ,
    //页码（从1开始）：
    p: 1,

    //排序方式：
    paixu: 'readcount',
    //升序或降序：
    order: 'desc',
    //排序方式选择：
    multiArray: [['热度','日期'], ['降序', '升序']],
    multiArray1: [['readcount', 'adddate'], ['desc', 'asc']],//二维数组，长度是多少是几列
    multiIndex: [0, 0],

    state:1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mythis = this;
    wx.request({
      url: app.globalData.host + 'index.php/Home/Service/getarticleclass',
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'  
      },
      success: function (res) {
        res.data.push(mythis.data.Allleibie),
          mythis.setData({
          Allleibie: res.data,
          indexleibie: res.data.length - 1,
          });
        console.log(res.data)
      },
      fail: function (res) {
        console.log(res);
      }
    });
    getarticles(this.data.nowleibie, this.data.pagesize, this.data.p, this.data.paixu, this.data.order, mythis)
  },

  /**
 * 点击项目列表查看详情
 */
  ArticleDetail: function (even) {

      getArticleDetail(even.currentTarget.dataset.datas.id);
      wx.navigateTo({
        url: '/pages/project/projectDetail/ArticleDetail?datas=' + JSON.stringify(this.data.ArticleDetail),
      });
    console.log(this.data.ArticleDetail)
  },

   /**
 * 改变类别选择器
 */
  bindPickerChangeleibie: function (e) {
    var mythis = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexleibie: e.detail.value,
      nowleibie: this.data.Allleibie[e.detail.value].id
    })
    if (this.data.nowleibie == "0")
      this.data.nowleibie = '';
    getarticles(this.data.nowleibie, this.data.pagesize, this.data.p, this.data.paixu, this.data.order, mythis),
      console.log('类别：', this.data.nowleibie)
  },

    /**
 * 改变排序方式的选择器
 */
  bindMultiPickerChange: function (e) {
    var mythis = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      paixu: this.data.multiArray1[0][e.detail.value[0]],
      orser: this.data.multiArray1[1][e.detail.value[1]]
    });
    getarticles(this.data.nowleibie, this.data.pagesize, this.data.p, this.data.paixu, this.data.order, mythis),
    console.log('排序规则：', this.data.paixu, '排序方式：', this.data.order)

  },

 /**
   * 点击加载更多
   */
  loadMore:function(){
    var mythis = this;
    wx.showLoading({
      title: '玩命加载中...',
    });
    mythis.data.p = mythis.data.p + 1;
    getarticles(mythis.data.nowleibie, mythis.data.pagesize, mythis.data.p, mythis.data.paixu, mythis.data.order, mythis),
    wx.hideLoading();
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
})

/**
 * 获取项目列表
 */
function getarticles(nowleibie, pagesize, p, paixu, order, mythis) {
  console.log("参数： nowleibie:", nowleibie," pagesize:", pagesize," p:",p," paixu:",paixu," order:",order);
  wx.request({
    url: app.globalData.host + 'index.php/Home/Service/getarticles',
    method: 'post',
    data: {
      nowleibie: nowleibie,
      pagesize: pagesize,
      p: p,
      paixu: paixu,
      order: order,
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {

      mythis.setData({
        Articlelist: res.data
      });
      console.log("文章列表：",mythis.data.Articlelist)
    },
    fail: function (res) {
      console.log(res);
    }
  });
};
function getArticleDetail(id) {
  wx.request({
    url: app.globalData.host + 'index.php/Home/Service/getarticlebyid',
    method: 'post',
    data: {
      id: id
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
    },
    success: function (res) {
        mythis.setData({
        ArticleDetail: res.data
        });
      console.log(mythis.data.ArticleDetail)
    },
    fail: function (res) {
      console.log(res);
    }
  });
}
/*

文章分类接口
http://ganggou.e-notice.cn/index.php/Home/Service/getarticleclass
返回数据
[{"id":"2","name":"\u6d4b\u8bd5\u5206\u7c7b1","deleted":"0","ddate":"2018-11-13 12:20:46"},{"id":"3","name":"\u6d4b\u8bd5\u5206\u7c7b2","deleted":"0","ddate":null}]

文章列表接口
http://ganggou.e-notice.cn/index.php/Home/Service/getarticles?p=1&pagesize=20&paixu=adddate&order=desc
{"error":0,"msg":"success","row":[{"id":"5","title":"321321","content":"<p>432431431431<\/p><p><br><\/p>","classid":"2","adduserid":"1","adddate":"2018-11-14 03:55:41","readcount":"0","deleted":"0","ddate":null,"pic1":"\/Public\/Uploads\/20181114\/5bebd34cbf024.jpg","pic2":"\/Public\/Uploads\/20181114\/5bebd4fbcb06c.png","pic3":""},{"id":"4","title":"132123","content":"<p>46546546<\/p>","classid":"2","adduserid":"1","adddate":"2018-11-14 03:47:43","readcount":"0","deleted":"0","ddate":null,"pic1":null,"pic2":null,"pic3":null},{"id":"3","title":"321313213","content":"<p>321321321321321<\/p>","classid":"2","adduserid":"1","adddate":"2018-11-14 03:46:12","readcount":"0","deleted":"0","ddate":null,"pic1":null,"pic2":null,"pic3":null},{"id":"1","title":"\u6d4b\u8bd5\u6587\u7ae0","content":"<p><img src="\/Public\/Uploads\/20181113\/5bea693d91122.png" style="max-width:100%;"><\/p><p>\u6d4b\u8bd5\u6dfb\u52a0\u6587\u7ae0<\/p><p>\u6d4b\u8bd5\u4fee\u6539<\/p><p><br><\/p>","classid":"3","adduserid":"1","adddate":"2018-11-13 02:40:03","readcount":"0","deleted":"0","ddate":null,"pic1":null,"pic2":null,"pic3":null},{"id":"2","title":"\u5927\u8428\u8fbe\u5927\u8428\u8fbe\u6492a","content":"<p>\u5927\u8428\u8fbe\u5927\u8428\u8fbe\u6492\u554a<\/p>","classid":"3","adduserid":"1","adddate":"2018-11-13 02:05:06","readcount":"0","deleted":"0","ddate":null,"pic1":null,"pic2":null,"pic3":null}]}
根据单个文章ID获取详细信息
http://ganggou.e-notice.cn/index.php/Home/Service/getarticlebyid?id=5
返回数据
{"error":0,"msg":"success","row":{"id":"5","title":"321321","content":"<p>432431431431<\/p><p><br><\/p>","classid":"2","adduserid":"1","adddate":"2018-11-14 03:55:41","readcount":"0","deleted":"0","ddate":null,"pic1":"\/Public\/Uploads\/20181114\/5bebd34cbf024.jpg","pic2":"\/Public\/Uploads\/20181114\/5bebd4fbcb06c.png","pic3":""}}



*/