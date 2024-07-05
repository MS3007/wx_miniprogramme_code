Page({
  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:'',
    passWord:''
  },
  login(){
      console.log('手机号码输入框里面的值为：',this.data.phoneNumber)
      console.log('密码输入框里面的值为：',this.data.passWord)
      wx.navigateTo({
        url: `/pages/day03-hw/day03-hw`,
      });
  },
  inputData(e){
    // console.log(e.target.dataset.flag)
    const flag = e.target.dataset.flag
    this.setData({
      [`${e.target.dataset.flag}`]:e.detail.value
    })
    console.log(this.data)
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