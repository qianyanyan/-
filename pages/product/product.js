//logs.js


Page({
  data: {
     productCatalog:[
       {'id':0,'name':'全部'},
       {'id':1,'name':'商城'},
       {'id':2,'name':'官网'},
       {'id':3,'name':'小程序'},
      
     
     ],
     activeCategoryId:0,
     productdata:[]
  },
 onLoad: function () {
   
  },
onShow:function(){
    this.setData({
      productdata:[
        {img:'https://wx.whxnjs.com.cn/xcx/img/lishizhen/lishizhen.png',title:'李时珍研究所',id:'0'},
        {img:'https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushan.jpg',title:'欧姗小程序',id:'1'},
        {img:'https://wx.whxnjs.com.cn/xcx/img/guanwang/logo.png',title:'兴诺佳盛官网',id:'2'}
       ]
    })
  },
 tabClick: function (e) {
   console.log(e.currentTarget)
   let allProduct = [
    {img:'https://wx.whxnjs.com.cn/xcx/img/lishizhen/lishizhen.png',title:'李时珍研究所',id:'0'},
    {img:'https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushan.jpg',title:'欧姗小程序',id:'1'},
    {img:'https://wx.whxnjs.com.cn/xcx/img/guanwang/logo.png',title:'兴诺佳盛官网',id:'2'}
   ]
   let shopProduct = [
    {img:'https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushan.jpg',title:'欧姗小程序',id:'1'},
   ]
   let websiteProduct = [
    {img:'https://wx.whxnjs.com.cn/xcx/img/guanwang/logo.png',title:'兴诺佳盛官网',id:'2'},
    {img:'https://wx.whxnjs.com.cn/xcx/img/lishizhen/lishizhen.png',title:'李时珍研究所',id:'0'},
   ]
   let wxCxProduct = [
    {img:'https://wx.whxnjs.com.cn/xcx/img/oushanxcx/oushan.jpg',title:'欧姗小程序',id:'1'},
    {img:'https://wx.whxnjs.com.cn/xcx/img/guanwang/logo.png',title:'兴诺佳盛官网',id:'2'}
   ]
   if(e.currentTarget.id==0){
    
    }
    switch(Number(e.currentTarget.id)){
      case 0:
      this.setData({
        activeCategoryId: e.currentTarget.id,
        productdata:allProduct
      });
      break;
      case 1:
      this.setData({
        activeCategoryId: e.currentTarget.id,
        productdata:shopProduct
      });
      break;
      case 2:
      this.setData({
        activeCategoryId: e.currentTarget.id,
        productdata:websiteProduct
      });
      break;
      case 3:
      this.setData({
        activeCategoryId: e.currentTarget.id,
        productdata:wxCxProduct
      });
      break;
      default:
        this.setData({
          activeCategoryId: e.currentTarget.id,
          productdata:allProduct
        });
      break;
    }
 
 },
productGOdetails:function(e){
  
   wx.navigateTo({
     url:'/pages/details/details?productId='+e.currentTarget.dataset.id
   })
 }
})
