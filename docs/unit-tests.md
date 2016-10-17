[Back to documentation's list](./)

# Unit Tests

`npm start` runs the test setup. It uses mocha to run through the files and execute all the unit tests.

All test files should be called `filename.test.js` and stored in the same folder with a component/util/action/reducer. Mocha recursively goes through the folders using patter `*.test.js`. If proper file was found, tests will be executed.

## Mocking
All services and actions should use mock requests and responses. Use [`sinon`](http://sinonjs.org) to spy and mock. Remember that `const` variables cannot be mocked, because they're `read only`.

## Coverage
Tests should cover all possible conditions. If you have **3** `if`-s, you have to write **6** tests to check all `if` and `else` statements.

## JSX testing
Right now we will not test components. But if you have a desire to test it, use [`enzyme`](https://github.com/airbnb/enzyme) (allready included).

## TODO
Add coverage checking tool, i.e. [`Istanbul`](https://github.com/gotwarlost/istanbul).

---

[Back to documentation's list](./)
