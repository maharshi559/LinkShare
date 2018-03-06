var app = angular.module("linkshare", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: "mainCtrl"
    })
    // .when("/players", {
    //     templateUrl : "views/playerInfo.html",
    //     controller: "playerController"
    // })
    // .when("/scorecard", {
    //     templateUrl : "views/scorecard.html",
    //     controller : "scoreController"
    // })
    // .when("/home", {
    //     templateUrl : "views/home.html",
    //     controller : "homeController"
    // }).when("/gamers", {
    //     templateUrl : "views/players.html",
    //     controller : "gamerController"
    // })
});
