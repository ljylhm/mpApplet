// 改用微信原生UI组件
import wepy from "wepy"

const toast = {
    showToast(title="",cb,options={}){
        let opts = {
            title,
            duration:options.duration || 2000,
            icon:options.icon || "none",
            success(data){
                cb && cb(true,data)
            },
            fail(data){
                cb && cb(false,data)
            },
            complete(){
                options.complete && options.complete()
            }
        }
        wepy.showToast(opts)
    },
    showSuccess(title,cb){
        this.showToast(title,cb,{
            icon:"success"
        })
    }
}

export default toast