# ngMockE2E Example

A tiny [AngularJS](https://angularjs.org) app showing how to use [ngMockE2E node module](https://www.npmjs.com/package/ng-mock-e2e) in [Protractor](http://protractortest.org/) end-to-end tests.

Clone the project and start the development server:

```sh
git clone https://github.com/yevhenpavliuk/ng-mock-e2e-example.git
cd ng-mock-e2e-example
npm start # automatically installs node modules and bower components
```

While having the server running, open a new terminal session (you should be in the cloned directory) and run Protractor tests:

```sh
npm run protractor
```

Alternatively, you can start the sever in background `npm start &` and run the tests in the same terminal session.
