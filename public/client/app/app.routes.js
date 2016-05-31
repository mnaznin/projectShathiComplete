var routerApp = angular.module('project', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index.html');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('homeView', {
            url: '/homeView',
            templateUrl: 'app/shared/homeView/homeView.html'
        })
        
        // SECONDVIEW AND MULTIPLE NAMED VIEWS =================================
        .state('secondView', {
            url: '/secondView',
            templateUrl: 'app/shared/secondView/secondView.html'     
        });
        
});
