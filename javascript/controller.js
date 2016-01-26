angular.module('routingControllers',[])
.controller('HomeController',function($scope) {

 })
 .controller('RatesController',function($scope) {
    $scope.cityRangeEnter = function() {

        $("#cityrange").attr("src", "../images/cityrange_change.png");
    },
    $scope.cityRangeLeave = function() {

        $("#cityrange").attr("src", "../images/cityrange.png");
    },
    $scope.tripperRangeEnter = function() {

        $("#tripperrange").attr("src", "../images/tripperrange_change.png");
    },
    $scope.tripperRangeLeave = function() {

        $("#tripperrange").attr("src", "../images/tripperrange.png");
    },
    $scope.vanRangeEnter = function() {

        $("#vanrange").attr("src", "../images/vanrange_change.png");
    },
    $scope.vanRangeLeave = function() {

        $("#vanrange").attr("src", "../images/vanrange.png");
    }
 })
 .controller('LocationsController',function($scope) {
   $scope.baggotStreet = function() {

        document.getElementById("map-box").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.36625363033!2d-6.251200283978807!3d53.33669968313453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e97cf75f087%3A0x4d21c4ad8342c123!2sBaggot+Street+Lower%2C+Dublin!5e0!3m2!1sen!2sie!4v1450715206416" style="width:100%; height:100%;" frameborder="0" style="border:0" allowfullscreen></iframe>';
   }
   $scope.sandyford = function() {

       document.getElementById("map-box").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9544.365322937816!2d-6.233677652992036!3d53.26998321209752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867090b5444013d%3A0x2600c7a819bb0531!2sSandyford%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v1450715933395" style="width:100%; height:100%;" frameborder="0" style="border:0" allowfullscreen></iframe>';
   }
   $scope.drumcondra = function() {

       document.getElementById("map-box").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9521.881569066654!2d-6.262519752947828!3d53.370632532203864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e7762b4c13b%3A0x2600c7a819b93021!2sDrumcondra%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v1453133344012" style="width:100%; height:100%;" frameborder="0" style="border:0" allowfullscreen></iframe>';
   }
 })
 .controller('FAQsController', ['$scope', '$http', function($scope, $http) {

        $http.get('../answers.json').then(function(response){
        $scope.answers = response.data;
     });
 }])
 .controller('ContactUsController',function($scope, $http) {

     $scope.contactSend = function () {

         var send = document.getElementById('contact-send');

         if (send) {
             $scope.sending = function () {
                 send.innerHTML = '...Sending';

             }
             $scope.sent = setTimeout(function () {

                 send.innerHTML = 'Sent!'
             }, 3000)
         }
     }

     $scope.formData = {};

     $scope.onSubmit = function (valid) {

         if(valid) {

             console.log("Hey i'm submitted!");
             console.log($scope.formData);

             $http.post('https://minmax-server.herokuapp.com/register/', $scope.formData).
             success(function(data){

                 console.log(":)");
             }).error(function(data){

                console.log(":(");
             });
         } else {

             console.log("Invalid Form!");
         }

     }

 })
 .controller('JoinNowController',function($scope) {

 })
 .controller('LoginController',function($scope) {

 });