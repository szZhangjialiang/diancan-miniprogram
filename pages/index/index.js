const db = wx.cloud.database()
let keyword = ''
Page({
  /**
   * 页面的初始数据
   */
  data: {
    picture: [],
  },
  // 绑定输入数据
  searchKeyword(e){
    console.log(e.detail.value)
    keyword = e.detail.value
  },
  // 搜索按钮
  goSearch(){
  console.log('出发了',keyword)
  if(keyword && keyword.length > 0){
    wx.navigateTo({
      url: '/pages/drink/drink?keyword='+keyword
    })
  }else{
    console.log('不能为空')
  }
  },
  // 扫码
  toScanQRcode(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log(res)
      }
    })
  },
  toMenu(){
    wx.switchTab({
      url: '/pages/menu/menu',
    })
  },
  toLineup(){
    wx.navigateTo({
      url: '/pages/lineup/lineup',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('swiper').get().then(res => {
      // console.log(res)
      this.setData({
        picture: res.data
      })
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