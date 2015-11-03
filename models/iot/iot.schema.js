;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    timestamp: {
      type: String,
      required: true
    },
    iot_id: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    relative_humidity: {
      type: Number,
      required: true
    }
  // date: { type: Date, default: Date.now }
  })

  module.exports = mongoose.model(modelName, schema)
})()
// โครงสร้างข้อมูลของ database
