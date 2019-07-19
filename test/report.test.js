require('../src')

test('reportMonitor', () => {
    expect(wx.reportMonitor('1', 1)).toBe(null)
})
