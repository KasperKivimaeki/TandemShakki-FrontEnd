angular
  .module('app.routes', ['ngRoute'])
  .config(config);

function config ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'sections/home/home.tpl.html',
      controller: 'HomeController as home'
    })
    .when('/game', {
      templateUrl: 'sections/game/game.tpl.html',
      controller: 'HomeController as home'
    })
    .when('/profile', {
      templateUrl: 'sections/profile/profile.tpl.html',
      controller: 'HomeController as home'
    })
    .when('/settings', {
      templateUrl: 'sections/settings/settings.tpl.html',
      controller: 'HomeController as home'
    })
    .otherwise({
      reditectTo: '/'
    });
}
