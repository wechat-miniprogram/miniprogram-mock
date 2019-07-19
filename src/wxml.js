module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
    createSelectorQuery() {
        return {
            in(compInst) {
                return compInst.createSelectorQuery()
            },
        }
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html
    createIntersectionObserver(compInst, options) {
        return compInst.createIntersectionObserver(options)
    },
}
