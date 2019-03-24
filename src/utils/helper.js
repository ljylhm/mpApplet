import wepy from "wepy"
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
                cb && cb(false,res)
            }
          })
    }
}

export default helper