// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        cid:options.cid
      }
    )
    var that = this;
    this.setData({hide:true})
    wx.showLoading();
    wx.request({
      url: 'http://atonyapi.herokuapp.com/id/'+that.data.cid,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({ hide: false })
        wx.hideLoading();
        that.setData({
          dapi: res.data,
          bt90: parseFloat(res.data.bt90),
          bt80: parseFloat(res.data.bt80),
          bt70: parseFloat(res.data.bt70),
          bt60: parseFloat(res.data.bt60),
          bl60: parseFloat(res.data.bl60),
          comments: res.data.comments.replace(/<br>/g, "\n").replace(/点评时间/g,"\n\n点评时间").replace("\n\n","")
          
        })
        wx.hideToast();
      },
      fail: function (res) {
        that.setData({ hide: true })
        wx.showToast({
          title: '加载失败',
          icon: 'none',
          mask: false
        })
      }
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