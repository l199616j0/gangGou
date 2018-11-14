// pages/project/project.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //类型选择
    arrayCategory: [],
    indexCategory: 0,

    //阶段选择
    arraySchedule: [],
    indexSchedule: 0,

   
    //排序方式选择：
    multiArray: [['热度', '时间'], ['降序', '升序']],//二维数组，长度是多少是几列
    multiIndex: [0, 0],

    region: ['河南省', '新乡市'],
    customItem: '全部',

    //省：
    province:'',
    //市：
    city: '',
    //类别：
    gongchengleibie: '',
    //阶段：
    jieduan: '',
    //每页显示的行数：
    pagesize: 1,
    //页码（从1开始）：
    p: 5,
    //排序方式：
    paixu: '',
    //升序或降序：
    order: '',

  arrayProject:[
    
      {
        id: 1,
        title: '正在进行的项目aaa',
        address:'河南省新乡市红旗区',
        Category: '全部类别',
        Schedule:'正在进行时',
        introduction:'此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
      },
      {
        id: 2,
        title: '正在进行的项目bb',
        address: '河南省新乡市红旗区',
        Category: '全部类别',
        Schedule: '正在进行时',
        introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
      }, {
        id: 3,
        title: '正在进行的项目ccc',
        address: '河南省新乡市红旗区',
        Category: '全部类别',
        Schedule: '正在进行时',
        introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
    }, {
      id: 4,
      title: '正在进行的项目444',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    },
    {
      id: 5,
      title: '正在进行的项目55555',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    }, {
      id: 6,
      title: '正在进行的项目66666',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    }
    
  ]

  },

  //改变类型选择器
  bindPickerChangeCategory: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexCategory: e.detail.value,
      gongchengleibie: this.data.arrayCategory[e.detail.value].name
    })
    console.log('类别：', this.data.gongchengleibie)
  },

  //改变阶段选择
  bindPickerChangeSchedule: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSchedule: e.detail.value,
      jieduan: this.data.arraySchedule[e.detail.value].name
    })
    console.log('阶段：', this.data.jieduan)

  },


  //改变排序方式选择器
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      paixu: this.data.multiArray[0][e.detail.value[0]],
      orser: this.data.multiArray[1][e.detail.value[1]]
    })
    console.log('排序规则：', this.data.paixu,'排序方式：',this.data,order)

  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    // if (e.detail.column == 0)
    //   this.setData({
    //     multiIndex: e.detail.value,
    //     paixu: this.data.multiArray[e.detail.column][e.detail.value]
    //   })
    // else
    //   this.setData({
    //     multiIndex: e.detail.value,
    //     orser: this.data.multiArray[e.detail.column][e.detail.value]
    //   })

  },


//改变地区选择器
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      province: this.data.region[0],
      city: this.data.region[1]
    })
    console.log('province:', this.data.province, 'city:', this.data.city)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // test :[],
  onLoad: function (options) {
    var mythis = this;
    wx.request({
      url: app.globalData.host + 'index.php/Home/Service/list_gongchengleibie',
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        mythis.setData({ //这里是修改data的值  
        arrayCategory: res.data //test等于服务器返回来的数据  
        });
        console.log(mythis.data.arrayCategory)
      },
      fail: function (res) {
        console.log(res);
      }
    });
    wx.request({
      url: app.globalData.host + 'index.php/Home/Service/list_jieduan',
      method: 'post',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        mythis.setData({ //这里是修改data的值  
          arraySchedule: res.data //test等于服务器返回来的数据  
        });
        console.log(mythis.data.arraySchedule)
      },
      fail: function (res) {
        console.log(res);
      }
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

  onchange:function(){
    wx.request({
      url: app.globalData.host + 'index.php/Home/Service/code2session/code/' + code,
      success: res => {
        login2(res.data);
      }
    })
  }
})


/*
ganggou.e-notice.cn/index.php/Service/getproinfo
参数： provice 省份    city 城市    gongchengleibie工程类别    jieduan 工程阶段   pagesize每次请求返回的行数   p页码
监听滚动事件，到底部的时候自动发起请求，如果返回的数组为空，就提示一下

排序方式 两个，按发布时间，查看次数
排序方式order:faburiqi(发布日期)|viewcount(查看次数) 升序或者降序:order:asc|desc
省：province
市：city
类别：gongchengleibie
阶段：jieduan
每页显示的行数：pagesize
页码（从1开始）：p
排序方式：paixu
升序或降序：order


类别：http://ganggou.e-notice.cn/index.php/Home/Service/list_gongchengleibie
[{"id":"1","name":"\u6c61\u6c34\u5904\u7406","deleted":"0","ddate":null},{"id":"2","name":"\u5de5\u4e1a\u5efa\u7b51","deleted":"0","ddate":null},{"id":"3","name":"\u4f4f\u5b85\u793e\u533a","deleted":"0","ddate":null},{"id":"4","name":"\u9152\u5e97\u670d\u52a1","deleted":"0","ddate":null},{"id":"5","name":"\u5546\u4e1a\u7efc\u5408","deleted":"0","ddate":null},{"id":"6","name":"\u884c\u653f\u529e\u516c","deleted":"0","ddate":null},{"id":"7","name":"\u536b\u751f\u533b\u7597","deleted":"0","ddate":null},{"id":"8","name":"\u6587\u5316\u4f53\u80b2","deleted":"0","ddate":null},{"id":"9","name":"\u5c55\u89c8\u89c2\u6f14","deleted":"0","ddate":null},{"id":"10","name":"\u56ed\u6797\u666f\u89c2","deleted":"0","ddate":null},{"id":"11","name":"\u5e02\u653f\u9053\u8def","deleted":"0","ddate":null},{"id":"12","name":"\u4ea4\u901a\u8fd0\u8f93","deleted":"0","ddate":null},{"id":"13","name":"\u516c\u7528\u5efa\u7b51","deleted":"0","ddate":null},{"id":"14","name":"\u73af\u4fdd\u8282\u80fd","deleted":"0","ddate":null},{"id":"15","name":"\u519c\u4e1a\u6c34\u5229","deleted":"0","ddate":null},{"id":"16","name":"\u7279\u79cd\u5de5\u7a0b","deleted":"0","ddate":null}]


阶段：http://ganggou.e-notice.cn/index.php/Home/Service/list_jieduan
[{"id":"1","name":"\u5de5\u7a0b\u7b79\u5907","deleted":"0","ddate":null},{"id":"2","name":"\u52d8\u5bdf\u8bbe\u8ba1","deleted":"0","ddate":null},{"id":"3","name":"\u4e3b\u4f53\u65bd\u5de5","deleted":"0","ddate":null},{"id":"4","name":"\u8bbe\u5907\u5b89\u88c5","deleted":"0","ddate":null},{"id":"5","name":"\u88c5\u9970\u88c5\u4fee","deleted":"0","ddate":null},{"id":"6","name":"\u56ed\u6797\u666f\u89c2","deleted":"0","ddate":null},{"id":"7","name":"\u5b8c\u5de5","deleted":"0","ddate":null},{"id":"8","name":"\u5176\u5b83","deleted":"0","ddate":null}]



*/

// Page({
//   data: {
//     array: ['美国', '中国', '巴西', '日本'],
//     objectArray: [
//       {
//         id: 0,
//         name: '美国'
//       },
//       {
//         id: 1,
//         name: '中国'
//       },
//       {
//         id: 2,
//         name: '巴西'
//       },
//       {
//         id: 3,
//         name: '日本'
//       }
//     ],
//     index: 0,
//     multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
//     objectMultiArray: [
//       [
//         {
//           id: 0,
//           name: '无脊柱动物'
//         },
//         {
//           id: 1,
//           name: '脊柱动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '扁性动物'
//         },
//         {
//           id: 1,
//           name: '线形动物'
//         },
//         {
//           id: 2,
//           name: '环节动物'
//         },
//         {
//           id: 3,
//           name: '软体动物'
//         },
//         {
//           id: 3,
//           name: '节肢动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '猪肉绦虫'
//         },
//         {
//           id: 1,
//           name: '吸血虫'
//         }
//       ]
//     ],
//     multiIndex: [0, 0, 0],
//     date: '2016-09-01',
//     time: '12:01',
//     region: ['广东省', '广州市'],
//     customItem: '全部'
//   },
//   bindPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },
//   bindMultiPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       multiIndex: e.detail.value
//     })
//   },
//   bindMultiPickerColumnChange: function (e) {
//     console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
//     var data = {
//       multiArray: this.data.multiArray,
//       multiIndex: this.data.multiIndex
//     };
//     data.multiIndex[e.detail.column] = e.detail.value;
//     switch (e.detail.column) {
//       case 0:
//         switch (data.multiIndex[0]) {
//           case 0:
//             data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
//             data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//             break;
//           case 1:
//             data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
//             data.multiArray[2] = ['鲫鱼', '带鱼'];
//             break;
//         }
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         break;
//       case 1:
//         switch (data.multiIndex[0]) {
//           case 0:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['蛔虫'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蚂蚁', '蚂蟥'];
//                 break;
//               case 3:
//                 data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
//                 break;
//               case 4:
//                 data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
//                 break;
//             }
//             break;
//           case 1:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['鲫鱼', '带鱼'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['青蛙', '娃娃鱼'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
//                 break;
//             }
//             break;
//         }
//         data.multiIndex[2] = 0;
//         console.log(data.multiIndex);
//         break;
//     }
//     this.setData(data);
//   },
//   bindDateChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       time: e.detail.value
//     })
//   },
//   bindRegionChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       region: e.detail.value
//     })
//   }
// })