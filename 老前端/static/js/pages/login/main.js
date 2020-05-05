global.webpackJsonp([2], {
  DZAp: function(t, n, i) {
    "use strict";
    var o = function() {
        var t = this,
          n = t.$createElement,
          i = t._self._c || n;
        return i("div", {
          staticClass: "login-form"
        }, [i("form", {
          attrs: {
            eventid: "3"
          },
          on: {
            submit: t.formSubmit
          }
        }, [i("view", {
          staticClass: "page__bd"
        }, [i("view", {
          staticClass: "weui-cells weui-panel",
          class: {
            active: t.isPanelFocus
          }
        }, [i("inputbox", {
          attrs: {
            label: "手机号",
            name: "username",
            type: "digit",
            maxlength: "11",
            eventid: "0",
            mpcomid: "0"
          },
          on: {
            focus: t.oFocus,
            blur: t.oBlur,
            input: t.cellInput
          }
        }), t._v(" "), i("view", {
          staticClass: "inline"
        }, [i("view", {
          staticStyle: {
            width: "100%"
          }
        }, [i("inputbox", {
          attrs: {
            label: "验证码",
            name: "otpcode",
            type: "digit",
            maxlength: "6",
            eventid: "1",
            mpcomid: "1"
          },
          on: {
            focus: t.oFocus,
            blur: t.oBlur
          }
        })], 1), t._v(" "), i("view", {
          staticClass: "weui-btn-area inline-btn"
        }, [i("button", {
          staticClass: "weui-btn inline",
          attrs: {
            loading: t.otploading,
            disabled: t.otpLoading || 0 != t.otpCountdown,
            eventid: "2"
          },
          on: {
            click: t.getOtp
          }
        }, [t._v(t._s(t.otpBtnText))])], 1)])], 1), t._v(" "), i("view", {
          staticClass: "weui-btn-area"
        }, [i("button", {
          staticClass: "weui-btn",
          attrs: {
            type: "primary",
            formType: "submit",
            size: "default",
            loading: t.submitLoading,
            disabled: t.submitLoading
          }
        }, [t._v("登录")])], 1)])])], 1)
      },
      e = [],
      a = {
        render: o,
        staticRenderFns: e
      };
    n.a = a
  },
  ET02: function(t, n, i) {
    "use strict";
    var o = i("y1bk");
    n.a = {
      props: ["submitLoading", "otpLoading", "otpCountdown"],
      components: {
        inputbox: o.a
      },
      data: function() {
        return {
          isPanelFocus: !1,
          submitLoading: !1,
          cell: "",
          otpLoading: !1,
          otpCountdown: 0
        }
      },
      methods: {
        oFocus: function() {
          this.isPanelFocus = !0, this.$emit("focus")
        },
        oBlur: function() {
          this.isPanelFocus = !1, this.$emit("blur")
        },
        cellInput: function(t) {
          this.cell = t
        },
        getOtp: function() {
          this.$emit("getotp", this.cell)
        },
        formSubmit: function(t) {
          this.$emit("submit", t.mp.detail.value)
        }
      },
      computed: {
        otpBtnText: function() {
          return 0 == this.otpCountdown ? "获取" : this.otpCountdown + "秒"
        }
      }
    }
  },
  GG4c: function(t, n, i) {
    "use strict";
    var o = i("f7pZ"),
      e = i("Bo+9"),
      a = i("UosE"),
      s = i("l3C9"),
      u = i("0qfX");
    n.a = {
      data: function() {
        return {
          fyData: a.a.data,
          apiData: s.a.data,
          editing: !1,
          isSubmitLoading: !1,
          otpCountdown: 0,
          otpLoading: !1,
          backurl: ""
        }
      },
      components: {
        loginform: o.a,
        appfooter: e.a
      },
      methods: {
        redirect: function(t) {
          wx.hideLoading();
          var n = ["/page/login/login", "/pages/tickets/new/main", "/pages/tickets/list/main"];
          wx.reLaunch({
            url: n[t]
          })
        },
        checkUserType: function() {
          s.a.data.basic.staff_id > 0 ? this.redirect(2) : this.redirect(1)
        },
        oFocus: function(t) {
          this.editing = !0
        },
        oBlur: function(t) {
          this.editing = !1
        },
        loginFormSubmit: function(t) {
          var n = this;
          n.$data.isSubmitLoading = !0, a.a.login(t).then(function(t) {
            n.$data.isSubmitLoading = !1, 200 == t.code ? s.a.connect(t.info).then(function(t) {
              a.a.updateInfo(t), n.checkUserType()
            }) : wx.showToast({
              title: "登录失败:" + t.info,
              icon: "none",
              duration: 2e3
            })
          })
        },
        otpSubmit: function(t) {
          var n = this;
          n.$data.otpLoading = !0, s.a.getotp({
            cellnum: t
          }).then(function(t) {
            n.$data.otpLoading = !1;
            var i = 150,
              o = null,
              e = function() {
                if (0 == --i) return clearInterval(o), void(n.otpCountdown = 0);
                n.otpCountdown = i
              };
            o = setInterval(e, 1e3)
          }).catch(function(t) {
            n.$data.otpLoading = !1, console.log(t), wx.showToast({
              title: "获取失败(" + t + ")",
              icon: "none",
              duration: 2e3
            })
          })
        }
      },
      onLoad: function() {
        var t = this;
        a.a.init(), s.a.init(), wx.showLoading({
          title: "登录中",
          mask: !0
        }), u.a.login().then(function(t) {
          return s.a.checkWxCode(t)
        }).then(function(n) {
          wx.hideLoading(), a.a.updateInfo(n), t.checkUserType()
        }).catch(function(t) {
          wx.hideLoading()
        })
      }
    }
  },
  IS4O: function(t, n, i) {
    "use strict";
    var o = function() {
        var t = this,
          n = t.$createElement,
          i = t._self._c || n;
        return i("div", [i("view", {
          class: {
            hide: t.editing
          }
        }, [i("view", {
          staticClass: "weui-cells weui-panel",
          staticStyle: {
            height: "200px"
          }
        }), t._v(" "), i("image", {
          staticClass: "banner",
          attrs: {
            src: "/static/images/index_banner.png",
            mode: "aspectFit"
          }
        })]), t._v(" "), i("loginform", {
          ref: "form",
          attrs: {
            submitLoading: t.isSubmitLoading,
            otpCountdown: t.otpCountdown,
            otpLoading: t.otpLoading,
            eventid: "0",
            mpcomid: "0"
          },
          on: {
            submit: t.loginFormSubmit,
            getotp: t.otpSubmit,
            focus: t.oFocus,
            blur: t.oBlur
          }
        }), t._v(" "), i("appfooter", {
          attrs: {
            mpcomid: "1"
          }
        })], 1)
      },
      e = [],
      a = {
        render: o,
        staticRenderFns: e
      };
    n.a = a
  },
  cosp: function(t, n) {},
  f7pZ: function(t, n, i) {
    "use strict";

    function o(t) {
      i("peKn")
    }
    var e = i("ET02"),
      a = i("DZAp"),
      s = i("ybqe"),
      u = o,
      c = s(e.a, a.a, u, null, null);
    n.a = c.exports
  },
  jT7l: function(t, n, i) {
    "use strict";

    function o(t) {
      i("cosp")
    }
    var e = i("GG4c"),
      a = i("IS4O"),
      s = i("ybqe"),
      u = o,
      c = s(e.a, a.a, u, null, null);
    n.a = c.exports
  },
  peKn: function(t, n) {},
  uvAE: function(t, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = i("5nAL"),
      e = i.n(o),
      a = i("jT7l");
    new e.a(a.a).$mount()
  }
}, ["uvAE"]);