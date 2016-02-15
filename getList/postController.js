//Get List Controller
angular.module('tasker.post',[])

.controller('postController', function($scope, Poster){
	// console.log("outside the button");
	$scope.addItem = function(item){
		console.log("what is item,", item);
		Poster.sendItem(item);
		// $scope.newItem = '';
		};
});