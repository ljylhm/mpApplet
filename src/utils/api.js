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

    registe:`${host}/api/v1/user/regist`,
    
    getOpenid: `${host}/api/v1/wechat/GetOpenId/`,

    getCollageDetail: `${host}/api/v1/college/GetCollageDetail/`,

    getHomeBannerInfo: `${host}/api/v1/home/GetHomeBannerInfo`,

    addTopics: `${host}/addTopics`,

    postdelete: `${host}/postdelete`,

    addpost: `${host}/addpost`,

    topicdetail: `${host}/topicdetail`,

    pageMyTopic: `${host}/pageMyTopic`,

    getMyCount: `${host}/getMyCount`,

    DeleteTopic: `${host}/DeleteTopic`,

    oneMore: `${host}/oneMore`,

    searchTopic: `${host}/searchTopic`,

    getColleges: `${host}/getColleges`,

    GetCollegeMember: `${host}/GetCollegeMember`,

    img: `http://itedu.yzu.edu.cn/kygl/upload/portrait/`,

    getGetProfile: `${host}/getGetProfile`,

    getGetResearch: `${host}/getGetResearch`,

    bindinfo: `${host}/bind`,

    loginbywx: `${host}/loginbywx`,

    getMyPost: `${host}/getMyPost`,

    getPostsCount: `${host}/getPostsCount`,

    getCollegeTopics: `${host}/getCollegeTopics`,

    getcollegeTopicsCount: `${host}/getcollegeTopicsCount`,

    Top5News: `${host}/Top5News`,

    PageNews: `${host}/PageNews`,

  }
};

module.exports = api;
