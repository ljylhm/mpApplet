import wepy from "wepy"
import verify from "./verify"
import db from "./db"
import helper from "./helper"
import api from "./api"

const baseInfo = {
  appid: "wx020ed5b1ec4361c1",
  secret: "8e69a523943daff4a253d6a57a7c0cc1",
  grant_type: "authorization_code"
}

let defineOpts = {
  showLoading: "true",
  loadMessage: "加载中..."
}

const AUTH_URL = api.getOpenid

const request = {
  http(method, url, data, cb, opts = {}) {

    opts = Object.assign({}, defineOpts, opts)

    if (opts.showLoading) {
      wepy.showLoading({
        title: opts.loadMessage || "加载中..."
      })
    }
    wepy.request({
      method: method || 'GET',
      url: url,
      data: data,
      header: opts.header || {},
      success(data) {
        wepy.hideLoading()
        cb && cb(true, data.data)
      },
      fail(error) {
        wepy.hideLoading()
        cb && cb(false, error)
      },
      complete() {
        opts.complete && opts.complete()
      }
    })
  },
  httpLogin(url, data, cb, opts = {}){
    // 校验登录状态
    if(!db.Get('token')){
      helper.toOtherPage("auth",{

      })
    }else{

    }

    let fn = function(data){ // 获取状态后的回调
      cb && cb()
    }
    this.http(AUTH_URL,data,cb,opts = {
      header:{
        'Authorization': db.Get('token') || ""
      }
    })
  },
  httpGetJY(){
    this.httpLogin("GET", url, data, cb, opts)
  },
  httpPostJY(){
    this.httpLogin("POST", url, data, cb, opts)
  },
  httpGet(url, data, cb, opts = {}) {
    this.http("GET", url, data, cb, opts)
  },
  httpPost(url, data, cb, opts = {}) {
    this.http("POST", url, data, cb, opts)
  },

  httpGetOpenid (cb){ // 获取openid&&token的方法
    let that = this
    wepy.login().then(res=>{
      console.log("进入到login的阶段")
      if (res.code) {
        that.httpGet(AUTH_URL,{
          code:res.code
        },function(){
          db.Set("token","")
          cb && cb()
        })
      }
    }).error(e=>{
      console.log("请求发生了一点错误...")
    })
  }

}

export default request
