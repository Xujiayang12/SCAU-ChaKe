// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      main:options.main,
      types: options.types,
      avg: parseInt(options.avg) == 0 ? '' : parseInt(options.avg),
      star: options.star,
      other:options.other
    })
    console.log(this.data.main);
    var that = this;
    wx.showLoading();
    wx.request({
      url: 'http://atonyapi.herokuapp.com/list/'+that.data.main+'&'+that.data.types+'&'+that.data.avg+'&'+that.data.star+'&'+that.data.other,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          listapi: res.data.data,
        })
        wx.hideLoading();
      },
      fail: function(res){
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          mask: true
        })
      }
    })

  
  },//在html里面加个属性可以通过event直接调取信息。
  anyixia:function(event)
  {
    var cid=event.currentTarget.dataset.cId;
    wx.navigateTo({
      url: '/pages/detail?cid='+cid,
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