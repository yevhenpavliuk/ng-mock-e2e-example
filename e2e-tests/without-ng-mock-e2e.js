'use strict';

describe('example without ngMockE2E', () => {
  beforeEach(() => {
    browser.addMockModule('example', () => {
      angular.module('example').requires.push('ngMockE2E');

      const script = document.createElement('script');
      script.src = 'bower_components/angular-mocks/angular-mocks.js';
      document.body.appendChild(script);
    });
  });

  afterEach(() => {
    browser.removeMockModule('example'); // For the mock module that's added in `beforeEach`.
    browser.removeMockModule('example'); // For the mock module that's added in `it`.
    // The number of removals should be equal to the number of additions.
    // Removing the mock module in `it` prevents all registered functions from execution.
  });

  it('should have heading "It works!" if the server responds "It works!"', () => {
    browser.addMockModule('example', () => {
      angular.module('example').
        run($httpBackend => {
          $httpBackend.when('GET', 'heading').respond('It works!');
        });
    });

    browser.get('/');
    expect($('h1').getText()).toEqual('It works!');
  });

  it('should have heading "It does work!" if the server responds "It does work!"', () => {
    browser.addMockModule('example', () => {
      angular.module('example').
        run($httpBackend => {
          $httpBackend.when('GET', 'heading').respond('It does work!');
        });
    });

    browser.get('/');
    expect($('h1').getText()).toEqual('It does work!');
  });

  it('should have heading "Unavailable" if the server responds 404', () => {
    browser.addMockModule('example', () => {
      angular.module('example').
        run($httpBackend => {
          $httpBackend.when('GET', 'heading').respond(404);
        });
    });

    browser.get('/');
    expect($('h1').getText()).toEqual('Unavailable');
  });
});
