Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0,
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const timeID = setInterval(() => {
      //循环体，定时执行的循环体
      this.setData({
        number:++this.data.number
      })
      if(this.data.number == 99){
        clearInterval(timeID)
      }
    }, 100);
    //多少时间执行一次循环体

    setTimeout(() => {
      //执行体，多长时间执行一次，且只能执行一次
      wx.showToast({
        title: '老师真帅！！！',
      })
    }, 5000);
  },

  //单选按钮change事件
  radioChange(e){
    console.log(e)
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