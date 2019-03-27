// pages/Order_detail/Order_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:0,
    imageurl: "http://www.runoob.com/try/demo_source/paris.jpg",
    picurl:"",
    array:[],
    order_id:"",
    total_price:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
   console.log(options.oid)
    that.setData({
     order_id: options.oid,
   })
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
    var that = this;
    wx.request({
      url: 
      'http://ieat.smartcash99.com/api/OrderInfo/getOrderInfo?sign=amidingwaimai&orderid='+that.data.order_id,
      success: function(response) {
        that.setData({
          
          array:response.data.data.items,
          picurl:response.data.data.items[0].item_data.f_pic,
          total_price:response.data.data.total_price,
        });
      
    }
    })
    
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