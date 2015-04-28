app.controller('DavinciCtrl', ['$scope', function($scope) {
    // Add functionality for home page here
    $scope.pieces = [

   		'../img/davinci/img2.png',
   		'../img/davinci/img3.jpg',
   		'../img/davinci/img1.jpg'
    ];

    $scope.goToSlide = function(index) {
    	$scope.carouselIndex = index;
    };
}]);
