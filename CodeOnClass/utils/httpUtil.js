//封装网络请求
function request(obj) {

  return new Promise(function (resove, reject) {

    let url = ''
    if (obj.url) {
      url = obj.url
    }
    let data = {}
    if (obj.data) {
      data = obj.data
    }
    let header = {
      'content-type': 'application/json'
    }
    if (obj.header) {
      header = obj.header
    }
    let method = 'get'
    if (obj.method) {
      method = obj.method
    }
    let responseType = 'text'
    if (obj.responseType) {
      responseType = obj.responseType
    }
    let timeout = 1000
    if (obj.timeout) {
      timeout = obj.timeout
    }

    wx.request({
      url: url,
      data: data,
      header: header,
      method: method,
      responseType: responseType,
      timeout: 0,
      success: (result) => {
        console.log('请求结果',result)
        if (result.statusCode == 200) {
          if (result.data.code == 200) {
            resove(result.data)
          }else if (result.data.code == 401) {
            wx.showToast({
              title: '登录已失效，请重新登陆',
            })
            wx.navigateTo({
              url: 'pages/index/index',
            })
          }else{
            reject(result.data.msg)
          }
        }else{
          reject('网络请求失败' + result.statusCode)
        }
      },
      fail: (err) => { reject('请求异常' + err.errMsg) },
      complete: (res) => {},
    })
  })
}
module.exports = {
  request 
}