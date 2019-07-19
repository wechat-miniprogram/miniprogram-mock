const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html
    openLocation: _.mockAsync('openLocation'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html
    getLocation(options = {}) {
        _.runInAsync(options, {
            errMsg: 'getLocation:ok',
            accuracy: 65,
            altitude: 0,
            latitude: 23.12908,
            longitude: 113.26436,
            speed: -1,
            verticalAccuracy: 65,
            horizontalAccuracy: 65,
        })
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html
    chooseLocation(options = {}) {
        _.runInAsync(options, {
            errMsg: 'chooseLocation:ok',
            address: '广东省广州市海珠区tit创意园品牌街',
            name: '腾讯微信总部',
            latitude: 23.1001,
            longitude: 113.32456,
        })
    },
}
