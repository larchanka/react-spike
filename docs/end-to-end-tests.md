[Back to documentation's list](./)

# End-to-end Tests

We use `Selenium` to run end-to-end tests. Javascript API for Selenium is based on the [`Webdriver.io`](http://webdriver.io) framework.

Tests should be placed into `selenium-tests/spec` folder.

Execute `npm run selenium` to run tests.

`Chai` and `Should/Expect` are supported. Docs can [be found here](http://chaijs.com/api/bdd/).

Currently tests are runnign against Chrome Browser on the local machine. Remote server or Saas can be added later.

Every test should describe the feature and should go through all possible user interactions with the component / feature.

---

[Back to documentation's list](./)
