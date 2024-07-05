Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'admin',
    passWord:'123456',
    isRemember:false
  },
  inputData(e){
    // console.log(e.target.dataset.flag)
    const flag = e.target.dataset.flag
    this.setData({
      [`${e.target.dataset.flag}`]:e.detail.value
    })
    console.log(this.data)
  },
  clickisRemember(e){
    // this.data.isRemember=!this.data.isRemember
    this.setData({
      isRemember:!this.data.isRemember
    })
  },
  clicklogin(){
    if(this.data.isRemember){
      console.log(this.data.isRemember)
      wx.setStorageSync('userName', this.data.userName)
      wx.setStorageSync('passWord', this.data.passWord)
      wx.setStorageSync('isRemember', this.data.isRemember)
    }else{
      wx.setStorageSync('userName', '')
      wx.setStorageSync('passWord', '')
      wx.setStorageSync('isRemember', '')
    }
    wx.navigateTo({
      url: '../../pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //一、判断上次登录的用户有没有选择记住密码
    //二、如果选择了记住密码，则去缓存中获取，如何获取，稍后再说
    //三、获取完之后，将相应的数据给变量
    //四、没有选择记住密码，则不做任何操作
    console.log('onload')
    if(wx.getStorageSync('isRemember')){
        console.log('记住密码')
        this.setData({
          userName:wx.getStorageSync('userName'),
          passWord:wx.getStorageSync('passWord'),
          isRemember:wx.getStorageSync('isRemember')
        })
    }else{
      console.log('没有记住密码')
        this.setData({
          userName:'',
          passWord:''
        })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
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