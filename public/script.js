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
 //////////// Chart ///////////
    var data1 = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]
        
        var data2 = [
            {
                value: 60,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 32,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            }
        ]

        var ctx1 = document.getElementById("myChart").getContext("2d");
        new Chart(ctx1).Doughnut(data1, {
            animateScale: true
        });

        // new Chart(ctx).Radar(data);
        var ctx2 = document.getElementById("doung").getContext("2d");
        new Chart(ctx2).Doughnut(data2, {
            animateScale: true
        });


  })
