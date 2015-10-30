;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    timestamp: String,
    iot_id: String,
    temperature: Number,
    relative_humidity: Number
  // date: { type: Date, default: Date.now }
  })

  module.exports = mongoose.model(modelName, schema)
})()
// โครงสร้างข้อมูลของ database
