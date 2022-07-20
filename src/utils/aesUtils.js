export const AES_KEY = 'fM94e%aiB!MQSy*j'
export const IV_DESC = '16-Bytes--String'
export const AES_DESCRYPT = function (content) {
  const CryptoJS = require('crypto-js')
  // 十六位十六进制数作为密钥
  let key = CryptoJS.enc.Utf8.parse(AES_KEY)
  // 十六位十六进制数作为密钥偏移量)
  let iv = CryptoJS.enc.Utf8.parse(IV_DESC)
  let decrypt = CryptoJS.AES.decrypt(content, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return decrypt.toString(CryptoJS.enc.Utf8)
}
