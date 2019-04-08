import wepy from "wepy"
import verify from "./verify"
const helper = {
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
    },
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
}

export default helper