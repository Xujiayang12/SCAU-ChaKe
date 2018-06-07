// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: ["","自然科学类", "人文社会科学类", "A系列","汉语系列"],
    types:'',
    avgs: ["","90以上", "80-90", "70-80", "60-70"],
    avg:0,
    stars: ["", "★★★★★", "★★★★", "★★★", "★★", "★"],
    star:"",
    main:'',
    other:''
  },
  bindtype: function (e) {
    if (e.detail.value==1)
    {
      this.setData({
        types: "自然科学类"
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        types: "人文社会科学类"
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        types: "A系列"
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        types: "汉语系列"
      })
    }
    
  },
  bindavg: function (e) {
    if (e.detail.value == 1) {
      this.setData({
        avg:90
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        avg:80
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        avg:70
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        avg:60
      })
    }

  },
  bindstar: function (e) {
    if (e.detail.value == 1) {
      this.setData({
        star: "★★★★★"
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        star: "★★★★"
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        star: "★★★"
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        star: "★★"
      })
    }
    if (e.detail.value == 5) {
      this.setData({
        star: "★"
      })
    }

  },
  tein:function(e)
  {
    this.setData({
      main:e.detail.value
    })
  },
  plin: function (e) {
    this.setData({
      other: e.detail.value
    })
  },
  goto: function (event)
  {
    var that = this;
    wx.navigateTo({
      url: '/pages/list/list?main='+that.data.main+'&types='+that.data.types+'&avg='+that.data.avg+'&star='+that.data.star+'&other='+that.data.other,
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