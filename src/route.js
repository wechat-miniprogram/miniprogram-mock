const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html
    switchTab: _.mockAsync('switchTab'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html
    reLaunch: _.mockAsync('reLaunch'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html
    redirectTo: _.mockAsync('redirectTo'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
    navigateTo: _.mockAsync('navigateTo'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html
    navigateBack: _.mockAsync('navigateBack'),
}
