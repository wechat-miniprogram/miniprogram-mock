const mock = require('../src')

test('canIUse', () => {
    // https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html
    mock.setMockData('canIUse', [{
        in: 'button.open-type.contact',
        out: true,
    }, {
        in: 'CameraContext.onCameraFrame',
        out: false,
    }, {
        in: 'live-player',
        out: false,
    }, {
        in: 'haha',
        err: true,
    }, {
        in: '*',
        out: true,
    }])
    expect(wx.canIUse('button.open-type.contact')).toBe(true)
    expect(wx.canIUse('CameraContext.onCameraFrame')).toBe(false)
    expect(wx.canIUse('live-player')).toBe(false)
    expect(wx.canIUse('text.selectable')).toBe(true)
    expect(wx.canIUse('console.log')).toBe(true)

    let catchErr = null
    try {
        wx.canIUse('haha')
    } catch (err) {
        catchErr = err
    }
    expect(catchErr.message).toBe('canIUse:fail')
})
