var app = getApp()
Page({
    
      /**
       * 页面的初始数据
       */
      data: {
          name:'',
          phone:'',
          demand:'',
         
      },
    
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
      
      },
    
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function () {
      
      },
    
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {
      
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
      
      },
      showMsg:function(e){
         var id = e.currentTarget.id
         let reg = /^1[3|4|5|7|8][0-9]{9}$/  
         if(id=='name'){
             this.setData({
                 name:e.detail.value
             })
         }else if(id=='phone'){
             if(reg.test(e.detail.value)){
                this.setData({
                    phone:e.detail.value,
                    phoneFlag:true
                 })
             }else{
                this.setData({
                    phoneFlag:false
                 })
             }
          
         }else{
            this.setData({
                demand:e.detail.value
             })
         }
      },
      submitMsg:function(){
          if(this.data.name!=''&&this.data.phone!=''&&this.data.demand!=''){
              wx.request({
                  url:'http://192.168.2.54:8080/api/cms/message/insertPhoneMessage',
                  method:'POST',
                  data:{
                    phoneNum:this.data.phone,contact:this.data.name,content:this.data.demand,appId:app.globalData.AppId

                  },
                  success:(res)=>{
                      if(res.data.code==200){
                            wx.showModal({
                                title: '提示',
                                content: res.data.detail,
                                showCancel:false,
                                success: function(res) {
                                if (res.confirm) {
                                    console.log('确定')
                                 } 
                                }
                            })
                        }else{
                           
                        }
                   
                  }
              })
           }else{
            wx.showModal({
                title: '提示',
                content: '请填写正确的信息,以获得及时的回复',
                showCancel:false,
                success: function(res) {
                if (res.confirm) {
                    console.log('确定')
                    return false
                 } 
                }
            })
           }
      }
    })