var routerApp = angular.module('project', [
    'project.mainView',
    'project.todoView',
    'project.secondView',
    'ui.router'
    ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/mainView');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('mainView', {
            url: '/mainView',
            templateUrl: 'app/shared/mainView/mainView.html',
            controller: 'mainViewController'     
        })
               

        .state('todoView', {
            url: '/todoView',
            templateUrl: 'app/shared/todoView/todoView.html',
            controller: 'todoViewController'
        })
        
        // SECONDVIEW AND MULTIPLE NAMED VIEWS =================================
        .state('secondView', {
            url: '/secondView',
            templateUrl: 'app/shared/secondView/secondView.html',
            controller: 'secondViewController'     
        });
        
});
