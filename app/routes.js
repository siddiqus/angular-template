// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'html/home.html',
        controller: 'HomeController'
    })

    // route for the about page
    .when('/about', {
        templateUrl: 'html/about.html',
        controller: 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'html/contact.html',
        controller: 'contactController'
    });

    // $locationProvider.html5Mode(true);
});