// pages/rank/rank.js
var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["自然科学类", "人文社会科学类", "A系列"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.showLoading();
    wx.request({
      url: 'http://atonyapi.herokuapp.com/type/自然科学类',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          listapi: res.data.data,
        })
        wx.hideLoading();
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  anyixia: function (event) {
    var cid = event.currentTarget.dataset.cId;
    wx.navigateTo({
      url: '/pages/detail?cid=' + cid,
    })
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
  tabClick: function (e) {
    
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    if (e.currentTarget.id == 0) {
      var that = this;
      wx.showLoading();
      wx.request({
        url: 'http://atonyapi.herokuapp.com/type/自然科学类',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            listapi: res.data.data,
          })
          wx.hideLoading();
        }
      })
    };
    if (e.currentTarget.id == 1) {
      var that = this;
      wx.showLoading();
      wx.request({
        url: 'http://atonyapi.herokuapp.com/type/人文社会科学类',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            listapi: res.data.data,
          })
          wx.hideLoading();
        }
      })
    };
    if (e.currentTarget.id == 2) {
      var that = this;
      wx.showLoading();
      wx.request({
        url: 'http://atonyapi.herokuapp.com/type/A系列',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            listapi: res.data.data,
          })
          wx.hideLoading();
        }
      })
    };
  }
})