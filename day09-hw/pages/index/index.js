Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: '',
    defaultVal: true,
    datetime1Visible: false,
    datetime2Visible: false,
    datetime1: new Date('2024-7-9').getTime(),
    datetime2: new Date('2021-7-9').getTime(),
    datetime1Text: '',
    datetime2Text: '',
    levelText: '',
    levelValue: [],
    timeTyText: '',
    timeTyValue: [],
    levels: [
      { label: '不限', value: '不限' },
      { label: '青铜', value: '青铜' },
      { label: '白银', value: '白银' },
      { label: '黄金', value: '黄金' },
    ],
    timeTys:[
      { label: '不限', value: '不限' },
      { label: '时间类型1', value: '时间类型1' },
      { label: '时间类型2', value: '时间类型2' },
      { label: '时间类型3', value: '时间类型3' },
    ],
    value: '',
    resultList: [],
    // activeValues: [0],
    dataArray: [
      {
        id: 1,
        name: "李*泽",
        uid: "370101*********0011",
        level: "青铜",
        stTime: "2024-06-24 10:36",
        edTime: "2024-06-19 23:38",
        cost: "5.00",
        ip: "205.46.194.110",
        seatId: "010339",
        action: "换机",
        netId: "24316628390",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.baidu.com",
        isExpanded: false,
      },
      {
        id: 2,
        name: "周*",
        uid: "370101*********0012",
        level: "青铜",
        stTime: "2024-06-24 10:36",
        edTime: "2024-06-25 23:38",
        cost: "3.00",
        ip: "205.46.194.111",
        seatId: "010340",
        action: "换机",
        netId: "24316628391",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.google.com",
        isExpanded: false,
      },
      {
        id: 3,
        name: "王*",
        uid: "370101*********0013",
        level: "黄金",
        stTime: "2024-06-28 10:36",
        edTime: "2024-06-30 23:38",
        cost: "10.00",
        ip: "205.46.194.112",
        seatId: "010341",
        action: "换机",
        netId: "24316628392",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.youtube.com",
        isExpanded: false,
      },
      {
        id: 4,
        name: "张*",
        uid: "370101*********0014",
        level: "白银",
        stTime: "2024-07-01 14:26",
        edTime: "2024-07-01 18:45",
        cost: "4.00",
        ip: "205.46.194.113",
        seatId: "010342",
        action: "换机",
        netId: "24316628393",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.facebook.com",
        isExpanded: false,
      },
      {
        id: 5,
        name: "刘*",
        uid: "370101*********0015",
        level: "白银",
        stTime: "2024-07-02 12:36",
        edTime: "2024-07-02 14:50",
        cost: "6.00",
        ip: "205.46.194.114",
        seatId: "010343",
        action: "换机",
        netId: "24316628394",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.twitter.com",
        isExpanded: false,
      },
      {
        id: 6,
        name: "陈*",
        uid: "370101*********0016",
        level: "黄金",
        stTime: "2024-07-03 15:15",
        edTime: "2024-07-03 18:45",
        cost: "8.00",
        ip: "205.46.194.115",
        seatId: "010344",
        action: "换机",
        netId: "24316628395",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.linkedin.com",
        isExpanded: false,
      },
      {
        id: 7,
        name: "赵*",
        uid: "370101*********0017",
        level: "白银",
        stTime: "2024-07-04 16:20",
        edTime: "2024-07-04 20:30",
        cost: "7.00",
        ip: "205.46.194.116",
        seatId: "010345",
        action: "换机",
        netId: "24316628396",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.bing.com",
        isExpanded: false,
      },
      {
        id: 8,
        name: "孙*",
        uid: "370101*********0018",
        level: "青铜",
        stTime: "2024-07-05 13:15",
        edTime: "2024-07-05 16:45",
        cost: "5.50",
        ip: "205.46.194.117",
        seatId: "010346",
        action: "换机",
        netId: "24316628397",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.reddit.com",
        isExpanded: false,
      },
      {
        id: 9,
        name: "马*",
        uid: "370101*********0019",
        level: "黄金",
        stTime: "2024-07-06 17:45",
        edTime: "2024-07-06 19:50",
        cost: "9.00",
        ip: "205.46.194.118",
        seatId: "010347",
        action: "换机",
        netId: "24316628398",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.twitch.tv",
        isExpanded: false,
      },
      {
        id: 10,
        name: "朱*",
        uid: "370101*********0020",
        level: "白银",
        stTime: "2024-07-07 09:30",
        edTime: "2024-07-07 12:40",
        cost: "6.50",
        ip: "205.46.194.119",
        seatId: "010348",
        action: "换机",
        netId: "24316628399",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.instagram.com",
        isExpanded: false,
      },
      {
        id: 11,
        name: "许*",
        uid: "370101*********0021",
        level: "青铜",
        stTime: "2024-07-08 14:15",
        edTime: "2024-07-08 16:25",
        cost: "4.50",
        ip: "205.46.194.120",
        seatId: "010349",
        action: "换机",
        netId: "24316628400",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.netflix.com",
        isExpanded: false,
      },
      {
        id: 12,
        name: "何*",
        uid: "370101*********0022",
        level: "黄金",
        stTime: "2024-07-09 11:45",
        edTime: "2024-07-09 13:55",
        cost: "7.50",
        ip: "205.46.194.121",
        seatId: "010350",
        action: "换机",
        netId: "24316628401",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.pinterest.com",
        isExpanded: false,
      },
      {
        id: 13,
        name: "吕*",
        uid: "370101*********0023",
        level: "白银",
        stTime: "2024-07-10 10:00",
        edTime: "2024-07-10 12:20",
        cost: "5.00",
        ip: "205.46.194.122",
        seatId: "010351",
        action: "换机",
        netId: "24316628402",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.yahoo.com",
        isExpanded: false,
      },
      {
        id: 14,
        name: "施*",
        uid: "370101*********0024",
        level: "青铜",
        stTime: "2024-07-11 09:15",
        edTime: "2024-07-11 11:30",
        cost: "4.00",
        ip: "205.46.194.123",
        seatId: "010352",
        action: "换机",
        netId: "24316628403",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.apple.com",
        isExpanded: false,
      },
      {
        id: 15,
        name: "吴*",
        uid: "370101*********0025",
        level: "白银",
        stTime: "2024-07-12 08:30",
        edTime: "2024-07-12 10:45",
        cost: "6.00",
        ip: "205.46.194.124",
        seatId: "010353",
        action: "换机",
        netId: "24316628404",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.baidu.com",
        isExpanded: false,
      },
      {
        id: 16,
        name: "郑*",
        uid: "370101*********0026",
        level: "黄金",
        stTime: "2024-07-13 10:00",
        edTime: "2024-07-13 12:30",
        cost: "8.50",
        ip: "205.46.194.125",
        seatId: "010354",
        action: "换机",
        netId: "24316628405",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.google.com",
        isExpanded: false,
      },
      {
        id: 17,
        name: "周*",
        uid: "370101*********0027",
        level: "青铜",
        stTime: "2024-07-14 11:30",
        edTime: "2024-07-14 13:45",
        cost: "4.50",
        ip: "205.46.194.126",
        seatId: "010355",
        action: "换机",
        netId: "24316628406",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.youtube.com",
        isExpanded: false,
      },
      {
        id: 18,
        name: "冯*",
        uid: "370101*********0028",
        level: "白银",
        stTime: "2024-07-15 09:00",
        edTime: "2024-07-15 11:15",
        cost: "5.50",
        ip: "205.46.194.127",
        seatId: "010356",
        action: "换机",
        netId: "24316628407",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.facebook.com",
        isExpanded: false,
      },
      {
        id: 19,
        name: "陈*",
        uid: "370101*********0029",
        level: "黄金",
        stTime: "2024-07-16 10:45",
        edTime: "2024-07-16 13:00",
        cost: "7.00",
        ip: "205.46.194.128",
        seatId: "010357",
        action: "换机",
        netId: "24316628408",
        nation: "汉族",
        gender: "男",
        adtionCost: "0.00",
        psrc: "www.twitter.com",
        isExpanded: false,
      },
      {
        id: 20,
        name: "袁*",
        uid: "370101*********0030",
        level: "青铜",
        stTime: "2024-07-17 08:45",
        edTime: "2024-07-17 10:50",
        cost: "4.00",
        ip: "205.46.194.129",
        seatId: "010358",
        action: "换机",
        netId: "24316628409",
        nation: "汉族",
        gender: "女",
        adtionCost: "0.00",
        psrc: "www.linkedin.com",
        isExpanded: false,
      },
    ]
  },
  handlePopup(e) {
    const { item } = e.currentTarget.dataset;
    this.setData({ visible: true });
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  /**** */
  onColumnChange(e) {
    console.log('picker pick:', e);
  },


  onPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;

    console.log('picker change:', e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
    });
  },

  onPickerCancel(e) {
    const { key } = e.currentTarget.dataset;
    console.log(e, '取消');
    console.log('picker1 cancel:');
    this.setData({
      [`${key}Visible`]: false,
    });
  },

  onLevelPicker() {
    this.setData({ levelVisible: true });
  },
  ontimeTyPicker() {
    this.setData({ timeTyVisible: true });
  },

  showPicker(e) {
    const { mode } = e?.currentTarget?.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value } = e?.detail;
    const { mode } = this.data;

    console.log('confirm', value);

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.hidePicker();
  },

  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  handleChange(event) {
    const index = event.currentTarget.dataset.index;
    const expanded = !this.data.dataArray[index-1].isExpanded;
    console.log(expanded)
    this.setData({
      [`dataArray[${index-1}].isExpanded`]: expanded
    });
    this.setData({
      activeValues: event.detail.value,
    });
  },
  onChangeValue(e) {
    const { value } = e.detail;
    const list = [
      'tdesign-vue',
      'tdesign-react',
      'tdesign-miniprogram',
      'tdesign-angular',
      'tdesign-mobile-vue',
      'tdesign-mobile-react',
    ];
    this.setData({
      resultList: value ? list.filter((v) => v.includes(value)) : [],
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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