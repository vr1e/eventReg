'use strict';

eventsApp
  .directive('greeting', function() {
    return {
      restrict: 'E',
      replace: true,
      priority: -1,
      template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
      controller: function ($scope) {
        var greetings = ['hello'];
        $scope.sayHello = function() {
          alert(greetings.join());
        }
        this.addGreeting = function(greeting) {
          //greetings = [];
          greetings.push(greeting);
        }
      }
    }
  })
  .directive('finnish', function() {
    return {
      restrict: 'A',
      priority: -1,
      terminal: true,
      require: 'greeting',
      link: function(scope, element, attrs, controller) {
        controller.addGreeting('hei');
      }
    }
  })
  .directive('hindi', function() {
    return {
      restrict: 'A',
      priority: -2,
      require: 'greeting',
      link: function(scope, element, attrs, controller) {
        controller.addGreeting('नमस्ते');
      }
    }
  });

// eventsApp.controller('GreetingController',
//   function GreetingController($scope) {
//     var greetings = ['hello'];
//     $scope.sayHello = function() {
//       alert(greetings.join());
//     }
//     this.addGreeting = function(greeting) {
//       greetnigs.push(greeting);
//     }
// });