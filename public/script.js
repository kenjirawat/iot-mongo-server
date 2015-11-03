angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this

    getIoT()

    scope.submit = function (input) {
      inputIoT(input)
    }

    function getIoT () {
      $http.get('/api/iot')
        .then(function success (response) {
          scope.iot = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }

    function inputIoT (data) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response)
          getIoT()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
  })
