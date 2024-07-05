// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '2024-07-05 09:59:08',
    dataArray: [{
        dictLabel: '管理员',
        dictValue: 1
      },
      {
        dictLabel: '总经理',
        dictValue: 2
      },
      {
        dictLabel: '清洁工',
        dictValue: 3
      },
      {
        dictLabel: '前台',
        dictValue: 4
      },
    ],
    userArray: [{
      name: '张三',
      postCode: 1,
    }, {
      name: '李四',
      postCode: 2,
    }, {
      name: '王五',
      postCode: 3,
    }, {
      name: '赵六',
      postCode: 4,
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({
    //   time:this.data.time.substring(0,10)
    // })
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