// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DialogModal1:true,
    isuser:app.data.isuser,
    user_state:app.data.user_state,
    fixer_state:app.data.fixer_state,

    button_isuse:false,                    //用户按钮是否禁用
    phone:'19979611109',
    QQ:'1322625047',
    imgArray:['https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
    'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
    'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
  ],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    steps: [

      {
        text: '2020-2-2 10:20',
        desc: '订单创建'
      },
      {
        text: '2020-2-2 10:20',
        desc: '接单'
      },
      {
        text: '2020-2-2 10:20',
        desc: '订单完成'
      }
    ]
  },

  detail:function() {
    wx.navigateTo({
      url: '/pages/fixdetail/fixdetail',
    })
  },
  previewImg:function (event) {
    console.log(event.currentTarget.dataset.src)
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list

    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
  })


  },

  repair:function() {
    wx.navigateTo({
      url: '/pages/fixform/fixform',
    })
  },

  copy:function(e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success:function(res) {
        wx.getClipboardData({
          complete: (res) => {
            wx.showToast({
              title: '复制成功',
              icon:'success',
              duration:1500
            })
          },
        })
      }
    })
  },

  confirm_finish:function() {
    wx.showModal({
      cancelColor: 'cancelColor',
      content:'是否确认完成',
      success(res) {
        if(res.confirm) {
          console.log('用户点击确认'),
          wx.showToast({
            title:'订单维修完成',
            icon:'success',
            duration:1500
          })
        }
        else if(res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
    this.DialogModal1 = true
    console.log(this.DialogModal1)
  },

  cancel:function() {
    wx.showModal({
      cancelColor: 'cancelColor',
      content:'是否撤销订单',
      success(res) {
        if(res.confirm) {
          console.log('用户点击确认'),
          wx.showToast({
            title:'订单已撤销',
            icon:'success',
            duration:1500
          })
        }
        else if(res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  look:function(){
    wx.navigateTo({
      url: '/pages/orderdetail/orderdetail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.fixer_state)
    this.setData({
      fixer_state:options.fixer_state,
      user_state:options.user_state
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