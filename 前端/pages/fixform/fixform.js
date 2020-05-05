// pages/fixform/fixform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    QQ:'',
    pinpai:'',
    xilie:'',
    xinghao:'',
    date:'',
    question:'',
    insuranceindex: null,
    typeindex: null,
    insurance: ['过保','未过保'],
    type: ['平板','笔记本'],
    fileList: []
  },

  // 这个是图片上传组件的回调函数
  // 用法具体文档： https://youzan.github.io/vant-weapp/#/uploader
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      }
    });
  },
  
  // 可选择的输入框
  PickerChange(e) {
    console.log(e);
    var indexname = e.currentTarget.id;
    if(indexname === 'insurance')
    this.setData({
      insuranceindex: e.detail.value
    })
    if(indexname === 'type')
    this.setData({
      typeindex: e.detail.value
    })
  },

  // 自行输入的输入框
  getphone:function(e) {
    this.setData({
      phone:e.detail.value
    })
  },

  getQQ:function(e) {
    this.setData({
      QQ:e.detail.value
    })
  },

  getpinpai:function(e) {
    this.setData({
      pinpai:e.detail.value
    })
  },

  getxilie:function(e) {
    this.setData({
      xilie:e.detail.value
    })
  },

  getxinghao:function(e) {
    this.setData({
      xinghao:e.detail.value
    })
  },

  getdate:function(e) {
    this.setData({
      date:e.detail.value
    })
  },

  getquestion:function(e) {
    this.setData({
      question:e.detail.value
    })
  },

  // 提交按钮
  submit:function() {
    if (this.data.phone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.QQ == '') {
      wx.showToast({
        title: 'QQ号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.insuranceindex == null) {
      wx.showToast({
        title: '请选择设备类型',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.pinpai == '') {
      wx.showToast({
        title: '品牌不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.xilie == '') {
      wx.showToast({
        title: '系列不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.xinghao == '') {
      wx.showToast({
        title: '型号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.date == '') {
      wx.showToast({
        title: '购买日期不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.typeindex == null) {
      wx.showToast({
        title: '请选择报修状态',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.question == '') {
      wx.showToast({
        title: '设备问题不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else{
      wx.showModal({
        cancelColor: 'cancelColor',
        content:'是否确认提交',
        success(res) {
          if(res.confirm) {
            console.log('用户点击确认'),
            wx.showToast({
              title:'提交成功',
              icon:'success',
              duration:1500
            }),
            wx.reLaunch({
              url: '/pages/home/home?user_state=1',
            })
          }
          else if(res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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