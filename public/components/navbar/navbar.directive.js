'use strict';

angular.module('app')
.directive('blNavbar', function(){

  function link(scope, elem, attrs){

  }

  return {
    restrict: 'AE',
    templateUrl: './components/navbar/navbar.html',
    scope: {},
    link: link
  }
})
