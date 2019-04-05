import wepy from "wepy"
import verify from "./verify"
import db from "./db"
import helper from "./helper"
import toast from "./toast"
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

const AUTH_URL = api.service.getOpenid
const GET_OPENID_GUID = "23a9f532-9725-40df-96df-84b52d14cdf3"

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
  httpLogin(method,url,data, cb, opts = {}){ // 校验登录状态

    if(!db.Get('token')){
      // 没有拿到token 获取用户信息
      this.httpGetOpenid(fn) 
    }else { // 获取之后的回调函数
      if(!cb) cb = function(){}
      if(!db.Get('token')){ // 容错提醒
        toast.showToast("服务器开小差，请退出小程序重试~")
      }else{
        this.http(method,url,data,cb,opts = {
          header:{
            'Token': db.Get('token') || ""
          }
        })
      }
    }
  },
  httpGetJY(url, data, cb, opts = {}){
    this.httpLogin("GET", url, data, cb, opts)
  },
  httpPostJY(url, data, cb, opts = {}){
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
    wepy.login({
      success(res) {
        if (res.code) {
          console.log("res.code",res)
          // that.httpGet(AUTH_URL+res.code,{},function(data){
          //   console.log("进入到login的阶段",data)
          //   db.Set("token","")
          //   cb && cb()
          // },{
          //   header:{
          //     "Token":GET_OPENID_GUID
          //   }
          // })
        }
      },
      fail(){
        console.log("发生了一点错误的信息")
      }
    })
  }

}

export default request
