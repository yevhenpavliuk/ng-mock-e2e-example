'use strict';

const ngMockE2E = require('ng-mock-e2e');
const {$httpBackend} = ngMockE2E;

describe('example with ngMockE2E', () => {
  beforeEach(() => {
    ngMockE2E.addMockModule();
    ngMockE2E.addAsDependencyForModule('example');
    ngMockE2E.embedScript('bower_components/angular-mocks/angular-mocks.js');
  });

  afterEach(() => {
    ngMockE2E.clearMockModules();
  });

  it('should have heading "It works!" if the server responds "It works!"', () => {
    $httpBackend.when('GET', 'heading').respond('It works!');
    browser.get('/');
    expect($('h1').getText()).toEqual('It works!');
  });

  it('should have heading "It does work!" if the server responds "It does work!"', () => {
    $httpBackend.when('GET', 'heading').respond('It does work!');
    browser.get('/');
    expect($('h1').getText()).toEqual('It does work!');
  });

  it('should have heading "Unavailable" if the server responds 404', () => {
    $httpBackend.when('GET', 'heading').respond(404);
    browser.get('/');
    expect($('h1').getText()).toEqual('Unavailable');
  });
});
