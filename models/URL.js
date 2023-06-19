const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  fullUrl: {
    type: String,   //資料型態是字串
    required: true  //設定該欄位為必填
  },
  shortUrl: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('URL', urlSchema)