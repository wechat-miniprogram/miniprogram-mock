require('../src')

test('getLogManager', async () => {
    expect(wx.getLogManager()).toBe(console)
})

test('setEnableDebug', () => {
    expect(wx.setEnableDebug(true)).toBe(null)
})
