// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderArray:[
      '男',
      '女',
      '未知',
    ],
    isAdminArray:[
      '是',
      '否',
    ],
    roleArray:[
      '总经理',
      '普通员工'
    ],
    txArray:[
      '头衔1',
      '头衔2',
      '无'
    ],
    role:'请选择职位',
    gender:'请选择性别',
    isAdmin:'请选择是/否',
    tx:'请选择头衔',
		avatarUrl:'/images/my_head.gif',
		userName:'',
		userID:'',
		uname:'',
		mail:''
  },
	inputData(e){
    // console.log(e.target.dataset.flag)
    const flag = e.target.dataset.flag
    this.setData({
      [`${e.target.dataset.flag}`]:e.detail.value
    })
    console.log(this.data)
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  bindPickerChange(e){
    console.log(e)
    if (e.target.dataset.flag == 'gender') {
      this.setData({
        gender:this.data.genderArray[e.detail.value]
      })
    } else if (e.target.dataset.flag == 'isAdmin') {
      this.setData({
        isAdmin:this.data.isAdminArray[e.detail.value]
      })
    } else if (e.target.dataset.flag == 'role') {
      this.setData({
        role:this.data.roleArray[e.detail.value]
      })
    } else if (e.target.dataset.flag == 'tx') {
      this.setData({
        tx:this.data.txArray[e.detail.value]
      })
    } else {
      this.setData({
        [`${e.target.dataset.flag}`]:e.detail.value
      })
      console.log(this.data)
    }
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