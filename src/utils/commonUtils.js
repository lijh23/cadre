//  获取最大目录自编码
export const getMaxCode = (category, props) => {
  var index = 0
  for (var i = 0; i < category.length; i++) {
    var item = category[i]
    var pattern = item[props].substring(item[props].length - 2)
    var tmp = parseInt(pattern)
    if (tmp >= index) {
      index = tmp
    }
  }
  return index
}

// 获取目录
export const getMenuItem = (category, id) => {
  if (Array.isArray(category)) {
    for (var i = 0; i < category.length; i++) {
      var item = category[i]
      if (item.id + '' === id + '') {
        return item
      } else {
        item = getMenuItem(item.children, id)
        if (item) {
          return item
        }
      }
    }
  }
  return null
}

// 补零
export const PrefixInteger = (num, length) => {
  return (Array(length).join('0') + num).slice(-length)
}

export const checkSQL = (sql) => {
  const dict = [
    'delete', 'DELETE',
    'update', 'UPDATWE',
    'insert', 'INSERT',
    'drop', 'DROP',
    'create', 'CREATE',
    'grant', 'GRANT'
  ]

  var flag = true

  if (sql) {
    if (sql === '') {
      return false
    } else {
      for (var i = 0; i < dict.length; i++) {
        if (sql.indexOf(dict[i]) > -1) {
          flag = false
          break
        }
      }
    }
  }
  return flag
}

// 获取当前时间
export const getNowTime = () => {
  var date = new Date()
  var seperator1 = '-'
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  return year + seperator1 + month + seperator1 + strDate
}

// 获取文件地址【下载文件时使用】
export const getFilePath = (path) => {
  return 'http://192.168.4.60:50075/webhdfs/v1/' + path + '?op=OPEN&namenoderpcaddress=master.gmsk.domain:8020&offset=0'
}
