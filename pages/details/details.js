// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        id:0,
        pageStatus:false,
        induction:{
             product:{}
        }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let that=this;
    
     if(options.productId!='company'){  //此时为产品介绍
             var product0 = {
              name:'李时珍研究所官网',
              id:0,
              date:'2017-08-25',
              image:['https://wx.whxnjs.com.cn/xcx/img/lishizhen/lishizhenGw.png'],
              induction:'详情可关注欧姗私语进行查看'
            }
            var product1 = {
              name:'欧姗小程序',
              id:1,
              date:'2017-08-27',
              image:['https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushanxcx.png','https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushanxcx1.png','https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushanxcx2.png','https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushanxcx3.png',],
              induction:'详情可查看www.'
            }
            var product2 =  {
              name:'兴诺佳盛官网',
              id:2,
              date:'2017-08-27',
              image:['https://wx.whxnjs.com.cn/xcx/img/guanwang/guanwang3.png','https://wx.whxnjs.com.cn/xcx/img/guanwang/guanwang2.png','https://wx.whxnjs.com.cn/xcx/img/guanwang/guanwang1.png'],
              induction:'详情可查看www.'
            }
            if(options.productId==0){
                that.setData({
                  id:options.productId,
                  induction:{
                    product:product0
                }
                })
            }else if(options.productId==1){
              that.setData({
                id:options.productId,
                induction:{
                  product:product1
              }
              })
            }else{
                that.setData({
                  id:options.productId,
                  induction:{
                    product:product2
                }
                })
            }
            

      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})