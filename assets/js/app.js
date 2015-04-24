var app = angular.module('cle', [
        'ui.router',
        'ngTouch'
    ]);

app.run(['$rootScope',
    '$state',
    '$location',
    '$window',
    function ($rootScope, $state, $location, $window) {
        $rootScope.$state = $state;

        // Check if page requires login
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                // Add functionality before state/page changes here
            }
        );

        // Get Page Title on successful page change
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            // Sets HTML/Page Title
            $rootScope.currentPage = toState.name;

            if (toState.data && toState.data.pageTitle) {
                $rootScope.pageTitle = toState.data.pageTitle;
            } else {
                $rootScope.pageTitle = 'Innovative Design';
            }

            // Add functionality for successful state/page change here
        });

        // Scroll to top of page on page change
        $rootScope.$on('$viewContentLoaded', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    }
]);

app.config(['$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                data: {
                    pageTitle: 'Innovative Design'
                }
            })
            .state('brandon', {
                url: '/brandon',
                templateUrl: './views/brandon.html',
                data: {
                    pageTitle: 'Portfolio | Brandon'
                }
            })
            .state('patrick', {
                url: '/patrick',
                templateUrl: './views/patrick.html',
                data: {
                    pageTitle: 'Portfolio | Patrick'
                }
            })
            .state('neil', {
                url: '/neil',
                templateUrl: './views/neil.html',
                data: {
                    pageTitle: 'Portfolio | Neil'
                }
            })
            .state('davinci', {
                url: '/davinci',
                templateUrl: './views/davinci.html',
                data: {
                    pageTitle: 'Portfolio | Davinci'
                }
            })
            .state('shota', {
                url: '/shota',
                templateUrl: './views/shota.html',
                data: {
                    pageTitle: 'Portfolio | Shota'
                }
            })
            .state('janel', {
                url: '/janel',
                templateUrl: './views/janel.html',
                data: {
                    pageTitle: 'Portfolio | Janel'
                }
            })
            .state('samantha', {
                url: '/samantha',
                templateUrl: './views/samantha.html',
                data: {
                    pageTitle: 'Portfolio | samantha'
                }
            })
            .state('elizabeth', {
                url: '/elizabeth',
                templateUrl: './views/elizabeth.html',
                data: {
                    pageTitle: 'Portfolio | Elizabeth'
                }
            })
            .state('allan', {
                url: '/allan',
                templateUrl: './views/allan.html',
                data: {
                    pageTitle: 'Portfolio | Allan'
                }
            });
    }
]);