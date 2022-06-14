const db = wx.cloud.database()
Page({
  data: {
    cafeList: [],
  },
  add(e) {
   console.log(e) 
   let index = e.currentTarget.dataset.index
   console.log('这是index',index)
   let carts = this.data.cafeList
   let quantity = carts[index].quantity
   quantity = quantity + 1
   carts[index].quantity = quantity
   console.log('这是quantity',quantity)

   this.setData({
     cafeList : carts
   })
   console.log('修改quantity后',this.data.cafeList)
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