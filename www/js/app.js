// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {

    function refresh() {
      $state.go('login');
      clearInterval(myint);
    }
    var myint = setInterval(refresh, 4000);

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('slide', {
          url: '/slide',
          views: {
          '': {
              templateUrl: 'templates/slide.html'
              
              }
          }
        })
        .state('start', {
          url: '/start',
          views: {
          '': {
              templateUrl: 'templates/start.html',
              controller: 'AppCtrl'
              }
          }
        })
        .state('login', {
          url: '/login',
          views: {
          '': {
              templateUrl: 'templates/login.html',
              controller: 'AppCtrl'
              }
          }
        })
         .state('register', {
          url: '/register',
          views: {
          '': {
              templateUrl: 'templates/register.html',
              controller: 'AppCtrl'
              }
          }
        })
        .state('cashgame', {
          url: '/cashgame',
          views: {
          '': {
              templateUrl: 'templates/cashgame.html',
              controller: 'CashCtrl'
              }
          }
        })
      .state('main', {
          url: '/main',
          views: {
          '': {
              templateUrl: 'templates/main.html',
              controller: 'MainCtrl'
              }
          }
        })
        .state('pointrummy', {
          url: '/pointrummy',
          views: {
          '': {
              templateUrl: 'templates/pointrummy.html',
              controller: 'PointrummyCtrl'
              }
          }
        })
        .state('poolrummy', {
          url: '/poolrummy',
          views: {
          '': {
              templateUrl: 'templates/poolrummy.html',
              controller: 'PoolrummyCtrl'
              }
          }
        })
        .state('dealrummy', {
          url: '/dealrummy',
          views: {
          '': {
              templateUrl: 'templates/dealrummy.html',
              controller: 'DealrummyCtrl'
              }
          }
        });
        
    $urlRouterProvider.otherwise('/start');
  
});
