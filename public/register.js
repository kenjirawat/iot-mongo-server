angular.module('app', [])
  .controller('AppController', function($http,$interval) {
    var scope = this

    getlogin()
    
    scope.register = function (input) {
      alert('Your Acount :'+input.username)
      saveRegister(input)
    }

    function saveRegister (data){
      $http.post('/api/login', data) //insert object
        .then(function success (response) {
          console.log(response)
          alert('คุณได้สมัครเป็นสมาชิกของระแล้ว')
          window.location = "register.html"
        }, function error (response) {
          alert(response.data.message)
        })
    }
    
  })