// Pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    passWord:'',
    code:'',
    codeImage:'',
    uuid:'',
    isRemember:false
  },
  clickisRemember(e){
    // this.data.isRemember=!this.data.isRemember
    this.setData({
      isRemember:!this.data.isRemember
    })
  },
  login(){
    wx.request({
      url: 'http://192.168.1.122:8080/wxlogin',
      method: 'post',//请求方式
      data:{
        username:this.data.userName,
        password:this.data.passWord,
        code:this.data.code,
        uuid:this.data.uuid,
        deviceId:'123456'
      },
      timeout: 20000,//超时时间
      success: (res) => {
        if(res.data.msg=="验证码错误"){
          wx.showModal({
            title: '错误', //提示的标题
            content: '验证码错误', //提示的内容
            showCancel:false,
          })
        }else if(res.data.msg=="用户不存在/密码错误"){
          wx.showModal({
            title: '错误', //提示的标题
            content: '用户不存在/密码错误', //提示的内容
            showCancel:false,
          })
        }else if(res.data.msg=="验证码已失效"){
          wx.showModal({
            title: '错误', //提示的标题
            content: '验证码已失效', //提示的内容
            showCancel:false,
            success:this.getCodeImg(),
          })
        }else if(res.data.msg=="操作成功"){
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
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        
        console.log('请求成功的结果',res)
      },//请求成功时触发的事件
      fail: (err) => {
        wx.showToast({
          title: '内部错误，请重试',
          icon:'error',
          timeout:2000
        })
      }
    })

  },
  sign(){
    wx.navigateTo({
      url: '/pages/sign/sign',
    })
  },
  inputData(e){
    // console.log(e.target.dataset.flag)
    const flag = e.target.dataset.flag
    this.setData({
      [`${e.target.dataset.flag}`]:e.detail.value
    })
    console.log(this.data)
  },
  clickCodeImg(){
    this.getCodeImg()
  },
  getCodeImg(){
    wx.request({
      url: 'http://192.168.1.122:8080/captchaImage',//请求的地址
      // data: data,//请求的参数
      // dataType: dataType,//参数的类型
      // header: header,//请求的头
      method: 'get',//请求方式
      // responseType: responseType,//返回的数值类型
      timeout: 20000,//超时时间
      success: (res) => {
        this.setData({
          codeImage:'data:image/png;base64,'+ res.data.img,
          uuid: res.data.uuid
        })
        // console.log('请求成功的结果',this.data.codeImage)
      },//请求成功时触发的事件
      fail: (err) => {
        // console.log('请求失败',err)
      },//请求失败时触发的事件
      complete: (res) => {
        // console.log('请求完成',res)
      },//请求结束触发的事件
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '提示',
      content:'请勿直接将本人代码原封不动作为你的作业提交，借鉴学习更有利于你的理解',
      showCancel:false,
    })
    if(wx.getStorageSync('isRemember')){
      console.log('记住密码')
      this.setData({
        userName:wx.getStorageSync('userName'),
        passWord:wx.getStorageSync('passWord'),
        isRemember:wx.getStorageSync('isRemember')
      })
      console.log(this.data.userName)
  }else{
    console.log('没有记住密码')
      this.setData({
        userName:'',
        passWord:''
      })
  }
    this.getCodeImg()
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