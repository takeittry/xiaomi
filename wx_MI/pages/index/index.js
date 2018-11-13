// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbolist:[],
    navlist:[],
    activitylist:[],

    blocklist: [{
        id: 5,
        img_url: "http://127.0.0.1:3100/img/index/4.jpg",
        section: [{
          id: 4,
          img_url: "http://127.0.0.1:3100/img/index/5.jpg",
          title: "红米5A,轻巧长续航",
          desp: "高通骁龙处理器",
          meta: "569元",
          discount: "599元",
          is_new: false,
          on_sale: true
        },
        {
          id: 5,
          img_url: "http://127.0.0.1:3100/img/index/6.webp",
          title: "红米5,4GB+32GB",
          desp: "千元全面屏",
          meta: "999元",
          discount: "1099元",
          is_new: false,
          on_sale: true
        },
        {
          id: 1,
          img_url: "http://127.0.0.1:3100/img/index/7.jpg",
          title: "红米Note5,4GB+64GB",
          desp: "1.4μm大像素AI双摄",
          meta: "1399元",
          discount: "",
          is_new: false
        },
        {
          id: 6,
          img_url: "http://127.0.0.1:3100/img/index/8.jpg",
          title: "红米自拍手机S2",
          desp: "1600万像素自拍手机",
          meta: "999元",
          discount: "",
          is_new: true
        }
        ]
      },
      {
        id: 7,
        img_url: "http://127.0.0.1:3100/img/index/9.jpg",
        section: [{
          id: 8,
          img_url: "http://127.0.0.1:3100/img/index/10.jpg",
          title: "小米5X变焦双摄",
          desp: "5.5''大屏轻薄全金属",
          meta: "1299元",
          discount: "1499元",
          is_new: false,
          on_sale: true
        },
        {
          id: 9,
          img_url: "http://127.0.0.1:3100/img/index/11.webp",
          title: "小米MIX2 全陶瓷 黑色",
          desp: "Unibody 全陶瓷",
          meta: "3699元",
          discount: "4699元",
          is_new: false,
          on_sale: true
        },
        {
          id: 10,
          img_url: "http://127.0.0.1:3100/img/index/12.jpg",
          title: "红米Note5,6GB+64GB",
          desp: "1.4μm大像素AI双摄",
          meta: "1699元",
          discount: "",
          is_new: false
        },
        {
          id: 11,
          img_url: "http://127.0.0.1:3100/img/index/13.webp",
          title: "小米Max2 大屏大电量",
          desp: "6.44''大屏,5300mAh大电量",
          meta: "1299元",
          discount: "1399元",
          is_new: false,
          on_sale: true
        }
        ]
      },
      {
        id: 31,
        img_url: "http://127.0.0.1:3100/img/index/14.jpg",
        section: [{
          id: 200,
          img_url: "http://127.0.0.1:3100/img/index/15.webp",
          title: "TS防蓝光护目镜",
          desp: "35%蓝光阻隔率,超轻材质",
          meta: "99元",
          discount: "",
          is_new: false
        },
        {
          id: 201,
          img_url: "http://127.0.0.1:3100/img/index/16.webp",
          title: "米家声波电动牙刷",
          desp: "高效能磁悬浮声波马达",
          meta: "199元",
          discount: "",
          is_new: false
        },
        {
          id: 66,
          img_url: "http://127.0.0.1:3100/img/index/17.webp",
          title: "小米智能摄像1S",
          desp: "1080高清画质,安全看家",
          meta: "99元",
          discount: "",
          is_new: false
        },
        {
          id: 202,
          img_url: "http://127.0.0.1:3100/img/index/18.jpg",
          title: "尼龙偏光太阳镜",
          desp: "尼龙偏光镜片",
          meta: "199元",
          discount: "",
          is_new: false
        }
        ]
      },
      {
        id: 67,
        img_url: "http://127.0.0.1:3100/img/index/19.jpg",
        section: [{
          id: 68,
          img_url: "http://127.0.0.1:3100/img/index/20.png",
          title: "小米小爱音箱mini",
          desp: "能听会说的人工智能音箱",
          meta: "169元",
          discount: "",
          is_new: true
        },
        {
          id: 69,
          img_url: "http://127.0.0.1:3100/img/index/21.jpg",
          title: "小米蓝牙项圈耳机",
          desp: "项圈式设计/轻量化亲肤材质",
          meta: "299元",
          discount: "",
          is_new: true
        },
        {
          id: 70,
          img_url: "http://127.0.0.1:3100/img/index/22.jpeg",
          title: "米家LED吸顶灯",
          desp: "用光线,还原理想生活",
          meta: "399元",
          discount: "",
          is_new: true
        },
        {
          id: 71,
          img_url: "http://127.0.0.1:3100/img/index/23.jpg",
          title: "小米路由器4",
          desp: "双频双核 更快更稳定",
          meta: "199元",
          discount: "",
          is_new: true
        }
        ]
      },
      {
        id: 72,
        img_url: "http://127.0.0.1:3100/img/index/24.jpg",
        section: [{
          id: 73,
          img_url: "http://127.0.0.1:3100/img/index/25.webp",
          title: "小米AI音箱",
          desp: "能播音乐、讲故事、查路况、设闹钟、还能控制智能设备",
          meta: "299元",
          discount: "",
          is_new: false
        },
        {
          id: 74,
          img_url: "http://127.0.0.1:3100/img/index/26.webp",
          title: "小米运动蓝牙耳机mini",
          desp: "迷你机身，小如蚕豆",
          meta: "169元",
          discount: "",
          is_new: false
        },
        {
          id: 74,
          img_url: "http://127.0.0.1:3100/img/index/27.webp",
          title: "小米路由器3A",
          desp: "一台路由器满足全家上网需求",
          meta: "139元",
          discount: "",
          is_new: false
        },
        {
          id: 75,
          img_url: "http://127.0.0.1:3100/img/index/28.webp",
          title: "小米空气净化器2S",
          desp: "经典再升级,好空气看得见",
          meta: "899元",
          discount: "",
          is_new: true
        }
        ]
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3100/index/lunbo',
      method:"get",
      success:(res)=>{
        this.setData({
          lunbolist:res.data.body
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3100/index/nav',
      method: "get",
      success: (res) => {
        this.setData({
          navlist: res.data.body
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3100/index/activity',
      method: "get",
      success: (res) => {
        this.setData({
          activitylist: res.data.body
        })
      }
    })
    // wx.request({
    //   url: 'http://127.0.0.1:3100/index/blocklist',
    //   method: "get",
    //   success: (res) => {
    //     console.log(res.data.body);
    //     this.setData({
    //       blocklist: res.data.body
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'http://127.0.0.1:3100/index/goodslist',
    //   method: "get",
    //   success: (res) => {
    //     console.log(res.data.body);
    //     this.setData({
    //       goodslist: res.data.body
    //     })
    //   }
    // })
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