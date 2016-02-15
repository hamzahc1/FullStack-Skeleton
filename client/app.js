angular.module('tasker', [
  'tasker.ajax',
  'tasker.list',
  'tasker.post',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/items', {
      templateUrl: '../getList/getList.html',
      controller: 'getListController'
    })
    .when('/post', {
      templateUrl: '../getList/postItem.html',
      controller: 'postController'
    })
    .otherwise({redirectTo: '/'});
});