// pages/page/Orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    array_test:[
      {
        date:  "2019-03-17 13:32",
        store_name: "KFC",
        price: "22",
        phonenumber: "1394421313",
        name:"赵慧"

    },
      {
        date: "2019-03-27 23:32",
        store_name: "肯德基",
        price: "77",
        phonenumber: "13831421313",
        name:"刘冬"

      
      }, 
      {
        date: "2019-05-17 21:32",
        store_name: "麦当劳",
        price: "126",
        phonenumber: "13123141453",
        name:"少东"
        
      },
      {
        date: "2019-03-97 13:32",
        price: "26", 
        store_name: "7-11",
        phonenumber: "132084834823",
        name: "Kels"
      
      }, 
      
    ],
  },
  ShowDetail(param){
    var that= this;
   
    var oid = param.currentTarget.dataset.oid;
    wx.navigateTo({
      url: '/pages/Order_detail/Order_detail?oid='+oid,
    })
    
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
    var that = this;
    wx.request({
      url: 'http://ieat.smartcash99.com/api/OrderInfo/getAllOrderHistory?sign=amidingwaimai&num=10',
      success:function(response){
     
        that.setData({
            array:response.data.data
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