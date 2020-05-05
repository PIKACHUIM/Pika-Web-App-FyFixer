Page({

  /*页面的初始数据*/
  data: {
    loginDataPnum:'',
    loginDataCode:'',
    iscode:null,
    loginNameCode:'获取'
  },
  //获取input输入框的值
  loginGetPhoneValue:function(e) {
    this.setData({
      loginDataPnum:e.detail.value
    })
  },
  getCodeValue:function(e) {
    this.setData({
      code:e.detail.value
    })
  },
  getCode:function() {
    var a = this.data.loginDataPnum;
    var _this = this;
    var myphone = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/
    if (this.data.loginDataPnum == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else if (!myphone.test(this.data.loginDataPnum)) {
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
    if (this.data.loginDataPnum == '') {
      wx.showToast({
        title: '手机号不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else if (!myphone.test(this.data.loginDataPnum)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon:'none',
        duration:1500
      })
      return false;
    }
    if (this.data.loginDataCode == '') {
      wx.showToast({
        title: '验证码不能为空',
        icon:'none',
        duration:1500
      })
      return false;
    }
    else {
      wx.setStorageSync('phone', this.data.loginDataPnum);
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


})