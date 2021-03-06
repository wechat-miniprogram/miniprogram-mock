const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html
    updateShareMenu: _.mockAsync('updateShareMenu'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html
    showShareMenu: _.mockAsync('showShareMenu'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html
    hideShareMenu: _.mockAsync('hideShareMenu'),
    // https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html
    getShareInfo(options = {}) {
        _.runInAsync(options, {
            errMsg: 'getShareInfo:ok',
            encryptedData: 'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZMQmRzooG2xrDcvSnxIMXFufNstNGTyaGS9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+3hVbJSRgv+4lGOETKUQz6OYStslQ142dNCuabNPGBzlooOmB231qMM85d2/fV6ChevvXvQP8Hkue1poOFtnEtpyxVLW1zAo6/1Xx1COxFvrc2d7UL/lmHInNlxuacJXwu0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn/Hz7saL8xz+W//FRAUid1OksQaQx4CMs8LOddcQhULW4ucetDf96JcR3g0gfRK4PC7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns/8wR2SiRS7MNACwTyrGvt9ts8p12PKFdlqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYVoKlaRv85IfVunYzO0IKXsyl7JCUjCpoG20f0a04COwfneQAGGwd5oa+T8yO5hzuyDb/XcxxmK01EpqOyuxINew==',
            iv: 'r7BXXKkLb8qrSNn05n0qiA==',
        })
    },
}
