//login.js
//获取应用实例
var app = getApp();

Page({
  data: {
    NoticeText: '暂无公告',
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToIndex: function() {
    wx.redirectTo({
      url: '/page/login/login',
    });
  },
  onLoad: function() {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    this.getNotice();
  },
  onShow: function() {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  },
  onReady: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  },
  getNotice:function() {
    var tempthis = this
    wx.request({
      url: 'http://ptest.52pika.iego.net/api/start_get_notice.php',
      data: {
        tocken: '00000000',
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        tempthis.setData({NoticeText:res.data})
      },
      fail: function (res) {
        wx.showModal({
          title: '获取公告失败',
          content: res.data,
        })
      }
    })
  }
});