const db = wx.cloud.database()
Page({
  data: {
    cafeList: [],
    totalItem:0,
    totalPrice:0,
    btnShow:''
  },
  // 加入购物车
  add(e) {
   let index = e.currentTarget.dataset.index
   let carts = this.data.cafeList
   let quantity = carts[index].quantity
   quantity = quantity + 1
   carts[index].quantity = quantity

   this.setData({
     cafeList : carts,
   }),
   this.getTotalPrice()
  },
  // 减少购物车数量
  minus(e){
    let index = e.currentTarget.dataset.index
    let carts = this.data.cafeList
    let quantity = carts[index].quantity
    
    if(carts[index].quantity == 0){
     
    }else{
      quantity = quantity - 1
      carts[index].quantity = quantity
      this.setData({
        cafeList : carts,
        totalItem: carts[index].quantity
      })
    }
  },
  // 计算总价
  getTotalPrice(){
   let item = this.data.cafeList
   let totalItem = 0
   for (let index = 0; index < item.length; index++) {
    totalItem += item[index].quantity;
   }
   this.setData({
    totalItem,
   })
  },
  // 跳转至购物车详情页
  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  onLoad() {
    db.collection('cafe').get()
      .then(res => {
        this.setData({
          cafeList: res.data
        })
      })
  },
  
})