/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://www.easywork.net.cn/kjc';
//var host = 'http://192.168.1.102:8082';
//var host = 'http://localhost:8080'
var host = 'https://www.wangyao.online/proseer';
var api = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    login: `${host}/api/v1/user/login`,

    registe: `${host}/api/v1/user/regist`,

    getOpenid: `${host}/api/v1/wechat/GetOpenId/`,

    getCollageDetail: `${host}/api/v1/college/GetCollageDetail/`,

    getHomeBannerInfo: `${host}/api/v1/home/GetHomeBannerInfo`,

    createOrder: `${host}/api/v1/wechat/WechatCreateOrder`,

    saveRecharge: `${host}/api/v1/recharge/SaveRecharge`,

    getCollageList: `${host}/api/v1/college/GetCollageList`,

    getCollageCategoryList: `${host}/api/v1/college/GetCollageCategoryList`,

    getJsApiTicket: `${host}/api/v1/wechat/GetJsApiTicket`,

    createOrder: `${host}/api/v1/wechat/WechatCreateOrder`,

    evaluate: `${host}/api/v1/college/AddCollageEvaluate`,

    getMyCollages: `${host}/api/v1/college/GetMyCollages`,

    getExcellentCollage: `${host}/api/v1/college/GetExcellentCollage`,

    buyCollage: `${host}/api/v1/recharge/BuyCollage`,

    checkUserWetherBuyCollage: `${host}/api/v1/college/CheckUserWetherBuyCollage`,

    img: `http://itedu.yzu.edu.cn/kygl/upload/portrait/`,

    getRechargeList: `${host}/api/v1/manager/recharge/GetRechargeList`,

    getUserRechargeList: `${host}/api/v1/recharge/GetUserRechargeList`,

    updaetUserProfile: `${host}/api/v1/user/UpdaetUserProfile`,

    getUserDetail: `${host}/api/v1/user/GetUserDetail`,

    getMyPost: `${host}/getMyPost`,

    getPostsCount: `${host}/getPostsCount`,

    getCollegeTopics: `${host}/getCollegeTopics`,

    getcollegeTopicsCount: `${host}/getcollegeTopicsCount`,

    Top5News: `${host}/Top5News`,

    PageNews: `${host}/PageNews`,

}
};

module.exports = api;
