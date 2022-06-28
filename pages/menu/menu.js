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
   this.getTotalCount()
   this.getTotalPrice()
   this.cartStorage()
  },
  // 减少购物车数量
  minus(e){
    let index = e.currentTarget.dataset.index
    let carts = this.data.cafeList
    let quantity = carts[index].quantity
    
    if(carts[index].quantity == 0){
     wx.showToast({
       title: '数量不能小于0',
       icon:'none'
     })
    }else{
      quantity =  quantity - 1
      carts[index].quantity = quantity
      this.setData({
        cafeList : carts,
        totalItem: carts[index].quantity
      })
      this.getTotalCount()
      this.getTotalPrice()
      this.cartStorage()
    }
  },
  // 计算总数量
  getTotalCount(){
   let item = this.data.cafeList
   let totalItem = 0
   for (let index = 0; index < item.length; index++) {
    totalItem += item[index].quantity;
   }
   this.setData({
    totalItem,
   })
  },
  // 计算总价格
  getTotalPrice(){
    let item = this.data.cafeList
    let totalPrice = 0.00
    for (let index = 0; index < item.length; index++) {
      totalPrice += item[index].price * item[index].quantity;
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2)
    })
  },
  // 跳转至购物车详情页
  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  // 更新购物车并缓存
  cartStorage(){
    wx.setStorageSync('cartItem', this.data.cafeList)
  },
  onLoad() {
    db.collection('cafe').get()
      .then(res => {
        this.setData({
          cafeList: res.data
        })
      })
      this.cartStorage()
  },
  
})