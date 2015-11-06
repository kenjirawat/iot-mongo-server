;(function () {
  'use strict'
  var modelName = 'login'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  })

  module.exports = mongoose.model(modelName, schema)
})()
// โครงสร้างข้อมูลของ database
