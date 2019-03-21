import wepy from "wepy"
import verify from "./verify"
export const request = function (method, url, data, cb, opts) {

    // 默认值和空判断
    opts = opts || {}

    if (!verify.isStr(method) || !methodList.has(method.toLowerCase())) {
        method = "get"
    }

    wepy.request({
        method,
        url,
        data,
        dataType: opts.dataType || "json",
        responseType: opts.responseType || "text",
        header: opts.header || {},
        success(result) {
            cb && cb(true, result)
        },
        fail(result) {
            cb && cb(false, result)
        },
        complete() {
            if (opts.finally) {
                cb && cb()
            }
        }
    })
}

const methodList = new Set(["options", "get", "post", "head", "put", "delete", "trace", "connect"])


export const httpGet = (url, data, cb, opts) => request("get", url, data, cb, opts)
export const httpPost = (url, data, cb, opts) => request("psot", url, data, cb, opts)
