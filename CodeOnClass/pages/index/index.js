// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
Page({
  data: {

    powerList: [
      {
        type: 'day01',
        title: 'Day01作业',
        tip: '九九乘法表',
      },
      {
        title: 'Day02',
        tip: '滑动加载、轮播图、计数按钮',
        showItem: false,
        item: [
          {
            type: 'day02',
            title: 'Day02-Page01',
          },
          {
            type: 'day02-2',
            title: 'Day02-Page02',
          },
          {
            type: 'day02-3',
            title:'Day02-Page03'
          }
        ],
      },
      {
        type: 'day02-hw',
        title: 'Day02作业',
        tip: '模拟登录界面',
      },
      {
        title: 'Day03',
        tip: '登录信息缓存',
        showItem: false,
        item: [
          {
            type: 'day03-1',
            title: 'Day03-Page01',
          },
          {
            type: 'day03-2',
            title: 'Day03-Page02',
          },
          {
            type: 'day03-3',
            title: 'Day03-Page03',
          },
          {
            type: 'day03-4',
            title: 'Day03-Page04',
          },
        ],
      },
      {
        type: 'day03-hw',
        title: 'Day03作业',
        tip: '奖金管理',
      },
      {
        title: 'Day04',
        tip: '第四天代码',
        showItem: false,
        item: [
          {
            type: 'day04-1',
            title: 'Day04-Page01',
          },
          {
            type:'day04-2',
            title: 'Day04-Page02',
          }
        ],
      },
      {
        title: 'Day05',
        tip: '页面跳转及跨页面信息传递，WXS，表单',
        showItem: false,
        item: [
          {
            type: 'day05-1',
            title: 'Day05-Page01',
          },
          {
            type:'day05-2',
            title: 'Day05-Page02',
          },
          {
            type:'day05-3',
            title: 'Day05-Page02',
            
          }
        ],
      },
    ],
    envList,
    selectedEnv: envList?.[0],
    haveCreateCollection: false,
  },
  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index;
    const powerList = this.data.powerList;
    const selectedItem = powerList[index];
    selectedItem.showItem = !selectedItem.showItem;
    if (selectedItem.type) {
      wx.navigateTo({
        url: `/pages/${selectedItem.type}/${selectedItem.type}`,
      });
    } else {
      this.setData({
        powerList,
      });
    }
  },

  jumpPage(e) {
    const { type, page } = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset)
      wx.navigateTo({
        url: `/pages/${type}/${type}`,
      });
  },
});
