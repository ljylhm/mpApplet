let prefix = "keyan.dev."


const Set = (key, value) => {
  wx.setStorageSync(prefix + key, value)
}

const Get = (key) => {
  return wx.getStorageSync(prefix + key)
}

module.exports = {
  Set:Set,
  Get:Get
}