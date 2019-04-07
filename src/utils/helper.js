import wepy from "wepy"
import verify from "./verify"
const helper = {
    // 默认是取得userinfo的授权
    checkAuth(item,cb){
        if(arguments.length == 1) {
            cb = item
            item = "userInfo"     
        }
        wepy.getSetting({
            success(res) {
              console.log("判断用户是否授权...")
              let sign
              let name = item.indexOf("scope.") == 0 ? item : "scope."+item 
              sign = res.authSetting[name] ? true : false
              cb && cb(sign,res)
            },
            fail(res){
              console.log("用户授权失败...")
              cb && cb(false,res.authSetting || {})
            }
        })
    },
    // 询问是否授权
    getAuth(name = "userInfo",cb){
        if(arguments.length == 1) {
            cb = name
            name = "userInfo"     
        }
        console.log("向用户询问是否授权")
        wepy.authorize({
            scope: name.indexOf("scope.") == 0 ? name : 'scope.'+name,
            success (res) {
                cb && cb(true,res)
            }
          })
    },
    toOtherPage(url,param={}){
        if(!url) return
        let serach = ""
        if(param){
            for(let i in param){
                serach = serach + `${i}=${param[i]}&`
            }
            serach = serach.substr(0,serach.length-1)
        }
        if(serach !== "") url = url+"?"+serach
        wepy.navigateTo({
            url:url
        })
    },
    getCurrentRoute(){
        var pages = getCurrentPages()
        return pages[0].route.substr(6)
    }
}

export default helper