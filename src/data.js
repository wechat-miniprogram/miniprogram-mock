const _ = require('./utils')

module.exports = {
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html
    setStorageSync(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html
    setStorage(options) {
        const res = { errMsg: 'setStorage:ok' }
        try {
            wx.setStorageSync(options.key, options.data)
        } catch (err) {
            res.errMsg = `setStorage:fail ${err.message}`
        }

        _.runInAsync(options, res)
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html
    removeStorageSync(key) {
        localStorage.removeItem(key)
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html
    removeStorage(options) {
        const res = { errMsg: 'removeStorage:ok' }
        try {
            wx.removeStorageSync(options.key)
        } catch (err) {
            res.errMsg = `removeStorage:fail ${err.message}`
        }

        _.runInAsync(options, res)
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html
    getStorageSync(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html
    getStorageInfoSync() {
        const length = localStorage.length
        const keys = []
        let currentSize = 0

        for (let i = 0; i < length; i++) {
            const key = localStorage.key(i)
            keys.push(key)
            currentSize += _.getSize(localStorage.getItem(key))
        }

        return {
            keys,
            currentSize,
            limitSize: 1024 * 10,
        }
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html
    getStorageInfo(options) {
        let res = { errMsg: 'getStorageInfo:ok' }
        try {
            const data = wx.getStorageInfoSync()
            res = Object.assign(res, data)
        } catch (err) {
            res.errMsg = `getStorageInfo:fail ${err.message}`
        }

        _.runInAsync(options, res)
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html
    getStorage(options) {
        const res = { errMsg: 'getStorage:ok' }
        try {
            res.data = wx.getStorageSync(options.key)
        } catch (err) {
            res.errMsg = `getStorage:fail ${err.message}`
        }

        _.runInAsync(options, res)
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html
    clearStorageSync() {
        localStorage.clear()
    },
    // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html
    clearStorage(options) {
        const res = { errMsg: 'clearStorage:ok' }
        try {
            wx.clearStorageSync()
        } catch (err) {
            res.errMsg = `clearStorage:fail ${err.message}`
        }

        _.runInAsync(options, res)
    },
}
