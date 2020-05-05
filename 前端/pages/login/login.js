// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    code:'',
    iscode:null,
    codename:'获取'
  },
  
  //获取input输入框的值
  getPhoneValue:function(e) {
    this.setData({
      phone:e.detail.value
    })
  },
  getCodeValue:function(e) {
    this.setData({
      code:e.detail.value
    })
  },
  getCode:function() {
    var a = this.data.phone;
    var _this = this;
    var myphone = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/
    if (this.data.phone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else if (!myphone.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else {
      wx.request({
        data:{},
        url: '接口地址',
        success(res) {
          console.log(res.data.data)
          _this.setData({
            iscode:res.data.data
          })
          var num = 61;
          var timer = setInterval(function() {
            num--;
            if (num <= 0) {
              clearInterval(timer);
              _this.setData({
                codename:'重新发送',
                disabled:false
              })
            }
            else {
              _this.setData({
                codename:num + 's'
              })
            }
          },1000)
        }
      })
    }
  },
  //获取验证码
  getVerificationCode() {
    this.getCode();
    var _this = this;
    _this.setData({
      disabled:true
    })
  },
  //登录
  login_btn:function() {
    var myphone = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/
    if (this.data.phone == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else if (!myphone.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.code == '') {
      wx.showToast({
        title: '验证码不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else {
      wx.setStorageSync('phone', this.data.phone);
      wx.switchTab({
        url: '/pages/fixerempty/fixerempty',
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
      wx.hideHomeButton({
        success:function() {
          console.log('hidehomebutton:success');
        },
        fail:function() {
          console.log('hidehomebutton:fail');
        },
        complete:function() {
          console.log('hidehomebutton:complete');
        },
      })
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