// pages/about/about.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    isuser:app.data.isuser,
    name:app.data.name,
    sex:app.data.sex,
    phone:app.data.phone
  },

  history:function() {
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },

  personinfo:function() {
    wx.navigateTo({
      url: '/pages/personinfo/personinfo',
    })
  },

  question:function() {
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },

  program:function() {
    wx.navigateTo({
      url: '/pages/program/program',
    })
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.namedata)
    this.setData({
      name:options.namedata,
      phone:options.phonedata,
      sex:options.sexdata
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
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})