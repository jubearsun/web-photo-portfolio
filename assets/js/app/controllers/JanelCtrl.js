app.controller('JanelCtrl', ['$scope', function($scope) {
    // Add functionality for home page here
    $scope.pieces = [

   		'../img/janel/img2.jpg',
   		'../img/janel/img3.jpg',
   		'../img/janel/img1.jpg',
   		'../img/janel/new1.jpg',
   		'../img/janel/new2.jpg'

    ];

    $scope.goToSlide = function(index) {
    	$scope.carouselIndex = index;
    };
    
}]);
