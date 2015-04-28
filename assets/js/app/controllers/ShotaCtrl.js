app.controller('ShotaCtrl', ['$scope', function($scope) {
    // Add functionality for home page here

    $scope.pieces = [

   		'../img/shota/img2.jpg',
   		'../img/shota/img3.jpg',
   		'../img/shota/img1.jpg',
   		'../img/shota/img4.jpg'

    ];

    $scope.goToSlide = function(index) {
    	$scope.carouselIndex = index;
    };

}]);
