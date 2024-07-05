// pages/day02/day02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRefresh:false,
    dataNumber:10
  },
  onRefresh(e){
    wx.showLoading({
    title:'刷新中...',
    mask: true,
    success:(res)=>{},
    fail:(res)=>{},
    complete:(res)=>{},
    }),
    setTimeout(()=>{
    wx.hideLoading()
    this.setData({
    showRefresh:false,
    dataNumber:10
    })
    },5000);
    console.log(1,e)
  },
  onLoaMore(e){
    wx.showLoading({
      title: '加载中……',
    })
    setTimeout(()=>{
        wx.hideLoading()
        this.data.dataNumber+=10
        this.setData({
          dataNumber:this.data.dataNumber
        })

    },5000)
  }
  })
