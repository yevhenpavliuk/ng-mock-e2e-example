'use strict';

angular.module('example', []).
  run(async ($http, $rootScope) => {
    try {
      const {data} = await $http.get('heading');
      $rootScope.heading = data;
    } catch (ignoredError) {
      $rootScope.heading = 'Unavailable';
    } finally {
      $rootScope.$apply();
    }
  });
