'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', [function () {
    var vm = this;

      vm.getUser = function(id){
        var user;
        vm.users.forEach(function(item){
          if (item.id === id){
            user = item;
          }          
        });
        return user;
      }

      vm.addUser = function(user){
        vm.users.push(user);
      }
  }]);