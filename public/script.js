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


//////////// Chart ///////////
          var data1 = [
            {
                value : scope.iot[0].temperature,
                color : "#F7464A",
                highlight: "#FF5A5E",
                label: "Temp"
            },
            {
                value: scope.iot[0].relative_humidity,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Hum"
            }
          ]
        var data2 = [
            {
                value : scope.iot[1].temperature,
                color : "#F7464A",
                highlight: "#FF5A5E",
                label: "อุณหภูมิ"
            },
            {
                value: scope.iot[1].relative_humidity,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "ความชื้น"
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
        })
//////// end chart /////

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
 
////////////////////// Chart ////////////
        

  })
