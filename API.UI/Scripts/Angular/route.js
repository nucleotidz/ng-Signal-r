

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('Home', {
        url: '/',       
        views: {
            'Header': {
                templateUrl: 'Home/Header',
               
            },
            'content': {
                templateUrl: 'Home/Home',
                controller: 'HomeController',
                controllerAs:"vm"
            }              
           

        }
    }).state('Home.About', {
        url: 'About',
        views: {
          
            'content@': {
                templateUrl: 'Home/About',
                controller: 'AboutUsController',
                params: {data:null}
            },
          
        }

    })

});