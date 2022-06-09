// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLongitude: '',
    currentLatitude: '',
    markers: [{
      id: 1,
      title: '阿玲的',
      latitude:22.631727,
      longitude:114.216463,
      width: '40rpx',
      height: '70rpx',
    }],
  },
  navtous(e) {
    // 获取当前位置
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        wx.openLocation({
          address: '深圳茶博园',
          name: '阿玲的店',
          latitude:e.target.dataset.marker.latitude,
          longitude:e.target.dataset.marker.longitude,
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})