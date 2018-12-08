Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "东北",
        ishaveChild: true,

        children:
          [
            {
              child_id: 1,
              name: '黑龙江省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542099499937&di=ead61e47e20ae5d5f4e66cc1f3b3fe96&imgtype=0&src=http%3A%2F%2Fimg.99114.com%2Fgroup1%2FM00%2FF2%2FC5%2FwKgGTFVDM12ARjCiAABuOAcqtuk748_600_600.jpg"
            },
            {
              child_id: 2,
              name: '吉林省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542099441193&di=9a329cadc89b3732ee86623ee23ec9f4&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131221%2F0033034038280708_b.jpg"
            },
            {
              child_id: 3,
              name: '辽宁省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542694313&di=27f1bcd033bb015a6b717cbd6cc1bf6d&imgtype=jpg&er=1&src=http%3A%2F%2Fnews.sina.com.cn%2Fchina%2F2000-05-25%2F1-1-92506_052502wf.jpg"
            },
          ]
      },
      {
        cate_id: 2,
        cate_name: "华东",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '上海市',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100040512&di=b7e86ffde77f823164b9e986d276c77d&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F835335b2gx6CqYwC41T55%26690"
            },
            {
              child_id: 2,
              name: '江苏省',
              image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1932531831,1585044763&fm=15&gp=0.jpg"
            },
            {
              child_id: 3,
              name: '浙江省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100152701&di=aae3e6a9ae70126dc7cadfb28927dccf&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fbmiddle%2F4aa47f19f8b418508233a"
            },
            {
              child_id: 4,
              name: '安徽省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100174166&di=4bf54993afdc52671192c7a194173628&imgtype=0&src=http%3A%2F%2Fi1.ymfile.com%2Fuploads%2Falbum%2F01%2F01%2Fm_x2_1.1420106108_972_730_189860.jpg"
            },
            {
              child_id: 5,
              name: '福建省',
              image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1929582175,1116429323&fm=26&gp=0.jpg"
            },
            {
              child_id: 6,
              name: '江西省',
              image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1531756948,465409934&fm=26&gp=0.jpg"
            },
            {
              child_id: 7,
              name: '山东省',
              image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1972058684,104483557&fm=15&gp=0.jpg"
            },
            {
              child_id: 8,
              name: '台湾省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100396971&di=7b314d9bc3eccc06ac24f3e8b59d597e&imgtype=0&src=http%3A%2F%2Fimgsa.baidu.com%2Ffso_article%2Fpic%2Fitem%2F29381f30e924b899b237b5c466061d950b7bf6c7.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "华北",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '北京市',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100431385&di=ebe64f75e5638ebef2e7ee902abfc0ea&imgtype=0&src=http%3A%2F%2Fpic25.photophoto.cn%2F20121223%2F0040039413899435_b.jpg"
            },
            {
              child_id: 2,
              name: '天津市',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695173&di=c5062c4f0fc30d129ab06185083e2961&imgtype=jpg&er=1&src=http%3A%2F%2Fgss0.baidu.com%2F9fo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fw%3D1000%2Fsign%3Da51262a12c2dd42a5f0905ab330b5ab5%2F8c1001e93901213fca3679145de736d12e2e95f4.jpg"
            },
            {
              child_id: 3,
              name: '山西省',
              image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695232&di=2358a27ce18dd9a034cc52d9a3599888&imgtype=jpg&er=1&src=http%3A%2F%2Fpic18_2.qiyeku.com%2Fqiyeku_pic%2F2018%2F6%2F6%2Fcengqiu0416%2Fproduct%2Fproduct_pic%2Fimage%2F2018_07_30%2F20180730111046572.jpg"
            },
            {
              child_id: 4,
              name: '河北省',
              image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3740537104,2724122892&fm=26&gp=0.jpg"
            },
            {
              child_id: 5,
              name: '内蒙古自治区',
              image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1008301319,1733795681&fm=26&gp=0.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "华中",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '河南省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100613160&di=1338e881eb89049787939eaa5b72f0bc&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2Fdz72Lg%3D7Dm1AT9ef7Nzz6Pf4b4cYA4cyK1%3DeGdOKQGC1O1527811256686.jpg"
          },
          {
            child_id: 2,
            name: '湖北省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100662802&di=9a3aa3dee2a8a49ec40f2ab17fb4e68f&imgtype=0&src=http%3A%2F%2Fimg01.fuhai360.com%2Fxyjzgjg%2F201704%2F201704141528180389.png"
          },
          {
            child_id: 3,
            name: '湖南省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100697972&di=5f003799925a6342e54e09f29e13a301&imgtype=0&src=http%3A%2F%2Fpigimg.zhongso.com%2Fspace%2Fgallery%2F2012%2F12%2F14%2F15%2Fb2b_20121114035641362858_480.jpg"
          },
        ]
      },
      {
        cate_id: 5,
        cate_name: "华南",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '广东省',
            image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3854541214,2521420700&fm=200&gp=0.jpg"
          },
          {
            child_id: 2,
            name: '广西壮族自治区',
            image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1062248336,1466071053&fm=26&gp=0.jpg"
          },
          {
            child_id: 3,
            name: '海南省',
            image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2497215133,1011937160&fm=26&gp=0.jpg"
          },
          {
            child_id: 4,
            name: '澳门特别行政区',
            image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1507294286,1415284743&fm=26&gp=0.jpg"
          },
          {
            child_id: 5,
            name: '香港特别行政区',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542100921038&di=9739e932076397bbeae8030bf0a2dbe1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180527%2F49fcb0e3e2814538a8e6fb118fccf7d7.jpeg"
          },

        ]
      },
      {
        cate_id: 6,
        cate_name: "西南",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '重庆市',
            image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3176561788,1892844348&fm=26&gp=0.jpg"
          },
          {
            child_id: 2,
            name: '四川省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542695744&di=c8e29907418018c1a5b385f673e8d855&imgtype=jpg&er=1&src=http%3A%2F%2Fpic19.huitu.com%2Fres%2F20140625%2F558585_20140625085932775380_1.jpg"
          },
          {
            child_id: 3,
            name: '贵州省',
            image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2831980621,3857962182&fm=26&gp=0.jpg"
          },
          {
            child_id: 4,
            name: '云南省',
            image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365356143,987223302&fm=200&gp=0.jpg"
          },
          {
            child_id: 5,
            name: '西藏自治区',
            image: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1737225626,2675868177&fm=26&gp=0.jpg"
          },

        ]
      },
      {
        cate_id: 7,
        cate_name: "西北",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '陕西省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542101173662&di=a89ade9fbf32d100a2d2d964186220aa&imgtype=0&src=http%3A%2F%2Fy1.ifengimg.com%2Fbdaaf9641cdb546a%2F2012%2F0906%2Frdn_5047e2c0b04b3.jpg"
          },
          {
            child_id: 2,
            name: '甘肃省',
            image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3079337674,741847564&fm=26&gp=0.jpg"
          },
          {
            child_id: 3,
            name: '青海省',
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542101318431&di=1b7fc6f385f9d90dc729f7143e9de380&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd62a6059252dd42af7475d36093b5bb5c8eab8e5.jpg"
          },
          {
            child_id: 4,
            name: '宁夏回族自治区',
            image: "http://img2.imgtn.bdimg.com/it/u=3666067807,3126099005&fm=26&gp=0.jpg"
          },
          {
            child_id: 5,
            name: '新疆维吾尔族自治区',
            image: "http://img4.imgtn.bdimg.com/it/u=469171843,646388487&fm=26&gp=0.jpg"
          },

        ]
      },
    ],

    curNav: 1,
    curIndex: 0
  },


  test:function()
  {
    wx.navigateTo({
      url: '/pages/friend/chat/chat',
    })
  },

  //事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})
