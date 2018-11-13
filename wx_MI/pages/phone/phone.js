// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbolist: [],
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
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3100/index/lunbo',
      method: "get",
      success: (res) => {
        this.setData({
          lunbolist: res.data.body
        })
      }
    })
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