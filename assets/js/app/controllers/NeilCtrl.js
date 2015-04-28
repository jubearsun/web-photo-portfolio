app.controller('NeilCtrl', ['$scope', function($scope) {
    // Add functionality for home page here
    $scope.pieces = [

   		'../img/neil/img2.jpg',
   		'../img/neil/img3.jpg',
   		'../img/neil/img1.jpg',
   		'../img/neil/img4.jpg',
   		'../img/neil/img5.jpg',
   		'../img/neil/img6.jpg',
   		'../img/neil/img7.jpg'

    ];

    $scope.goToSlide = function(index) {
    	$scope.carouselIndex = index;
    };
}]);
