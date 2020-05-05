// pages/option/option.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:app.data.name,
    sex:app.data.sex,
    phone:app.data.phone,
    QQ:app.data.QQ,
    email:app.data.email
  },

  getname:function(e) {
    this.setData({
      name:e.detail.value
    })
  },

  getsex:function(e) {
    this.setData({
      sex:e.detail.value
    })
  },

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

  getemail:function(e) {
    this.setData({
      email:e.detail.value
    })
  },

  submit:function(e) {
    if (this.data.name == '') {
      wx.showToast({
        title: '姓名不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.sex == '') {
      wx.showToast({
        title: '性别不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
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
    if (this.data.email == '') {
      wx.showToast({
        title: '邮箱不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else{
      wx.showToast({
        title:'提交成功',
        icon:'success',
        duration:1500
      }),
      wx.reLaunch({
        url: '/pages/about/about?namedata=' + this.data.name +'&phonedata=' + this.data.phone + '&sexdata=' + this.data.sex,
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
  PickerChange(e) {
    console.log(e);
    var indexname = e.currentTarget.id;
    if(indexname === 'interval')
    this.setData({
      intervalindex: e.detail.value
    })
    if(indexname === 'connecttype')
    this.setData({
      connecttypeindex: e.detail.value
    })
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