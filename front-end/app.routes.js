app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/sections/home/home.tpl.html',
      controller: 'HomeController as home'
    })
    .when('/game', {
      templateUrl: 'src/sections/game/game.tpl.html',
      controller: 'GameController as game'
    })
    .when('/profile', {
      templateUrl: 'src/sections/profile/profile.tpl.html',
      controller: 'ProfileController as profile'
    })
    .when('/settings', {
      templateUrl: 'src/sections/settings/settings.tpl.html',
      controller: 'SettingsController as settings'
    })
    .otherwise({
      reditectTo: '/'
    });
});
