'use strict';

angular.module('project.todoView', [])

.controller('todoViewController', ['$scope', function($scope){
	
  console.log('Yo I am project.Homeview Controller')
	$scope.todos = [
	  {text:'Learn AngularJS', done:false},         
	  {text: 'Build an app', done:false}
	];

	$scope.each = function(coll, func){
		if(Array.isArray(coll)){
			for(var i = 0; i < coll.length; i++){
				func(coll[i], i);
			}
		} else {
			for(var key in coll){
				func(coll[key], key);
			}
		}
	}

  $scope.filter = function(coll, predicate){
  	var acc = [];
  	$scope.each(coll, function(element, i){
  		if(predicate(element, i)){
  			return acc.push(element);
  		}
  	});
  	return acc;
  }

	$scope.getTotalTodos = function () {
	  return $scope.todos.length;
	};

	$scope.addTodo = function () {
	  $scope.todos.push({text:$scope.formTodoText, done:false});
	  $scope.formTodoText = '';
	};

  $scope.clearCompleted = function () {
      $scope.todos = $scope.filter($scope.todos, function(todo){
          return !todo.done;
      });
  };
}]);