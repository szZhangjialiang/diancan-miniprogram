//搜索结果页面
const db = wx.cloud.database()
Page({
  data: {
    searchResult: [],
    emptyResult: false
  },
  onLoad(options) {
    // 接收用户搜索的关键词
    let keyword = options.keyword
    db.collection('cafe').where({
        type: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      }).get()
      .then(res => {
        let [searchResult] = [res.data]
        if (searchResult.length == 0) {
          // this.emptyResult = true
          this.setData({
            emptyResult :true
          })
        }else{
          this.setData({
            searchResult
          })
        }
      })
      .catch(res => {
        console('搜索失败', res)
      })
  },
})