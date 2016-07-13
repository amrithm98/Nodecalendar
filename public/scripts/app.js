angular.module("samp", ["ngMaterial","ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/user");
        $stateProvider
            .state("user", {
                url: "/user",
                templateUrl: "modules/user/user.html",
                controller: "userController"
            });
    });
