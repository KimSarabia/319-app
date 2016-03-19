'use strict';

angular
.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

});
