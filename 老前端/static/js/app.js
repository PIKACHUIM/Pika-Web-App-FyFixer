global.webpackJsonp([6], {
  M93x: function (a, n, e) {
    "use strict";
    function t(a) {
      e("pca6")
    }
    var i = e("Mw+1"),
      o = e("ybqe"),
      r = t,
      s = o(i.a, null, r, null, null);
    n.a = s.exports
  },
  "Mw+1": function (a, n, e) {
    "use strict";
    var t = e("d2gY");
    n.a = {
      created: function () { },
      onLaunch: function () {
        var a = wx.getSystemInfoSync();
        wx.reportAnalytics("cold_start", {
          version: t.a.version,
          wx_version: a.version,
          sys_version: a.system,
          client: a.brand + "-" + a.model
        })
      }
    }
  },
  NHnr: function (a, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var t = e("5nAL"),
      i = e.n(t),
      o = e("M93x");
    i.a.config.productionTip = !1,
      o.a.mpType = "app",
      new i.a(o.a).$mount(),
      n.
        default = {
        config: {
          pages: ["^pages/login/main", "pages/tickets/new/main", "pages/tickets/list/main", "pages/tickets/detail/main", "pages/admin/main"],
          window: {
            backgroundTextStyle: "dark",
            navigationBarBackgroundColor: "#fafafa",
            navigationBarTitleText: "飞扬维修",
            navigationBarTextStyle: "black",
            backgroundColor: "#fafafa"
          },
          networkTimeout: {
            request: 5e3,
            downloadFile: 1e4,
            uploadFile: 1e4
          },
          navigateToMiniProgramAppIdList: ["wx8abaf00ee8c3202e"]
        }
      }
  },
  pca6: function (a, n) { }
},
  ["NHnr"]);