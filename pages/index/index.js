//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://show.metinfo.cn/muban/M1032002/328/include/thumb.php?dir=upload/201703/1488526977.jpg&x=600',
      'https://show.metinfo.cn/muban/M1032002/328/include/thumb.php?dir=upload/201703/1488527073.jpg&x=600'
   
    ],

    animationData: {},
    indicatorDots: true,
    circular:true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    motto: '你好！',
    userInfo: {},
    hasUserInfo: false,
    dataLength:0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mobile:'13163247391',
    contentdata:[
      {img:'https://wx.whxnjs.com.cn/xcx/img/ser_ppwz.jpg',littleTitle:'企业高端网站定制设计彰显品牌形象'},
      {img:'https://wx.whxnjs.com.cn/xcx/img/ser_ydui.jpg',littleTitle:' 拒绝平庸只出精品捕捉需求、分析设计'},
      {img:'https://wx.whxnjs.com.cn/xcx/img/ser_dzsw.jpg',littleTitle:' 专业团队 超前思维"全方位推广你的品牌和产品'},
      {img:'https://wx.whxnjs.com.cn/xcx/img/ser_wlzh.jpg',littleTitle:' 快速响应，贴心服务"呵护你的企业网站健康成长'},
    ],
    productdata:[
      {img:'https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushan.jpg',title:'欧姗小程序',id:'1'},
      {img:'https://wx.whxnjs.com.cn/xcx/img/guanwang/logo.png',title:'兴诺佳盛官网',id:'2'}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        dataLength:2
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber:this.data.mobile
    })
  },

onShow:function(){
 
},
companyGOdetails:function(){
  wx.navigateTo({
    url:'/pages/details/details?productId=company'
  })
},
productGOdetails:function(e){
 
  wx.navigateTo({
    url:'/pages/details/details?productId='+e.currentTarget.dataset.id
  })
}
})
