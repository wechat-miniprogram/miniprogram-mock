const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html
    getExtConfigSync() {
        return {}
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html
    getExtConfig(options = {}) {
        _.runInAsync(options, {
            errMsg: 'getExtConfig:ok',
            extConfig: wx.getExtConfigSync(),
        })
    },
}
