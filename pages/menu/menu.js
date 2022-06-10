const db = wx.cloud.database()
Page({
  data: {
    cafeList: [],
    number: 0,
  },
  add(e) {
   console.log(e) 
  },
  onLoad() {
    db.collection('cafe').get()
      .then(res => {
        this.setData({
          cafeList: res.data
        })
      })
  }
})