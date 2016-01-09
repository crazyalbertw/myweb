/**
 * Created by crazyalbert on 12/22/15.
 */
var test = angular.module('first', []);
test.controller('todoCtrl', function($scope) {

    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        })
    };

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        //add to todolist
        $scope.formTodoText = '';
        //clear input data
        }
});

