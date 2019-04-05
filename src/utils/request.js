import wepy from "wepy"
import verify from "./verify"


const baseInfo = {
  appid: "wx020ed5b1ec4361c1",
  secret: "8e69a523943daff4a253d6a57a7c0cc1",
  grant_type: "authorization_code"
}

let defineOpts = {
  showLoading: "true",
  loadMessage: "加载中..."
}

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
  httpGet(url, data, cb, opts = {}) {
    this.http("GET", url, data, cb, opts)
  },
  httpPost(url, data, cb, opts = {}) {
    this.http("POST", url, data, cb, opts)
  },
  httpLogin(sessionKey, cb, opts = {}) {
    this.httpGet(`https://api.weixin.qq.com/sns/jscode2session?appid=${baseInfo.appid}&secret=${baseInfo.secret}&js_code=${sessionKey}&grant_type=authorization_code'`, {}, cb)
  }
}


export default request
