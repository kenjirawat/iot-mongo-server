var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/iot_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var iot = require('./models/iot/iot.route.js')
var login = require('./models/login/login.route.js')

app.use('/api', require('./models/iot/iot.route.js'))
app.use('/api/login',login)
// app.use('/api/iot', iot)

// app.post('/', function (req, res) {
//   var obj = new Model(req.body)
//   obj.save(function (err, obj) {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.send(obj)
//     }
//   })
// })

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
