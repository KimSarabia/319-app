'use strict';

angular
.module('app')
.config(function($stateProvider){

  $stateProvider
  .state('photos', {
    url: "/photos",
    templateUrl: "components/photos/photos/html"
  })
  .state('photos.list', {
    url: "/photos",
    templateUrl: "components/photos/photos/html"
  })

});
