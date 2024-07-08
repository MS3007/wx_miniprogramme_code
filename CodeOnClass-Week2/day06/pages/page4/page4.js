// pages/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.onNetworkStatusChange((result) => {
      console.log(result.isConnected)
      console.log(result.networkType)
    })
    wx.getSystemInfo({
      success(res){
        console.log('获取设备信息成功',res)
      },fail(fail){

      }
    })
  },
  openScan() {
    //打开扫一扫Api
    wx.scanCode({
      success(res) {
        console.log(res)
        wx.showToast({
          title: res.result,
        })
      },
      fail(fail) {
        console.log(111,fail)
      },
      complete() {

      }
    })
  },
  startWifi(){
    wx.startWifi({
      success(res){
        console.log('初始化wifi成功',res)
      },
      fail(fail){
        console.log('初始化WiFi失败',fail)
      }
    }) 
  },

  closeWifi(){
    wx.stopWifi({
      success(res){
        console.log('关闭wifi成功',res)
      },
      fail(fail){
        console.log('关闭WiFi失败',fail)
      }
    })
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