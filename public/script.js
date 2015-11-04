angular.module('app', [])
  .controller('AppController', function ($http) {
    var scope = this

    getIoT()

    scope.submit = function (input) {
      inputIoT(input)
    }


    // scope.lengData = 0
    // var data = []
    //  $http.get('/api/iot')
    //     .then(function success (response) {
    //       for(var i=0;i<response.data.length;i++) {
    //         scope.lengData = i+1
    //         console.log(response.data[i].iot_id)
    //         data[i] = [
    //         {
    //             value : scope.iot[i].temperature,
    //             color : "#F7464A",
    //             highlight: "#FF5A5E",
    //             label: "Temp"
    //         },
    //         {
    //             value: scope.iot[i].relative_humidity,
    //             color: "#46BFBD",
    //             highlight: "#5AD3D1",
    //             label: "Hum"
    //         }
    //       ]
    //       var ctx1 = document.getElementById("myChart").getContext("2d");
    //       new Chart(ctx1).Pie(data1, {
    //           animateScale: true
    //       });

    //       }
          // console.log(response.data[0].iot_id)
          // console.log(lengData)

        // }, function error (response) {
        // alert(response.data.message)
        // })
    

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
        new Chart(ctx1).Pie(data1, {
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

  })