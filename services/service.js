//ajax services
angular.module('tasker.ajax',[])
.factory('Poster', function($http) {
	return {
		sendItem: function(item) {
			console.log("SEND ITEM WAS CALLED", item);
			return $http({
				method: 'POST',
				url: '/post',
				data: {task: item}
			})
			.then(function(response) {
				console.log('THIS IS THE RESPONSE', response);
				return response;
			}, function(error) {
				console.error('THERE IS AN ERROR');
			});
		},
		getItems: function(){
			return $http({
				method: 'GET',
				url: '/items'
			})
			.then(function(response){
				console.log('this is all the data!', response.data);
				return response.data;	
			}, function(error){
				console.error('this is a big problem');
			});
		}
	};
});