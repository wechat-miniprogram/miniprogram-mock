const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html
    canIUse: _.mockSync('canIUse', true),

    // TODO

    // https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html
    setEnableDebug: _.mockSync('setEnableDebug', null),
    // https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html
    getLogManager: _.mockSync('getLogManager', console),
}
