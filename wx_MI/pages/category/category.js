// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate_nav_list: [
      { name: "新品", id: "new" },
      { name: "手机", id: "phone" },
      { name: "电视", id: "tv" },
      { name: "电脑", id: "laptop" },
      { name: "家电", id: "appliance" },
      { name: "路由", id: "router" },
      { name: "智能", id: "smart" },
      { name: "儿童", id: "kids" },
      { name: "灯具", id: "lignts" },
      { name: "电源", id: "adapter" },
      { name: "耳机", id: "headset" },
      { name: "音箱", id: "voicebox" },
      { name: "生活", id: "life" },
      { name: "服务", id: "service" },
      { name: "米粉卡", id: "card" }
    ],
    curIndex: 0,
    category: [
      {
        id: "new",
        banner: "http://127.0.0.1:3100/img/fenlei/1.jpg",
        cate_name: "新品",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/2.png",
          item_name: "小米8"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/3.png",
          item_name: "黑鲨游戏手机"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/4.png",
          item_name: "小米8SE"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/5.png",
          item_name: "小米MIX2S"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/6.png",
          item_name: "小米MIX2"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/7.png",
          item_name: "小米Note3"
        }
        ]
      },
      {
        id: "phone",
        banner: "http://127.0.0.1:3100/img/fenlei/8.jpg",
        cate_name: "手机",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/9.png",
          item_name: "小米MIX2S"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/10.png",
          item_name: "黑鲨游戏手机"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/11.jpg",
          item_name: "红米S2"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/12.png",
          item_name: "小米6X"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/13.png",
          item_name: "小米MIX2"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/14.png",
          item_name: "小米Note3"
        }
        ]
      },
      {
        id: "tv",
        banner: "http://127.0.0.1:3100/img/fenlei/15.jpg",
        cate_name: "电视",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/16.png",
          item_name: "32-40英寸"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/17.jpg",
          item_name: "43英寸"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/18.png",
          item_name: "49-50英寸"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/19.png",
          item_name: "55英寸"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/20.png",
          item_name: "65英寸"
        }
        ]
      },
      {
        id: "laptop",
        banner: "http://127.0.0.1:3100/img/fenlei/21.webp",
        cate_name: "电脑",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/22.jpg",
          item_name: "游戏本"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/23.jpg",
          item_name: "笔记本15.6''"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/24.png",
          item_name: "笔记本13.3''"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/25.png",
          item_name: "笔记本12.5''"
        }
        ]
      },
      {
        id: "appliance",
        banner: "http://127.0.0.1:3100/img/fenlei/26.jpg",
        cate_name: "家电",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/27.png",
          item_name: "电饭煲"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/28.png",
          item_name: "净水器"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/29.png",
          item_name: "净化器"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/30.png",
          item_name: "扫地机器人"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/31.jpg",
          item_name: "米家投影仪"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/32.png",
          item_name: "电水壶"
        }
        ]
      },
      {
        id: "router",
        banner: "http://127.0.0.1:3100/img/fenlei/33.webp",
        cate_name: "电脑",
        cate_list: [{
          item_img: "http://127.0.0.1:3100/img/fenlei/34.jpg",
          item_name: "游戏本"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/35.jpg",
          item_name: "笔记本15.6''"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/36.png",
          item_name: "笔记本13.3''"
        },
        {
          item_img: "http://127.0.0.1:3100/img/fenlei/37.png",
          item_name: "笔记本12.5''"
        }
        ]
      }
    ],
  },

  switchCategory(e) {
    // console.log(e.currentTarget.dataset.id);
    const curIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    this.setData({
      toView: e.currentTarget.dataset.id,
      curIndex
    });
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

  }
})