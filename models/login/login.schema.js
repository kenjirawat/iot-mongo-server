;(function () {
  'use strict'
  var modelName = 'login'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    name: String,
    surname: String,
    username: String,
    password: String
  })

  module.exports = mongoose.model(modelName, schema)
})()
// โครงสร้างข้อมูลของ database
