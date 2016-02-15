//Get List Controller
angular.module('tasker.list',[])

.controller('getListController', function($scope, Poster){
	$scope.list = Poster.getItems()
		.then(function(data){
			$scope.list.items = data;
			console.log('These are all the items!',$scope.list.items);
		});
});