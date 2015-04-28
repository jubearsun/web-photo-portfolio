app.controller('AllanCtrl', ['$scope', function($scope) {
    // Add functionality for home page here
    $scope.pieces = [

   		'../img/allan/img2.jpg',
   		'../img/allan/img3.jpg',
   		'../img/allan/img1.jpg',
   		'../img/allan/img4.jpg'

    ];

     $scope.goToSlide = function(index) {
    	$scope.carouselIndex = index;
    };
}]);
