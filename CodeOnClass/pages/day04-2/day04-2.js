// pages/work/work.js

const HttpUtil = require('../../utils/httpUtil')
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
    HttpUtil.request({url:'http://192.168.1.122:8080/captchaImage'})
  },


  clickRequest(){
    // wx.request({
    //   url: 'url',//请求的地址
    //   data: data,//请求的参数
    //   dataType: dataType,//参数的类型
    //   header: header,//请求的头
    //   method: method,//请求方式
    //   responseType: responseType,//返回的数值类型
    //   timeout: 0,//超时时间
    //   success: (result) => {},//请求成功时触发的事件
    //   fail: (err) => {},//请求失败时触发的事件
    //   complete: (res) => {},//请求结束触发的事件
    // })
    wx.request({
      url: 'http://192.168.1.122:8080/captchaImage',//请求的地址
      // data: data,//请求的参数
      // dataType: dataType,//参数的类型
      // header: header,//请求的头
      method: 'get',//请求方式
      // responseType: responseType,//返回的数值类型
      timeout: 20000,//超时时间
      success: (result) => {
        console.log('请求成功的结果',result)
      },//请求成功时触发的事件
      fail: (err) => {
        console.log('请求失败',err)
      },//请求失败时触发的事件
      complete: (res) => {
        console.log('请求完成',res)
      },//请求结束触发的事件
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