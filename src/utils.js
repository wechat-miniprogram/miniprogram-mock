const MOCK_DATA_MAP_CACHE = {}

/**
 * 设置接口假数据
 */
function setMockData(apiName, list) {
  if (typeof apiName !== 'string' || !wx[apiName] || !Array.isArray(list)) throw new Error('invalid arguments')

  MOCK_DATA_MAP_CACHE[apiName] = list
}

/**
 * 获取接口假数据
 */
function getMockData(apiName) {
  if (typeof apiName !== 'string' || !wx[apiName]) throw new Error('invalid arguments')

  return MOCK_DATA_MAP_CACHE[apiName] || null
}

/**
 * 异步方法通用部分
 */
function runInAsync(options, res) {
  setTimeout(() => {
    if (res.errMsg.indexOf(':ok') >= 0 && typeof options.success === 'function') options.success(res)
    if (res.errMsg.indexOf(':fail') >= 0 && typeof options.fail === 'function') options.fail(res)
    if (typeof options.complete === 'function') options.complete(res)
  }, 0)
}

/**
 * 计算字符串字节数
 */
function getSize(string) {
  let total = 0
  for (let i = 0, len = string.length; i < len; i++) {
    const charCode = string.charCodeAt(i)
    if (charCode <= 0x007f) {
      total += 1
    } else if (charCode <= 0x07ff) {
      total += 2
    } else if (charCode <= 0xffff) {
      total += 3
    } else {
      total += 4
    }
  }

  return total
}

/**
 * 快速模拟同步接口
 */
function mockSync(apiName, defaultValue) {
  return input => {
    const cacheList = MOCK_DATA_MAP_CACHE[apiName]
    
    if (cacheList && cacheList.length) {
      for (const item of cacheList) {
        if (item.in === input) {
          if (item.err) throw new Error(`${apiName}:fail${typeof item.err === 'string' ? ' ' + item.err : ''}`)
          return item.out
        }
      }
    }

    return defaultValue
  }
}

/**
 * 快速模拟异步接口
 */
function mockAsync(apiName) {
  return (options = {}) => {
    const res = {
      errMsg: `${apiName}:ok`,
    }
    runInAsync(options, res)
  }
}

module.exports = {
  setMockData,
  getMockData,
  runInAsync,
  getSize,
  mockSync,
  mockAsync,
}
