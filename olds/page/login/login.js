Page({
  data: {
    options: {
      appId: 'b4f11125fb26b4fd3010ba2146cf36a7',
      style: 'popup',
      customStyle: {
        bgColor: '#cccc00'
      },

    },
    captchaShow: false,
    captchaReload: false
  },

  login: function () {
    // captchaReload用来重置验证码
    this.setData({
      captchaReload: true
    })
  },

  // 验证码成功回调
  captchaSuccess: function (token) {
    console.log('token:', token)
  },

  // 验证码关闭回调
  captchaHide: function () {
    console.log('captcha_hide')
    this.setData({
      captchaShow: false
    })
  }
})